
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