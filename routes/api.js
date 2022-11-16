'use strict'

let momogodb = require('mongodb')
let mongoose = require('mongoose')
const axios = require("axios");
const bcrypt = require("bcrypt")
const Analytics = require('../components/accountCalculations');
const TradeSimulation = require('../components/tradeSimulation');
const e = require('express');

module.exports = function (app) {

    mongoose.connect("mongodb+srv://Panashe3000:%23FssUcdd7Z!cjbT@cluster0.mm7xd4f.mongodb.net/tradingJournal?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

    let tradeSchema = new mongoose.Schema({
        date: { type: Date, required: true },
        instrument: { type: String, required: true },
        direction: { type: String, required: true },
        entry: { type: Number },
        exit: { type: Number },
        size: { type: Number },
        result: { type: String },
        commentary: { type: String },
        reasons: { type: String },
        mistakes: { type: String },
        profit: { type: Number },
        loss: { type: Number },
        risk: { type: Number },
        reward: { type: Number },
        balance: { type: Number }
    })

    let userSchema = new mongoose.Schema({
        email: { type: String, required: true },
        password: { type: String, required: true },
        trades: [tradeSchema]
    })

    let User = new mongoose.model('User', userSchema)
    let Trade = new mongoose.model('Trade', tradeSchema)

    const analytics = new Analytics()
    const tradeSimulation = new TradeSimulation()

    app.route('/docs').get(function (req, res) {
        return res.sendFile(process.cwd() + '/views/docs.html')
    })

    app.route('/signIn').get(function (req, res) {
        return res.sendFile(process.cwd() + '/views/signIn.html')
    })
        .post((req, res) => {

            //Minimum eight characters, at least one letter, one number 
            const passwordAuth = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

            User.findOne({ email: req.body.email }, (err, existingEmail) => {
                if (!err, existingEmail) {

                    return res.json({ email: "Email already exists" })
                }
                else if (!passwordAuth.test(req.body.password)) {
                    return res.json({ password: "Minimum eight characters, at least one letter and one number" })
                }
                else if (err) {
                    console.log(err)
                    return
                }
                else {

                    let hash = bcrypt.hashSync(req.body.password, 12);
                    const newUser = new User({
                        email: req.body.email,
                        password: hash
                    })

                    newUser.save((err, savedTrade) => {
                        if (!err && savedTrade) {

                            return res.redirect('/dashboard/' + "?id=" + savedTrade._id)
                        }
                        else {
                            console.log(err)
                            return
                        }
                    })
                }
            })
        })


    app.route('/logIn').get(function (req, res) {
        return res.sendFile(process.cwd() + '/views/logIn.html')
    })
        .post((req, res) => {

            User.findOne({ email: req.body.email }, (err, user) => {
                if (!err && user && bcrypt.compareSync(req.body.password, user.password)) {

                    return res.redirect('/dashboard/' + '?id=' + user._id)
                }
                else if (user && !bcrypt.compareSync(req.body.password, user.password)) {
                    return res.json({ password: "Enter correct password!" })
                    //return res.status(400).send({
                    // message: 'This is an error!'
                    // });

                }
                else if (!err && !user) {
                    return res.json({ email: "Enter correct email address" })
                }
                else {
                    console.log(err)
                }
            })
        })

    app.route('/dashboard/').get(function (req, res) {

        return res.sendFile(process.cwd() + '/views/dashboard.html')
    })

    app.route('/getTrades/').get(function (req, res) {

        let returnObj = {}, riskAndRewObj

        User.findById(
            req.query.id,
            (err, user) => {
                if (!err && user) {

                    returnObj = analytics.mostRecentTrades(user.trades)
                    if (user.trades.length === 0) {

                        return res.json(returnObj)
                    }
                    else {
                        //get an object containing the average risk and reward as well as the balance and win to lose ratio 
                        riskAndRewObj = analytics.getMeanRiskRew(user.trades)

                        //find highest possible return by simulating a best case using the risk, reward, win-lose ratio along with the current 
                        //balance and add to the return obj
                        returnObj.bestCase = tradeSimulation.bestCaseSimulation(riskAndRewObj)

                        returnObj = analytics.accountStats(user.trades, returnObj)

                        return res.json(analytics.accountAnalysis(user.trades, returnObj))
                    }
                }
                else if (err) {
                    console.log(err)
                }
                else {
                    console.log("NO USER FOUND")
                }
            }
        )
    })

    //get trade Data for optimizing trading strategy
    app.route('/allTrades/').get(function (req, res) {

        User.findById(
            req.query.id,
            (err, user) => {
                if (!err && user) {
                    return res.json(user.trades)
                }
            }
        )
    })

    //get daily trade Data for bar graph 
    app.route('/getTradeDays/').get(function (req, res) {

        User.findById(
            req.query.id,
            (err, user) => {
                if (!err && user) {
                    return user.trades.length !== 0 ? res.json(analytics.getTradeDays(user.trades)) :
                        res.json({ Mon: 0, Tue: 0, Wed: 0, Thur: 0, Fri: 0 })
                }
            }
        )
    })

    //get trade data for dashboard's projected account performance
    app.route('/stats/').get(function (req, res) {

        User.findById(
            req.query.id,
            (err, user) => {
                if (!err && user) {
                    if (user.trades.length !== 0) {
                        let riskAndRewObj = analytics.getMeanRiskRew(user.trades)

                        return res.json(tradeSimulation.randomSimulation(riskAndRewObj))
                    }
                    else {
                        return res.json([[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0]])
                    }
                }
            }
        )
    })

    //add a trade to the database
    app.route("/addTrade/")
        .get((req, res) => {
            return res.sendFile(process.cwd() + '/views/addTrade.html')
        })
        .post((req, res) => {

            const date = new Date(req.body.date)

            let newTrade = new Trade({
                date: date,
                instrument: req.body.instrument,
                direction: req.body.direction,
                entry: req.body.entry,
                exit: req.body.exit,
                size: req.body.size,
                result: req.body.result,
                commentary: req.body.commentary,
                reasons: req.body.reasons,
                mistakes: req.body.mistakes,
                profit: req.body.profift,
                loss: req.body.loss,
                risk: req.body.risk,
                reward: req.body.reward,
                balance: req.body.balance
            })

            User.findByIdAndUpdate(
                req.query.id,
                { $push: { trades: newTrade } },
                { new: true },
                (error, updatedUser) => {
                    if (!error && updatedUser) {
                        return res.redirect('/addTrade/' + "?id=" + req.query.id)
                        //let respText = '<script>alert("Trade Saved"); window.location.href = "/addTrade/?id="' + req.query.id +'; </script>'
                        //return res.send(respText)
                    }
                    else if (error) {
                        console.log(error)
                    }
                    else {
                        console.log("NO USER FOUND")
                    }
                }
            )
        })
}


    // app.route("/getNews")
    //     .get((req, res) => {
    //         const options = {
    //             method: 'GET',
    //             url: 'https://scrapingant.p.rapidapi.com/get',
    //             params: { url: 'https://www.iana.org/domains/example' },
    //             headers: {
    //                 'X-RapidAPI-Key': 'e574db6694msh2ee0566b68d3d93p1fe5d4jsn9f47df2f482b',
    //                 'X-RapidAPI-Host': 'forex-news-alerts.p.rapidapi.com'
    //             },
    //             required: {
    //                 "requestId": "Req123456",
    //                 "uniqueFXArticleToken": "bf4dfb95-cef1-492c-948e-b5023a9c23eb:AUDUSD-20201015"
    //             }
    //         };

    //         axios.request(options).then(function (response) {
    //             console.log(response.data);
    //             return
    //         }).catch(function (error) {
    //             console.error(error);
    //             return
    //         });
    //     })
