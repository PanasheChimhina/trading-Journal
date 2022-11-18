
const divStyle = {
    display: "flex",
    flexDirection: "row",
    width: "85%",
    height: "60px",
    margin: "100px auto 0px",
    borderRadius: "35px",
    position: "fixed",
    backgroundColor: "rgb(14, 14, 14)",
    zIndex: 1,
    justifyContent: "space-between", alignItems: "space-between"
};

const centerColumnStyle = {
    margin: " 0 auto auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

}
const centerColumnContactStyle = {
    margin: " 10px auto auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"

}

const backImageOneStyle = {
    marginTop: "120px",
    paddingBottom: "300px",
    width: "100%",
    backgroundImage: "url(/public/hoyoTraderOfficial.png)",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "80% -10%",
    backgroundSize: "cover"
}
///public/hoyoTrader.png
//https://img.freepik.com/free-vector/business-risk-analysis_53876-90454.jpg?t=st=1665578524~exp=1665579124~hmac=7ac834988ed4f3cb63fc4b044baad44312d33e4480a763a96e1598bff2a1ebeb
const Navbar = () => {

    const [width, setWindowWidth] = React.useState(0)

    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }


    React.useEffect(() => {

        updateDimensions()
        window.addEventListener("resize", updateDimensions)

        return () => window.removeEventListener("resize", updateDimensions)
    }, [])

    return (
        <div id="nav-container" style={divStyle}>
            <div style={{ maxWidth: "205px", display: "flex", flexDirection: "row", margin: "auto" }}>
                <img style={{ width: "60px", height: "60px", marginLeft: "25px" }} id="header-img" src="https://static.vecteezy.com/system/resources/previews/011/015/045/original/kangaroo-origami-abstract-colorful-vibrant-kangaroo-logo-design-animal-origami-transparent-background-illustration-png.png" alt=""></img>
                <p style={{ fontWeight: "bold", margin: "20px 5px" }}>HoyoTrʌder.</p>
            </div>
            <div style={{ margin: "13px", width: "60%", minWidth: "20%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <div style={{ marigin: "0px auto", display: width >= 770 ? "contents" : "none" }}>
                    <a href="/logIn" style={{ padding: "5px", margin: "10px ", textDecoration: "none", color: "#e2dddd" }}>Home</a>
                    <a href="/signIn" style={{ padding: "5px", margin: "35px", textDecoration: "none", color: "#e2dddd" }}>Features</a>
                    <a href="/signIn" style={{ padding: "5px", margin: "10px", textDecoration: "none", color: "#e2dddd" }}>Tutorial</a>
                </div>
                <div>
                    <select style={{ borderRadius: "10px", width: "100px", margin: "10px 70px", backgroundColor: "rgb(14, 14, 14)", display: width > 770 ? "none" : "flex" }}>
                        <option >Options</option>
                        <option value="en"><a href="/">Home</a></option>
                        <option value="en"><a href="/">Features</a></option>
                        <option value="en"><a href="/">Tutorial</a></option>
                    </select>
                </div>
            </div>
            <div style={{ width: "20%", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <a target="_blank" href="https://github.com" style={{ margin: "auto 20px" }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" style={{ width: "30px" }} />
                </a>
            </div>

        </div>
    )
}

const Buttons = () => {
    return (
        <div style={{ margin: "50px auto 50px", paddingBottom: "45px" }}>
            <a href="/signIn" style={{ textDecoration: "none", margin: "10px 5px" }}>
                <span style={{ backgroundColor: "#2680eb", padding: "10px 45px", borderRadius: "5px", color: "#2c2c2c" }}>Sign In</span>
            </a>
            <a href="/logIn" style={{ textDecoration: "none", margin: "10px 10px" }}>
                <span style={{ backgroundColor: "orange", padding: "10px 45px", borderRadius: "5px", color: "#2c2c2c" }}>Log In</span>
            </a>
        </div>
    )
}
const Intro = () => {

    return (
        <div style={{ maxWidth: "100%", padding: "0px 20px 5px", backgroundColor: "rgb(14, 14, 14)" }}>
            <div style={{ textAlign: "center", width: "80%", margin: "auto" }}>
                <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>The Trading Journal To Enhance Your Performance.</h1>
                <h3 style={{ margin: "40px auto 50px", width: "50%" }}>The Current Best Trading Journal Software that truly delivers.</h3>
                <Buttons />
            </div>
        </div >
    )
}

const InfoDiv = (props) => {

    const [width, setWindowWidth] = React.useState(0)

    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }


    React.useEffect(() => {

        updateDimensions()
        window.addEventListener("resize", updateDimensions)

        return () => window.removeEventListener("resize", updateDimensions)
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: width < 800 ? "column-reverse" : props.orientation, width: "80%", margin: "90px auto" }}>
            <div id="info" style={{
                width: width >= 800 ? "60%" || "725px" : "100%",
                margin: " auto"
            }}>
                <h1 style={{ margin: "10px 0px 20px", fontWeight: "bold", fontSize: "50px" }}>{props.heading}</h1>
                <p style={{ fontSize: "19px" }}>{props.text}</p>
            </div>
            <div id="infoIcon" style={{
                width: width >= 800 ? "40%" : "70%",
                margin: "auto", backgroundColor: "rgb(14, 14, 14)", display: "flex"
            }}>
                <img style={{ maxWidth: "40%", margin: "auto auto", display: "flex" }} src={props.url} alt="" />
            </div>
        </div>
    )
}
const Contact = () => {
    return (
        <div id="contact-container" style={{ display: "flex", flexDirection: "row", margin: "auto", width: "80%" }}>
            <div style={centerColumnContactStyle}>
                <div ><img style={{ width: "50px" }} src="https://static.vecteezy.com/system/resources/previews/011/015/045/original/kangaroo-origami-abstract-colorful-vibrant-kangaroo-logo-design-animal-origami-transparent-background-illustration-png.png" alt=""></img>
                    HoyoTrʌder.</div>
            </div>
            <div style={centerColumnContactStyle}>
                <p style={{ fontWeight: "bold" }}>Product</p>
                <p>Features</p>
                <p>Pricing</p>
            </div>
            <div style={centerColumnContactStyle}>
                <p style={{ fontWeight: "bold" }}>Resources</p>
                <p>Docs</p>
                <p>API Reference</p>
                <p>Release Notes</p>
            </div>
            <div style={centerColumnContactStyle}>
                <p style={{ fontWeight: "bold" }}>Community</p>
                <p>Get Involved</p>
                <p>GitHub</p>
                <p>Discord</p>
                <p>Twitter</p>
            </div>
            <div style={centerColumnContactStyle}>
                <p style={{ fontWeight: "bold" }}>Company</p>
                <p>About</p>
                <p>Contact</p>
                <p>Privacy</p>
                <p>Terms</p>
            </div>
        </div>
    )
}



const App = function () {

    return (
        <div style={centerColumnStyle}>
            <div style={centerColumnStyle}>
                <Navbar />
            </div>
            <div>
                <div style={backImageOneStyle}>
                    <Intro />
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <InfoDiv heading="Journal Your Trades"
                    orientation="row"
                    text="Journal your trades with ease. All trades entered are saved and securely backed up in the HoyoTrader database. The more you use your trading journal, the more HoyoTrader can help sharpen your trading edge."
                    url="https://www.milestechnologies.com/wp-content/uploads/2020/07/icon-saas-blue.svg" />

                <InfoDiv heading="Analytics"
                    orientation="row-reverse"
                    text="Our trading journal software carries out a thorough analysis of your all your trades and issues back graphical representations of the analysis report. You can use this insightful information to enhance your trading strategy."
                    url="https://www.milestechnologies.com/wp-content/uploads/2020/07/icon-environment-blue.svg" />

                <InfoDiv heading="Enhance Your Performance"
                    orientation="row"
                    text="The HoyoTrader software simulates trades based on your current trading habits and issues back a report that details the expected maximum and minimum yield if all else remains constant. Furthermore, the app provides tips on how to maximise the expected reward and minimise associated losses."
                    url="https://www.milestechnologies.com/wp-content/uploads/2020/07/icon-reporting-blue.svg" />
            </div>
            <div style={backImageOneStyle}>
                <div style={{ textAlign: "center", backgroundColor: "rgb(14, 14, 14)" }}>
                    <h1 style={{ width: "70%", fontSize: "60px", fontWeight: "bold", margin: "auto" }}>Are you ready to optimise your trading strategies?</h1>
                    <Buttons />
                    <div style={{ height: "20%" }}></div>
                </div>
            </div>

            <div style={{ width: "100%", textAlign: "center" }}>
                <h1 style={{ fontSize: "60px", fontWeight: "bold", marginTop: "-100px", paddingTop: "100px" }}>contact</h1>
                <div style={{ width: "100%", border: "1px solid #e2dddd" }}></div>
                <Contact />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", width: "72%" }}>
                <div style={{ display: "flex", flexDirection: "row", margin: "0px 0px 10px" }}>
                    <a target="_blank" href="https://github.com" style={{ margin: "5px 10px" }}>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" style={{ width: "20px" }} />
                    </a>
                    <a target="_blank" href="https://twitter.com" style={{ margin: "5px 10px" }}>
                        <img src="https://cdn-icons-png.flaticon.com/128/2168/2168336.png" style={{ width: "21px" }} />
                    </a>
                </div>
                <p>© 2022 hoyoTrader Software, Inc.</p>
            </div>

        </div >
    )

}


ReactDOM.render(<App />, document.getElementById('root'))
























//https://static.vecteezy.com/system/resources/previews/009/362/751/non_2x/book-icon-sign-symbol-design-free-png.png
// class App extends React.render() {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div>Hello World</div>
//         )
//     }
// }
const shake = {
    border: "1px dashed red",
    animation: 'shake 0.82s cubic-bezier(.36, .07, .19, .97) both',
    transform: 'translate3d(0, 0, 0)',
    backfaceVisibility: 'hidden',
    perspective: '1000px'
}

const Form = () => {
    const [response, setResponse] = React.useState({});
    const [formData, setFormData] = React.useState({})

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
            redirect: 'follow'
        };
        fetch("/signIn", requestOptions)
            .then(response => {
                if (response.redirected) {
                    window.location.href = response.url;
                }
                else {
                    return response.json();
                    //throw new Error('Enter correct log in details');
                }
            })
            .then(function (data) {
                // `data` is the parsed version of the JSON returned from the above endpoint.
                setResponse(data);
            });
    }


    return (
        <div>
            <form onSubmit={handleSubmit}  >
                <div class="header">
                    <p><strong>SIGN UP</strong></p>
                </div>
                <div>
                    <input
                        style={response.email ? shake : { border: "none" }}
                        type="email" class="button" id="email"
                        name="email" placeholder="email"
                        required onChange={(e) => setFormData({ email: e.target.value, password: formData.password })}

                    /><br />
                    <h6 style={{ color: "red" }}>{response.email}</h6>
                    <input
                        style={response.password ? shake : { border: "none" }}
                        type="password" class="button" id="password" name="password"
                        placeholder="Set HT Password" required
                        onChange={(e) => setFormData({ password: e.target.value, email: formData.email })} /><br />
                    <h6 style={{ color: "red" }}>{response.password}</h6>
                    <input type="submit" class="button" id="submit" value="Sign up" /><br />
                </div>
                <div class="optional">
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember"><span></span>Remember me</label>
                </div>
                <div class="footer">
                    <p>Already have an account? <span><a href="/logIn">Log In</a></span></p>
                </div>
            </form>
        </div>
    )

}
const Logo = () => {
    return (
        <div className="logo" >
            <div style={{ display: "flex", flexDirection: "row" }}>
                <img style={{ width: "50px" }} id="header-img" src="https://static.vecteezy.com/system/resources/previews/011/015/045/original/kangaroo-origami-abstract-colorful-vibrant-kangaroo-logo-design-animal-origami-transparent-background-illustration-png.png" alt=""></img>
                <p style={{ margin: "auto 15px", color: "#00A8F6" }}><strong>HoyoTrader</strong></p>
            </div>
            < Help />
        </div>
    )
}

