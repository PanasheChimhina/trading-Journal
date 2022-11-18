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