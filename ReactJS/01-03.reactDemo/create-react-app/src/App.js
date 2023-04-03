import './App.css';
import Header from './components/Header.js';
import Intro from './components/Intro.js';
import { FlexContainer } from './components/FlexContainer.js';
import { ShopContainer } from './components/ShopContainer.js';
import { Discover } from './components/Discover.js';
import { SignUp } from './components/SignUp.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <div>
      <Header />

      <Intro />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 section-1 nopadding" id="work">
            <div className="logo-1 wp1"></div>
          </div>
          <div className="col-md-4 section-text nopadding">
            <div className="wp4">
              <h2 className="frame">Vintage Oliva</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.</p>
              <div className="thin-sep"></div>
            </div>
            <div className="small-featured-img seat-red">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 section-text nopadding">
            <div className="wp5">
              <h2 className="mech">La Boriosa</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.</p>
              <div className="thin-sep"></div>
            </div>
            <div className="small-featured-img seat-black">
              <div className="arrow"></div>
            </div>
          </div>
          <div className="col-md-8 section-2 nopadding">
            <div className="logo-2 wp2"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 section-3">
            <div className="logo-3 wp3"></div>
          </div>
          <div className="col-md-4 section-text nopadding">
            <div className="wp6">
              <h2 className="front-frame">Retrò Bike - M. Hulot</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.</p>
              <div className="thin-sep"></div>
            </div>
            <div className="small-featured-img frame-red">
              <div className="arrow"></div>
            </div>
          </div>
          <div className="col-md-4 section-4"></div>
        </div>
      </div>

      <FlexContainer />

      <ShopContainer />

      <Discover />

      <SignUp />

      <Footer />

    </div>
  );
}

export default App;
