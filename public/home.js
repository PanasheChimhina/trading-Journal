
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