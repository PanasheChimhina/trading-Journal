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
