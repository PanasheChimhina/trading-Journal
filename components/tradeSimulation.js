module.exports = class Simulate {

    //simulates a scenario whereby all winning trades propotional to the current win-lose ratio occur before the losing ones.
    bestCaseSimulation(riskAndRewObj) {
        let bestCaseTrades = [],
            tradeNums = []

        //add total number of consecutive wins followed by losses to an array to simulate 10 trades as the best case scenario 
        tradeNums = this.winsAndLossesArr(riskAndRewObj.wLr)

        //simulated trades with their balances
        bestCaseTrades = this.simulate(tradeNums, riskAndRewObj)

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'GBP',

            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });

        //Returns the final balance for best case as GBP Currency
        return formatter.format(bestCaseTrades[10][1])

    }

    //simulates a scenario in which all winning and losing trades propotional to the current win-lose ratio occur randomly.
    randomSimulation(riskAndRewObj) {

        let shuffledTradesArr = [],
            tradeNums = []

        //Generate an array of 10 strings ('win' or 'loss') whose propotion is predicated on the win to lose ratio  
        tradeNums = this.winsAndLossesArr(riskAndRewObj.wLr)

        //Shuffle the array to make them random
        shuffledTradesArr = this.shuffleArray(tradeNums)

        // return the calculated cumulative percentage increase/decrease in balance based on the average risk and reward per trade
        return this.simulate(shuffledTradesArr, riskAndRewObj)
    }

    //distributes equal proportions of wins and losses based on the current win-lose ratio
    winsAndLossesArr(wLr) {
        let tradeNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        tradeNums.forEach((el) => {

            return el <= (wLr / 10) - 1 ? tradeNums[tradeNums[el]] = "WIN" : tradeNums[tradeNums[el]] = "LOSE";
        })

        return tradeNums
    }

    //randomise the wins and losses
    shuffleArray(arr) {

        let currentIndex = arr.length, randomIndex;
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [arr[currentIndex], arr[randomIndex]] = [
                arr[randomIndex], arr[currentIndex]];
        }
        return arr;
    }

    //cumulatively increase/ decrease the balance based on the risk/reward 
    simulate(arr, riskAndRewObj) {
        let trades = [[0, riskAndRewObj.balance]],
            [bal, risk, rew] = [riskAndRewObj.balance, riskAndRewObj.risk, riskAndRewObj.reward],
            newBal

        //calculate the cumulative percentage increase/decrease in balance based on the average risk and reward 
        arr.forEach((el, i) => {
            if (el === "WIN") {

                newBal = parseInt(bal + ((rew / 100) * bal)).toFixed(0)
                trades.push([i + 1, newBal])
                bal = parseInt(newBal)
            }
            else {
                newBal = parseInt(bal - ((risk / 100) * bal)).toFixed(0)
                trades.push([i + 1, newBal])
                bal = parseInt(newBal)
            }
        })
        return trades
    }
}