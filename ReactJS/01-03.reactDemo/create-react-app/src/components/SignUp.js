export function SignUp() {
    return <section className="sign_up">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 sign-up">
                    <h2 className="logo-header">Stay on the saddle!</h2>
                    <form name="signup-form">
                        <input className="signup-input" type="email" name="email_address" value="" placeholder="enter your email..." title="Please enter a valid email address." required />
                        <button type="submit" className="submit-btn">GO</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}