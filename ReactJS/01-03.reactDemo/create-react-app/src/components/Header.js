function Header() {

    return <header>
        <div className="container">
            <div className="row">
                <div className="responsive-logo"></div>
                <div className="pullcontainer">
                    <a href="#/" id="pull"><i className="fa fa-bars fa-2x"></i></a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <nav>
                        <div className="logo-holder"></div>
                        <ul className="clearfix">
                            <li><a href="#about">About Us</a></li>
                            <li className="dot">.</li>
                            <li><a href="#work" className="r_spacer">Work</a></li>
                            <li><a href="#shop">Shop</a></li>
                            <li className="dot">.</li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div className="hero"></div>
    </header>

}

export default Header;

// or

/* export const Header = () => {
    return <header>
        <div className="container">
            <div className="row">
                <div className="responsive-logo"></div>
                <div className="pullcontainer">
                    <a href="#" id="pull"><i className="fa fa-bars fa-2x"></i></a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <nav>
                        <div className="logo-holder"></div>
                        <ul className="clearfix">
                            <li><a href="#about">About Us</a></li>
                            <li className="dot">.</li>
                            <li><a href="#work" className="r_spacer">Work</a></li>
                            <li><a href="#shop">Shop</a></li>
                            <li className="dot">.</li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div className="hero"></div>
    </header>
} */