const Help = () => {
    return (
        <div className="help" >
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                <path d="M12 18.274v-.024"></path>
                <path d="M12 14.5c2-1 4-2.29 4-4.5a4 4 0 0 0-8 0"></path>
            </svg>
            <p style={{ margin: "auto 15px", fontSize: "14px" }}>Help and Support</p>
        </div>
    )
}
const Language = () => {
    return (
        <select style={{ width: "100px", alignSelf: "flex-start", margin: "10px 70px" }}><option value="en">English</option>
            {/* <option value="ar">العربية</option><option value="bn-IN">বাঙ্গালি (ভারত)</option> */}
            {/* <option value="ceb-PH">Cebuano (Pilipinas)</option><option value="cs-CZ">Čeština (Česká republika)</option><option value="de-DE">Deutsch</option><option value="el-GR">Ελληνικά (Ελλάδα)</option>
            <option value="es">Español</option><option value="fi-FI">Suomi (Suomi)</option><option value="fil-PH">Filipino (Pilipinas)</option><option value="fr">Français</option><option value="he-IL">עברית (ישראל)</option> */}
        </select>
    )
}

const App = () => {

    return (
        <div className="logInContainer" >
            < Logo />
            < Form />
            <Language />
            <p style={{ fontSize: "13px", alignSelf: "flex-end", margin: "0px 70px", position: "relative", bottom: "3%" }}>©HoyoTrader 2022</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

const shake = {
    border: "1px dashed red",
    animation: 'shake 0.82s cubic-bezier(.36, .07, .19, .97) both',
    transform: 'translate3d(0, 0, 0)',
    backfaceVisibility: 'hidden',
    perspective: '1000px',
    // emptyState: () => {
    //     response.password = ''
    //     response.email = ''
    // }
}


const Form = () => {
    const [response, setResponse] = React.useState({});

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    console.log(email)

    const handleSubmit = (e) => {
        e.preventDefault();

        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password }),
            redirect: 'follow', // manual, *follow, error
        };
        fetch("/logIn", requestOptions)
            .then(response => {
                if (response.redirected) {
                    window.location.href = response.url;
                }
                else {

                    return response.json();
                    //throw new Error('Enter correct log in details');
                }
            })
            .then(function (data) {
                // `data` is the parsed version of the JSON returned from the above endpoint.
                setResponse(data);
            });
        // .catch(function (error) {
        //     setResponse("Enter correct log in details")
        //     //alert("Enter correct log in details")
        // });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div class="header">
                    <p><strong>LOG IN</strong></p>
                </div>
                <div>
                    <input
                        style={response.email ? shake : { border: "none" }}
                        type="email" class="button" id="email"
                        name="email" placeholder="email"
                        required onChange={(e) => setEmail(e.target.value)}
                    /><br />
                    <h6 style={{ color: "red" }}>{response.email}</h6>
                    <input
                        style={response.password ? shake : { border: "none" }}
                        type="password" class="button" id="password"
                        name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}
                    /><br />
                    <h6 style={{ color: "red" }}>{response.password}</h6>
                    <input type="submit" class="button" id="submit" value="Log In" /><br />
                </div>
                <div class="optional">
                    <a href="/forgotPassword">Forgot password?</a><br />
                    <input type="checkbox" id="remember" name="remember" />
                </div>
                <div class="footer">
                    <p>New here? <span><a href="/signIn">Sign up</a></span></p>
                </div>
            </form>
        </div>
    )
}
const Logo = () => {
    return (
        <div className="logo" >
            <div style={{ display: "flex", flexDirection: "row" }}>
                <img style={{ width: "50px" }} id="header-img" src="https://static.vecteezy.com/system/resources/previews/011/015/045/original/kangaroo-origami-abstract-colorful-vibrant-kangaroo-logo-design-animal-origami-transparent-background-illustration-png.png" alt=""></img>
                <p style={{ margin: "auto 15px", color: "#00A8F6" }}><strong>HoyoTrader</strong></p>
            </div>
            < Help />
        </div>
    )
}

