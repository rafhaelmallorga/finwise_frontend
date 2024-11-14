const LoginPage = () => {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: '#f0f2f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                width: "50%",
                height: "100%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <form style={{
                width: "50%",
                height: "50%",
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: "5px",
                boxShadow: "0px 0px 5px #bbb"
            }}>
                    <h1>Login</h1>
                    <p>Doesn't have an account yet? <a href="_blank">Sign Up</a></p>

                    <input placeholder="E-mail"/>
                    <input placeholder="Password"/>
                    <input type="checkbox"/>  <span>Remember me</span>

                    <a href="_blank">Forgot Password?</a>

                    <button>Login</button>
                </form>
            </div>
            <div style={{
                width: "50%",
                height: "100%",
                backgroundColor: "#036",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img src="./src/assets/logo.svg" alt="FinWise Logo" />
            </div>
        </div>
    )
}

export default LoginPage;