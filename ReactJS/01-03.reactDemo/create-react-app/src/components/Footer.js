export function Footer() {
    return <footer id="contact">
        <div className="container">
            <div className="row">
                <div className="col-md-4 footer-leftcol">
                    <p><span className="bold-16p">AOD New York</span>
                        2250 Lexington Avenue
                        New York, NY 10035 - <a href="#/">info@domain.com</a>
                    </p>
                </div>
                <div className="col-md-4 footer-midcol">
                    <ul>
                        <li><a href="#/" className="twitter-icon">Twitter</a></li>
                        <li><a href="#/" className="facebook-icon">Facebook</a></li>
                        <li><a href="#/" className="pintrest-icon">Pintrest</a></li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
                <div className="col-md-4 footer-rightcol">
                    <p>Designed by <a href="#/"><img src="img/yebo-icon.png" alt="Yebo Logo" /></a></p>
                </div>
            </div>
        </div>
    </footer>
}