const Help = () => {
    return (
        <div className="help" >
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                <path d="M12 18.274v-.024"></path>
                <path d="M12 14.5c2-1 4-2.29 4-4.5a4 4 0 0 0-8 0"></path>
            </svg>
            <p style={{ margin: "auto 15px", fontSize: "14px", opacity: "0.6" }}>Help and Support</p>
        </div >
    )
}
const Language = () => {
    return (
        <select style={{ width: "100px", alignSelf: "flex-start", margin: "10px 70px", opacity: "0.6" }}><option value="en">English</option>
            {/* <option value="ar">العربية</option><option value="bn-IN">বাঙ্গালি (ভারত)</option> */}
            {/* <option value="ceb-PH">Cebuano (Pilipinas)</option><option value="cs-CZ">Čeština (Česká republika)</option><option value="de-DE">Deutsch</option><option value="el-GR">Ελληνικά (Ελλάδα)</option>
            <option value="es">Español</option><option value="fi-FI">Suomi (Suomi)</option><option value="fil-PH">Filipino (Pilipinas)</option><option value="fr">Français</option><option value="he-IL">עברית (ישראל)</option> */}
        </select>
    )
}


const App = () => {

    return (
        <div className="logInContainer" >
            < Logo />
            < Form />
            <Language />
            <p style={{ fontSize: "13px", alignSelf: "flex-end", margin: "0px 70px", position: "relative", bottom: "3%", opacity: "0.6" }}>©HoyoTrader 2022</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

































const SignIn = () => {

    let arr = []
    for (let i = 0; i < 20; i++) {
        arr.push(i)
    }

    return (
        <div className="night">

            {arr.map((item, index) => (
                <div className='shooting_star'></div>
            ))}
        </div>
    )
}
//'use strict';

const headerStyles = {
    width: "1550px",
    maxWidth: "100%",
    height: "40px",
    backgroundColor: "rgba(0, 0, 0, 0.6",
    display: "flex",
    justifyContent: "space-between"
}
const leftMarginStyle = {
    width: "40px",
    maxWidth: "6.5%",
    backgroundColor: "rgba(0, 0, 0, 0.5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "space-between",
    gap: "10px",

}

const containerStyle = {
    display: "flex",
    width: "1550px",
    maxWidth: "100%",
    flexDirection: "column",
    background: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
}

const allTradesInnerstyle = {
    width: "100%",
    height: "256px",
    display: "flex",
    flexDirection: "row",
    margin: "0px 0px 5px"
}

const zoneOneStyle = {
    maxWidth: "32%",
    width: "292px",
    height: "116px",
    backgroundColor: " rgba(0, 0, 0, 0.45)",
    borderRadius: "5px",
    marginRight: "5px",
    display: "flex",
    flexDirection: "row"
}

const zoneTwoHeader = {
    width: "20%",
    textAlign: "center",
    padding: "8px 0px",
}
const zoneTwoSecAndFourth = {
    width: "15%",
    textAlign: "center",
    padding: "8px 0px",
}
const zoneThird = {
    width: "25%",
    textAlign: "center",
    padding: "8px 0px",
}

const zoneThreeElementStyle = {
    width: "50%",
    height: "270px",
    backgroundColor: " rgba(0, 0, 0, 0.45",
    borderRadius: "5px",
    marginRight: "5px",
    textAlign: "center",
    padding: "10px",
    display: "flex",
    flexDirection: "column"
}

const zoneTwoP = {
    margin: "7px auto",
    textAlign: "center"
}

const MoreInfo = (props) => {

    let data = [{ day: "Mon" }, { day: "Tue" }, { day: "Wed" }, { day: "Thur" }, { day: "Fri" }]
    let scale = d3.scalePoint()
        .domain(data.map(function (d) { return d.day }))
        .range([0, 180 * 0.95])

    let axis = d3.axisBottom(scale).ticks(5);

    d3.select('#bchart')
        .call(axis);

    const [dailyTradeFreq, setDailyTradeFreq] = React.useState([]);
    const [dataset, setDataset] = React.useState([]);

    React.useEffect(() => {
        async function getFreq() {
            const response = await fetch("/getTradeDays/" + "?id=" + userId());
            const data = await response.json();

            const res = await fetch("/stats/" + "?id=" + userId());
            const datum = await res.json()

            setDataset(datum)
            setDailyTradeFreq(data);
        }
        getFreq();

    }, [])

    // Step 3
    var svg = d3.select("#linegraph"),
        margin = 160,
        width = 650 - margin, //300
        height = 360 - margin,
        yMin = d3.min(dataset, (d) => parseInt(d[1])),
        yMax = d3.max(dataset, (d) => parseInt(d[1]))

    // Step 4 
    var xScale = d3.scaleLinear().domain([0, d3.max(dataset, (d) => d[0])]).range([0, width])
    let yScale = d3.scaleLinear().domain([yMin, yMax]).range([height, 0]);

    var g = svg.attr("viewBox", `0 0 610 350`)
        .append("g")
        .attr("transform", "translate(" + 70 + "," + 30 + ")");

    // X label
    svg.append('text')
        .attr('x', width / 2 + 55)
        .attr('y', height - 15 + 80)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Hypothetical Trades');

    // Y label
    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(15,' + 130 + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Balance');

    // Step 6
    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

    g.append("g")
        .call(d3.axisLeft(yScale));

    // Step 7
    svg.append('g')
        .selectAll("dot")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xScale(d[0]); })
        .attr("cy", function (d) { return yScale(d[1]); })
        .attr("r", 3)
        .attr("transform", "translate(" + 70 + "," + 30 + ")")
        .style("fill", "#00A8F6");

    // Step 8        
    var line = d3.line()
        .x(function (d) { return xScale(d[0]); })
        .y(function (d) { return yScale(d[1]); })
        .curve(d3.curveLinear)

    svg.append("path")
        .datum(dataset)
        .attr("class", "line")
        .attr("transform", "translate(" + 70 + "," + 30 + ")")
        .attr("d", line)
        .style("fill", "none")
        .style("stroke", "#00A8F6")
        .style("stroke-width", "0.7");

    return (
        <div style={{ maxWidth: "100%", minWidth: "43%", display: "flex", flexDirection: "column", margin: "6px 2px 0px 5px", height: "655px", }}>
            <div style={{ width: "99%", height: "40%", minHeight: "344px", backgroundColor: " rgba(0, 0, 0, 0.45)", margin: "2px 0px 5px 0px", borderRadius: "5px", padding: "10px", overflow: "hidden" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <h3>Projected Account Performance </h3>
                </div>
                <svg id="linegraph" xmlns="http://www.w3.org/2000/svg"  >
                </svg>
            </div>


            <div style={{ width: "100%", height: "48%", borderRadius: "5px" }}>
                <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                    <div style={{ width: "60%", height: "150px", borderRadius: "5px", backgroundColor: " rgba(0, 0, 0, 0.45", margin: "0px 5px 0px 0px" }}>

                        <h6 style={{ margin: "10px 10px 17px", textAlign: "center" }}>Strategy Optimisation Data</h6>
                        <div style={{ width: "100%", height: "65%", padding: "0px 10px" }}>
                            <ZoneThreeDivs heading="Trades " unit="with no errors" probabilityPercentage={props.tradeInfo.nomistakes} color="#A000BA" />
                            <ZoneThreeDivs heading="Winning trades " unit="without erros" probabilityPercentage={props.tradeInfo.noMistakesWinsPercentage} color="#A000BA" />
                        </div>
                    </div>


                    <div style={{ display: "flex", flexDirection: "column", width: "40%", height: "150px", borderRadius: "5px", backgroundColor: " rgba(0, 0, 0, 0.45", margin: "0px 5px 0px 0px", padding: "1%", alignItems: "center", }}>
                        <h6>Daily Trade Frequency</h6>
                        <svg id="chart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 98" style={{ border: "1px solid #253b53" }} >
                            <rect width="35" height={dailyTradeFreq.Mon} x="10" y={95 - dailyTradeFreq.Mon} fill="#0074BD" /><text x="10" y={93 - dailyTradeFreq.Mon}>{dailyTradeFreq.Mon + "%"}</text>
                            <rect width="35" height={dailyTradeFreq.Tue} x="50" y={95 - dailyTradeFreq.Tue} fill="#00A8F6" /><text x="50" y={93 - dailyTradeFreq.Tue}>{dailyTradeFreq.Tue + "%"}</text>
                            <rect width="35" height={dailyTradeFreq.Wed} x="90" y={95 - dailyTradeFreq.Wed} fill="#0074BD" /><text x="90" y={93 - dailyTradeFreq.Wed}>{dailyTradeFreq.Wed + "%"}</text>
                            <rect width="35" height={dailyTradeFreq.Thur} x="130" y={95 - dailyTradeFreq.Thur} fill="#27EBB5" /><text x="130" y={93 - dailyTradeFreq.Thur}>{dailyTradeFreq.Thur + "%"}</text>
                            <rect width="35" height={(dailyTradeFreq.Fri)} x="170" y={95 - dailyTradeFreq.Fri} fill="cyan" /><text x="170" y={93 - dailyTradeFreq.Fri}>{dailyTradeFreq.Fri + "%"}</text>
                        </svg>
                        <div style={{ display: "flex", flexDirection: "row", maxWidth: "190px", gap: "1px" }}>
                            <Legends name="Mon" color="#0074BD" size="10px" />
                            <Legends name="Tue" color=" #0074BD" size="10px" />
                            <Legends name="Wed" color="#00A8F6" size="10px" />
                            <Legends name="Thur" color="#27EBB5" size="10px" />
                            <Legends name="Fri" color="cyan" size="10px" />
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                    <div style={{ width: "40%", height: "142px", borderRadius: "5px", backgroundColor: " rgba(0, 0, 0, 0.45", margin: "5px 5px 0px 0px", display: "flex", flexDirection: "row", padding: "5px" }}>
                        <div style={{ width: "60%", display: "flex" }}>
                            <div style={{ margin: "auto 10px" }}>
                                <h6>Win-Lose Ratio</h6>
                                <h2 style={{ fontWeight: "bold", textAlign: "center" }}>{props.tradeInfo.ratio || '-'}</h2>
                            </div>
                        </div>
                        <div style={{ width: "40%", marginLeft: "0px", display: "flex" }}>
                            <svg style={{ margin: "auto auto" }} width="70" height="70" fill="none" stroke="#00A8F6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.093 6a2.156 2.156 0 0 0-2.067 2.766L15.68 12.11a2.152 2.152 0 0 0-1.36 0l-2.48-2.48a2.155 2.155 0 0 0-3.036-2.472 2.156 2.156 0 0 0-1.14 2.471l-4.149 4.146a2.16 2.16 0 1 0 1.459 1.458l4.095-4.095a2.15 2.15 0 0 0 1.36 0l2.48 2.481a2.156 2.156 0 1 0 4.178 0l3.397-3.396A2.156 2.156 0 1 0 21.094 6Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div style={{ width: "60%", height: "142px", borderRadius: "5px", backgroundColor: " rgba(0, 0, 0, 0.45", margin: "5px 5px 0px 0px" }}>

                        <h6 style={{ margin: "5px 0px 0px 0px", textAlign: "center" }}>Most Traded Assets </h6>
                        <div style={{ width: "100%", height: "65%", marginTop: "10px", padding: "0px 10px" }}>
                            <ZoneTwoRows first={props.tradeInfo.mostTraded || '-'} fifth={props.tradeInfo.mostTradedPercentage || '-'} />
                            <ZoneTwoRows first={props.tradeInfo.secMostTraded || '-'} fifth={props.tradeInfo.secMostTradedPercentage || '-'} />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
const ZoneOne = (props) => {


    return (
        <div style={{
            width: "100%", minHeight: "107px", display: "flex", flexDirection: "row", margin: "0px 0px 5px"
        }}>
            <div style={zoneOneStyle}>
                <div style={{ width: "45px", minWidth: "0px", margin: "10px 1% 10px 10px", display: "flex" }}>
                    <svg style={{ margin: "auto auto" }} width="55" height="55" fill="none" stroke="#00A8F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 15.75h19.5a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.75H2.25a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75Z"></path>
                        <path d="M3 18h18"></path>
                        <path d="M4.5 20.25h15"></path>
                        <path d="M12 13.5A3.75 3.75 0 1 0 12 6a3.75 3.75 0 0 0 0 7.5Z"></path>
                        <path d="M22.5 7.5a3.75 3.75 0 0 1-3.75-3.75"></path>
                        <path d="M1.5 7.5a3.75 3.75 0 0 0 3.75-3.75"></path>
                        <path d="M22.5 12a3.75 3.75 0 0 0-3.75 3.75"></path>
                        <path d="M1.5 12a3.75 3.75 0 0 1 3.75 3.75"></path>
                    </svg>
                </div>
                <div style={{ width: "170px", minWidth: "121px", display: "flex", flexDirection: "column", margin: "10px 10px 10px 5px", padding: "10px 0px" }}>
                    <h6>Account Balance</h6>
                    <h4 style={{ fontWeight: "bold", textIndent: "10px " }}>{formartToGBP(props.balance) || '-'}</h4>
                </div>

            </div>
            <div style={zoneOneStyle}>
                <div style={{ width: "170px", minWidth: "155px", display: "flex", flexDirection: "column", margin: "10px 0px 10px 1%", padding: "10px 0px", textAlign: "center" }}>
                    <h6> Win Rate</h6>
                    <h4 style={{ fontWeight: "bold", textAlign: "center" }}>{props.winRate || "-"}</h4>
                </div>
                <div style={{ width: "45px", minWidth: "0px", margin: "10px 10px 10px 0px", display: "flex" }}>
                    <svg style={{ margin: "auto auto", maxWidth: "100%" }} width="55" height="55" fill="none" stroke="#00A8F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 21.75h7.5"></path>
                        <path d="M12 21.75v-6"></path>
                        <path d="M18 10.5c0-2.374-.004-6.31-.006-7.5a.75.75 0 0 0-.75-.75l-10.49.012a.75.75 0 0 0-.75.748c0 1.433-.006 6.055-.006 7.49 0 3.013 3.89 5.25 6 5.25S18 13.513 18 10.5Z"></path>
                        <path d="M6 4.5H2.25v.75c0 2.588 1.573 5.25 3.75 5.25"></path>
                        <path d="M18 4.5h3.75v.75c0 2.588-1.573 5.25-3.75 5.25"></path>
                    </svg>
                </div>
            </div>
            <div style={{ width: "292px", maxWidth: "35.5%", height: "116px", backgroundColor: " rgba(0, 0, 0, 0.45)", borderRadius: "5px", display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "170px", minWidth: "145px", display: "flex", flexDirection: "column", margin: "10px 0px 10px 10px", padding: "10px 0px" }}>
                    <h6>Max Projected yield </h6>
                    <h4 style={{ fontWeight: "bold", textAlign: "center" }}>{props.bestCase || "-"}</h4>
                </div>
                <div style={{ width: "45px", minWidth: "0px", margin: "10px 20px 10px 0px", display: "flex" }}>
                    <svg style={{ margin: "auto auto", maxWidth: "100%" }} width="55" height="55" fill="none" stroke="#00A8F6" stroke-linecap="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 11H2l4-4h7l2-2c1.125-1.125 2.409-2 4-2h2v2c0 1.5-1 3-2 4l-2 2v7l-4 4v-5.5"></path>
                        <path d="M11.95 12 7 16.95"></path>
                    </svg>
                </div>
            </div>
        </div >
    )
}

const ZoneTwo = (props) => {

    return (

        <div style={allTradesInnerstyle}>
            <div style={{ backgroundColor: " rgba(0, 0, 0, 0.4", borderRadius: "5px", width: "100%", height: "256px" }}>
                <div style={{ display: "flex", flexDirection: "row", borderRadius: "5px" }}>
                    <div style={zoneTwoHeader}><p style={zoneTwoP}>Asset</p></div>
                    <div style={zoneTwoSecAndFourth}><p style={zoneTwoP}>Direction</p></div>
                    <div style={zoneThird}><p style={zoneTwoP}>Date</p></div>
                    <div style={zoneTwoSecAndFourth}><p style={zoneTwoP}>Result</p></div>
                    <div style={zoneThird}><p style={zoneTwoP}>Reason(s)</p></div>
                </div>
                <ZoneTwoRows first={props.tradeData.tOneAsset} second={props.tradeData.tOneDirection} third={props.tradeData.tOneDate} fourth={props.tradeData.tOneResult} fifth={props.tradeData.tOneReasons} />
                <ZoneTwoRows first={props.tradeData.tTwoAsset} second={props.tradeData.tTwoDirection} third={props.tradeData.tTwoDate} fourth={props.tradeData.tTwoResult} fifth={props.tradeData.tTwoReasons} />
                <ZoneTwoRows first={props.tradeData.tThreeAsset} second={props.tradeData.tThreeDirection} third={props.tradeData.tThreeDate} fourth={props.tradeData.tThreeResult} fifth={props.tradeData.tThreeReasons} />
                <a href={"/allTrades/" + "?id=" + userId()} style={{ color: "#dddfe2", textDecoration: "none" }}><ZoneTwoRows third="View All Trades" /></a>
            </div>
        </div>
    )

}

const ZoneTwoRows = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", backgroundColor: "#0b0d12", margin: "5px 5px 0px", borderRadius: "5px", height: "43px", border: "1px solid #253b53" }}>
            <div style={zoneTwoHeader}><p style={{ margin: "auto auto" }}>{props.first}</p></div>
            <div style={zoneTwoSecAndFourth}><div style={{ margin: "auto auto", border: props.second == "BUY" ? "1px solid green" : props.second == "SELL" ? "1px solid red" : "none", width: "60%", borderRadius: "5px" }}>{props.second}</div></div>
            <div style={zoneThird}><p style={{ margin: "auto auto", minWidth: "107px" }}>{props.third}</p></div>
            <div style={zoneTwoSecAndFourth}><p style={{ margin: "auto auto" }}>{props.fourth}</p></div>
            <div style={zoneThird}><p style={{ margin: "auto auto" }}>{props.fifth}</p></div>
        </div>
    )
}
const ZoneThree = (props) => {

    return (
        <div style={{ width: "100%", height: "275px", display: "flex", flexDirection: "row" }}>
            <div style={zoneThreeElementStyle}>
                <h6 style={{ margin: "10px" }}>Weighted Probability Statistics</h6>
                <div style={{ width: "100%", height: "80%" }}>
                    <ZoneThreeDivs heading="Best Asset: " unit={props.tradeStats.bestCurr} probabilityPercentage={props.tradeStats.bestCurrPercentage} />
                    <ZoneThreeDivs heading="2nd Best Asset: " unit={props.tradeStats.secBestCurr} probabilityPercentage={props.tradeStats.secBestCurrPercentage} />
                    <ZoneThreeDivs heading="Best Trading Day: " unit={props.tradeStats.bestTradingDay} probabilityPercentage={props.tradeStats.bestTradingDayPercentage} />
                    <ZoneThreeDivs heading="Best Setup:" unit="-" />
                </div>
            </div>


            <div style={{ width: "50%", height: "270px", backgroundColor: " rgba(0, 0, 0, 0.45", borderRadius: "5px", textAlign: "center", padding: "10px", display: "flex", flexDirection: "column" }} >

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "10px", gap: "10px" }}>
                    <Legends name="Buy" color="green" />
                    <Legends name="Sell" color="rgb(203, 0, 0)" />
                </div>
                <div style={{ width: "190px", height: "190px", borderRadius: "50%", margin: "auto auto", background: "conic-gradient(rgb(203, 0, 0) 0% " + props.tradeStats.sells + ", green " + props.tradeStats.sells + " 100%)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ width: "170px", height: "170px", borderRadius: "50%", background: "#0b0d12", display: "flex" }}>
                        <div style={{ margin: "auto" }}>
                            <p style={{ marginBottom: "0px" }}>Total Trades</p>
                            <h3 style={{ fontWeight: "bolder" }}>{props.tradeStats.totalTrades || 0}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
const Legends = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            <div style={{ borderRadius: "2px", width: "10px", height: "10px", backgroundColor: props.color, margin: "auto" }}></div><p style={{ margin: "auto", fontSize: props.size || "auto" }}>{props.name}</p>
        </div>
    )
}
const ZoneThreeDivs = (props) => {
    return (
        <div style={{ marginBottom: "15px" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "10px" }}>
                <p style={{ marginBottom: "0" }}> {props.heading}{props.unit || '-'}</p>
                <p style={{ marginBottom: "0" }}>{props.probabilityPercentage || '-'}</p>
            </div>
            <div style={{ width: "100%", height: "7px", backgroundColor: "black", borderRadius: "10px", border: "1px solid #253b53" }}>
                <div style={{ width: props.probabilityPercentage || '0', height: "7px", backgroundColor: props.color || "#0054B4", borderRadius: props.probabilityPercentage === "100%" ? "10px" : "10px 0px 0px 10px" }}></div>
            </div>
        </div>
    )
}
const AllTrades = (props) => {
    console.log(props)
    return (
        <div style={{ height: "650px", display: "flex", flexDirection: "column", minWidth: "55%", maxWidth: "100%", margin: "5px 0px 5px 5px" }}>
            <ZoneOne winRate={props.tradeOne.winRate} bestCase={props.tradeOne.bestCase} balance={props.tradeOne.balance} />
            <ZoneTwo tradeData={props.tradeOne} />
            <ZoneThree tradeStats={props.tradeOne} />
        </div>
    )
}

const userId = () => {
    const queryParams = new URLSearchParams(window.location.search)
    const id = queryParams.get("id")

    return id
}

const LeftMargin = () => {

    return (
        <div style={leftMarginStyle}>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <a href="" style={{ margin: " 12px auto 5px" }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3h7v7H3z"></path>
                        <path d="M14 3h7v7h-7z"></path>
                        <path d="M14 14h7v7h-7z"></path>
                        <path d="M3 14h7v7H3z"></path>
                    </svg>
                </a>
                <a href={"/addTrade/" + "?id=" + userId()} style={{ margin: " 5px auto" }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                        <path d="M12 8v8"></path>
                        <path d="M8 12h8"></path>
                    </svg>
                </a>

                <a href="" style={{ margin: " 5px auto" }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </a>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <a href="/" style={{ margin: " 5px auto" }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6z"></path>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                </a>
                <a href="/logIn" style={{ margin: " 5px auto" }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                        <path d="M12 2v10"></path>
                    </svg>
                </a>
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div style={headerStyles}>
            <div style={{ display: "flex", flexDirection: "row", width: "200px" }}>

                <a href="/" style={{ margin: "auto 15px", color: "#dddfe2" }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 7.5h16.5"></path>
                        <path d="M3.75 12h16.5"></path>
                        <path d="M3.75 16.5h16.5"></path>
                    </svg>
                </a>
                <img style={{ width: "20x" }} id="header-img" src="https://static.vecteezy.com/system/resources/previews/011/015/045/original/kangaroo-origami-abstract-colorful-vibrant-kangaroo-logo-design-animal-origami-transparent-background-illustration-png.png" alt=""></img>
                <p style={{ margin: "auto 15px", color: "#00A8F6" }}><strong>Dashboard</strong></p>
            </div>
            <div style={{ width: "60px", margin: "auto 5px", display: "flex" }}>
                <span style={{ display: "flex", margin: "auto", color: " #00A8F6", fontSize: "13px", paddingRight: "7px" }}><i class="fas fa-chevron-down"></i></span>
                <div style={{ padding: "3px", display: "flex", alignSelf: "center", border: "1px solid #00A8F6", borderRadius: "50%" }}>
                    <svg width="20" height="20" fill="none" stroke="#00A8F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.125 6.75c-.184 2.478-2.063 4.5-4.125 4.5-2.063 0-3.945-2.021-4.125-4.5-.188-2.578 1.64-4.5 4.125-4.5 2.484 0 4.312 1.969 4.125 4.5Z"></path>
                        <path d="M12 14.25c-4.078 0-8.217 2.25-8.983 6.497-.092.512.197 1.003.733 1.003h16.5c.536 0 .826-.491.734-1.003C20.217 16.5 16.078 14.25 12 14.25Z"></path>
                    </svg>
                </div>
            </div>

        </div>
    )
}
const formartToGBP = (num) => {
    if (num) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'GBP',
        });
        return formatter.format(num)
    }
}

const App = () => {

    const [width, setWindowWidth] = React.useState(0)
    const [trades, setTrades] = React.useState([]);



    // React.useEffect(() => {
    //     updateDimensions()

    //     window.addEventListener("resize", updateDimensions)

    //     return () => window.removeEventListener("resize", updateDimensions)
    // }, [])
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }


    React.useEffect(() => {

        updateDimensions()
        window.addEventListener("resize", updateDimensions)

        async function getTrades() {
            const response = await fetch("/getTrades/" + "?id=" + userId());
            const returnedObj = await response.json();

            setTrades(returnedObj);

        }
        getTrades();

        return () => window.removeEventListener("resize", updateDimensions)
    }, [])

    // console.log(trades)
    console.log(width)
    return (
        <div style={containerStyle}>
            <Header />
            <div style={{ display: "flex", flexDirection: "row", width: "1550px", maxWidth: "100%" }}>
                <LeftMargin />
                <div className="dashboard" style={{
                    display: "flex", minWidth: "92%", width: "97.4%",
                    flexDirection: width < 899 ? 'column' : 'row', overflow: "hidden"
                }}>
                    <AllTrades tradeOne={trades} />
                    <MoreInfo tradeInfo={trades} />
                </div>
            </div>

        </div >
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
const inputStyle = {
    backgroundColor: "#000000",
    margin: "5px 0 0 0",
    color: "#ffffff",
    display: " block",
    width: "330px",
    minHeight: "2em",
    border: "0",
    borderRadius: "5px"
}

const centerRow = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flexStart",
    alignItems: "flexStart"
}

const centerColumn = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flexStart",
    alignItems: "flexStart",
    width: "100%"
}
const headerStyles = {
    width: "100%",
    height: "40px",
    backgroundColor: "#090a0f",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flexStart",
    alignItems: "flexStart"
}

const leftMarginStyle = {
    width: "40px",
    backgroundColor: "#0b0d12",
    height: "94vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "10px"
}

const buttonStyle = {
    width: "200px",
    margin: "10px auto",
    borderRadius: "5px",
    backgroundColor: "#00A8F6",
    outline: "none"
}


const LeftMargin = () => {

    const queryParams = new URLSearchParams(window.location.search)
    const id = queryParams.get("id")

    return (
        <div style={leftMarginStyle}>
            <a href={"/dashboard/" + "?id=" + id} style={{ margin: " 12px auto 5px" }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3h7v7H3z"></path>
                    <path d="M14 3h7v7h-7z"></path>
                    <path d="M14 14h7v7h-7z"></path>
                    <path d="M3 14h7v7H3z"></path>
                </svg>
            </a>
            <a href="" style={{ margin: " 5px auto" }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                </svg>
            </a>

            <a href="" style={{ margin: " 5px auto" }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
            </a>

            <a href="/">
                <svg style={{ position: "fixed", bottom: "8%", left: "8px" }} width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6z"></path>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
            </a>
            <a href="/">
                <svg style={{ position: "fixed", bottom: "2%", left: "8px" }} width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                    <path d="M12 2v10"></path>
                </svg>
            </a>
        </div>
    )
}

const Header = () => {
    return (
        <div style={headerStyles}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <a href="/dashboard" style={{ margin: "auto 15px", color: "#dddfe2" }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.375 5.25 8.625 12l6.75 6.75"></path>
                    </svg>
                </a>
                <a href="" style={{ margin: "auto 1px", color: "#dddfe2" }}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m8.625 5.25 6.75 6.75-6.75 6.75"></path>
                    </svg>
                </a>
                <p style={{ margin: "auto 15px", color: "#00A8F6" }}><strong>New Trade</strong></p>
            </div>
        </div>
    )
}

const AddTrade = () => {

    const queryParams = new URLSearchParams(window.location.search)
    const id = queryParams.get("id")

    console.log(id)

    return (
        <div style={{ width: "98%", background: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)" }}>
            <div style={{ width: "800px", margin: "5px auto 5px", backgroundColor: "#0b0d12", borderRadius: "5px", opacity: "0.9" }}>
                <div style={{ display: "flex", flexDirection: "row", gap: "80%", backgroundColor: "#1b2735", padding: " 10px", borderRadius: "5px 5px 0px 0px" }}>
                    <p style={{ margin: "auto 4px" }}><strong>Enter Trade Data</strong></p>
                    <span><i class="fas fa-chevron-right"></i></span>
                </div>
                <form method="post" action={"/addTrade/" + "?id=" + id} style={{ display: "flex", flexDirection: "column", width: "100%" }} >

                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ display: "inline-block", width: "100%" }}>
                            <label>Date:<input required name="date" type="date" style={inputStyle} /></label>
                            <label>Asset:<input name="instrument" required placeholder="Example: GBP/USD" type="text" style={inputStyle} /></label>
                            <label>Direction:<input name="direction" required placeholder="Example: BUY OR SELL" type="text" style={inputStyle} /></label>
                            <label>Entry Price:<input name="entry" placeholder="Price of asset upon entry" type="text" style={inputStyle} /></label>
                            <label>Exit Price:<input name="exit" placeholder="Price of asset upon exit" type="text" style={inputStyle} /></label>
                            <label>Position Size:<input name="size" placeholder="" type="text" style={inputStyle} /></label>
                            <label>Result:<input type="text" required name="result" placeholder="WIN/LOSS" style={inputStyle} /></label>
                            <label>Market Commentary:<input type="text" placeholder="FX/CRYPTO/INDEXES/STOCK..." name="commentary" style={inputStyle} /></label>
                            <label>Reasons For Making The Trade:<input placeholder="Example: Break out" type="text" name="reasons" style={inputStyle} /></label>
                        </div >
                        <div style={{ display: "inline-block", width: "100%" }}>
                            <label>Balance:<input type="text" placeholder="Current account balance" name="balance" style={inputStyle} /></label>
                            <label>Risk:<input type="text" required placeholder="As a percentage of your balance eg: 10" name="risk" style={inputStyle} /></label>
                            <label>Reward:<input type="text" required placeholder="As a percentage of your balance eg: 20" name="reward" style={inputStyle} /></label>
                            <label>Profit:<input type="text" placeholder="" name="profit" style={inputStyle} /></label>
                            <label>Loss:<input type="text" placeholder="" name="loss" style={inputStyle} /></label>
                            <label>Mistakes:<input name="mistakes" required placeholder="Example: Delayed exit/ none" type="text" style={inputStyle} /></label>
                            <label>Setup:<input name="setup" placeholder="" type="text" style={inputStyle} /></label>
                        </div >
                    </div>
                    <button type="submit" id="check-btn" style={buttonStyle} >Add Trade</button>
                </form>
            </div>
        </div >
    )
}

const App = () => {

    return (
        <div>
            <Header />
            <div style={centerRow}>
                <LeftMargin />
                <AddTrade />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
