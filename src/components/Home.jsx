import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Video from './Video';
import logo from "../images/floki_final.png";
import logo3 from "../images/logo3.png";
// import logo3 from "../images/new-1.jpeg";
import c1 from "../images/c1.jpeg";
import c2 from "../images/c2.jpeg";
import binance from "../images/binance.jpeg";
import hero from "../images/f2.png";
import hero1 from "../images/imhhh.png";
import contract from "../images/contract.jpeg";
import bscscan from "../images/bscscan.png";
// import im1 from "../images/1.svg";
// import im2 from "../images/2.svg";
// import im3 from "../images/3.svg";
// import im4 from "../images/4.svg";
// import im5 from "../images/5.svg";
// import im6 from "../images/6.svg";
// import im1 from "../images/im1.jpeg";
// import im2 from "../images/im2.jpeg";
// import im3 from "../images/im3.jpeg";
// import im4 from "../images/im4.jpeg";
// import im5 from "../images/im5.jpeg";
// import im6 from "../images/im6.jpeg";
import im1 from "../images/im-1.png";
import im2 from "../images/im-2.png";
import im3 from "../images/im-3.png";
import im4 from "../images/im-4.png";
import im5 from "../images/im-5.png";
import im6 from "../images/im-6.png";
import f1 from "../images/f1.png";
// import f2 from "../images/f2.png";
import f3 from "../images/f3.png";
import amazon from "../images/amazon.png";
import tax from "../images/tax.jpeg";
import token from "../images/token.jpeg";
import flokiSwap from "../images/floki_swap.png";
import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActiveMenu: false,
    };
  }

  // componentDidMount() {
  //   var vid = document.getElementById("herovideo")
  //   vid.load()
  // }

  handleActiveMenu = () => {
    this.setState(
      {
        isActiveMenu: !this.state.isActiveMenu,
      },
      () => console.log("CLICKED")
    );
  };

  render() {
    const { isActiveMenu } = this.state;
    return (
      <>
        <nav>
          <div className="container" id="nav-container">
            <a href="#" className="logo">
              <img src={logo} />
            </a>
            <ul className={isActiveMenu === true ? "active" : " "}>
              <li
                className="nav-link"
                onClick={(e) => this.handleActiveMenu(e)}
              >
                <a href="#" className="nav">
                  Home
                </a>
              </li>
              <li
                className="nav-link-about"
                onClick={(e) => this.handleActiveMenu(e)}
              >
                <a href="#" className="nav-about">
                  Buy
                </a>
              </li>
              <li
                className="nav-link-roadmap"
                onClick={(e) => this.handleActiveMenu(e)}
              >
                <a href="#floki-swap" className="nav-roadmap">
                  Floki Swap
                </a>
              </li>
              <li
                className="nav-link"
                onClick={(e) => this.handleActiveMenu(e)}
              >
                <a href="#rescue" className="nav">
                  Rescue
                </a>
              </li>
              {/* <li
                className="nav-link"
                onClick={(e) => this.handleActiveMenu(e)}
              >
                <a href="#about-section" className="nav">
                  Giveaway
                </a>
              </li> */}
            </ul>
            <div className="d-flex">
              {/* <button className="btn-effect btn-media-screen" onClick={(e) => this.handleActiveMenu(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                </svg>
              </button> */}
              <button
                className="btn-effect"
              >
                Flokiswap coming soon
              </button>
            </div>
          </div>
        </nav>
        <div className="hero-section">
          <div>
            {/* <video id="herovideo" width="320" height="240" controls loop autoPlay>
              <source src={herovideo} type="video/mp4"></source>
              <source src="movie.ogg" type="video/ogg"></source>
              Your browser does not support the video tag.
            </video> */}
            {/* <video id="herovideo" autoplay loop>
              <source src={herovideo} type="video/mp4" />
            </video> */}
            <img src={hero} alt="hero" />
            <span>
              <h1>FLOKI INU</h1>
              <h2>
                FLOKI INU is fully Decentralized next generation meme Token{" "}
              </h2>
              <p>
                Meme for the Futureon Binance Smart Chain to bring recognizable
                products such as Holding Benefits
              </p>
              <h2>Lottery & investment into a new era.</h2>
              <div style={{marginTop: "4rem"}}>
                <a href="https://app.unicrypt.network/amm/pancake-v2/ilo/0x692f8a9305fEB902eba12679eA07F4aDCf3DD8be" target="_blank" rel="noreferrer" class="btn-effect button-blue">
                  BUY ON UNICRYPT.NETWORK
                </a>
                <a href="https://app.unicrypt.network/amm/pancake-v2/ilo/0x692f8a9305fEB902eba12679eA07F4aDCf3DD8be" target="_blank" rel="noreferrer" class="btn-effect ml-1">
                  Buy FLOKI INU
                </a>
              </div>
            </span>
          </div>
        </div>
        <div className="photo-section">
          {/* <div> */}
          <img
            src={hero1}
            alt="imhhh.png"
            style={{ height: "17rem", width: "auto" }}
          />
          <span>
            <h1>Supported By ELON MUSK</h1>
            {/* <h2>FLOKI INU is fully Decentralized next generation meme Token </h2> */}
            <p>
            A Decentralized Meme Token Based on Binance smart chain .
            </p>
            {/* <h2>Lottery & investment into a new era.</h2> */}
            <div>
              <button href="https://app.unicrypt.network/amm/pancake-v2/ilo/0x692f8a9305fEB902eba12679eA07F4aDCf3DD8be" class="btn-effect">
                Buy FLOKI INU
              </button>
            </div>
          </span>
          {/* </div> */}
        </div>

          <Video />

        <div className="card-section">
          <img src={logo3} alt="logo3" />
          <div className="cards">
            <div className="card card1">
              <img src={token} alt="token" />
              <div className="card-header">
                <h4>TOKENOMICS</h4>
                <p>TOKEN NAME - FLOKI INU</p>
                <p>SYMBOL - FLOKI</p>
                <p>DECIMAL - 18</p>
                <p>SUPPLY - 1 QUARD TRILLION</p>
              </div>
            </div>
            <div className="card card2">
              <img src={tax} alt="tax" />
              <div className="card-header">
                <h4>10% Tax over Every Transaction</h4>
                <p>6% Holding Benefits</p>
                <p>2% - Floki Lovers</p>
                <p>2% - lottery</p>
              </div>
            </div>
            <div className="card card3">
              <img src={contract} alt="contract" />
              <div className="card-header">
                <h4>Contract Address</h4>
                <p>0x2d2e485dd247bb9efce191</p>
                <p>a628ba994c6f2f7408</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://bscscan.com/token/0x2d2e485dd247bb9efce191a628ba994c6f2f7408"
                >
                  <button className="btn btn-effect">Contract</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contents about-sections" id="about-section">
          <div className="about-left">
            <h3>The Official Floki Inu & Ecosystem</h3>
            <p>
              Floki Inu, The Official Floki Inu coin on BSC is aiming to be the
              biggest community-driven doge coin on the market. Named by its
              beloved father, Elon Musk, the potential for this adorable little
              baby puppy is limitless. Floki Inu being a
              Hyper-deflationary coin the holders will get rewarded
              automatically with every transaction just by holding it in their
              wallet! What's more is that Floki carries with him the embodiment
              of the Norse Viking God, giving him a lot more bark to his bite.
            </p>
          </div>
          <div className="about-right">
            <div className="about-box">
              <h4>Rewards holding</h4>
              <p>6% Holding Benefits</p>
              <p>2% - Floki Lovers</p>
              <p>2% - lottery</p>
            </div>
            <div className="about-box">
              <h4>Locked Liquidity</h4>
              <p>6% Liquidity lock</p>
            </div>
            <div className="about-box">
              <h4>Lottery</h4>
              <p>Top 10 holders will lottery</p>
            </div>
          </div>
        </div>

        <div className="content bg-light" id="floki-swap">
          <div className="photo-section-2">
            {/* <div> */}
            <img
              src={flokiSwap}
              alt="Floki_SWAP"
              
            />
            <span>
              <h1>FLOKI SWAP</h1>
              {/* <h2>FLOKI INU is fully Decentralized next generation meme Token </h2> */}
              <p>
                Floki swap is a decentralized exchange that allows you to trade
                cryptocurrencies and tokens without a centralized intermediary,
                keeping custody of your tokens all the while.
              </p>
              {/* <h2>Lottery & investment into a new era.</h2> */}
              <div>
                <button
                  href="#"
                  class="btn-effect mt-12"
                  style={{ marginTop: "1.5rem" }}
                >
                  Coming Soon
                </button>
              </div>
            </span>
            {/* </div> */}
          </div>
          <div className="content text-center" id="howToBuy">
            <div className="content-top">How To Buy $FLOKI</div>
            <div className="content-bottom">
              <div className="card-1">
                <img src={c2} alt="Trust wallet" />
                <h2>STEP 01</h2>
                <p>
                  Download Trustswap/Metamask Wallet on your phone. It is available on both
                  iOS and Android. You can also use any other app as long as it
                  is compatible with PancakeSwap. On iOS you may need to follow{" "}
                  <a
                    href="https://community.trustwallet.com/t/enable-dapp-browser-on-trust-wallet-ios-version/98308"
                    target="_blank"
                    rel="noreferrer"
                  >
                    THESE INSTRUCTIONS
                  </a>{" "}
                  first.
                </p>
              </div>
              <div className="card-1">
                <img src={binance} alt="BNB" />
                <h2>STEP 02</h2>
                <p>
                  Transfer BNB to your wallet. This can be done from Binance via
                  the BNB network or you can also top up your Trust Wallet by
                  going into your Smart Chain wallet and pressing buy in the
                  right corner.
                </p>
              </div>
              <div className="card-1">
                <img src={c1} alt="Address" />
                <h2>STEP 03</h2>
                <p>
                  Enter PancakeSwap via DApps. Exchange BNB for $FLOKI using
                  the contract address:
                </p>
                <p>0x2d2e485dd247bb9efce191a628ba994c6f2f7408</p>
              </div>
            </div>
          </div>
          <div className="content bg-light featured-section">
            <h1 className="featured-section-top text-center">
              Featured in Publication
            </h1>
            <div className="featured-section-bottom">
              <div className="card-group">
                <img src={im1} alt="image1" />
                <img src={im2} alt="image1" />
                <img src={im3} alt="image1" />
              </div>
              <div className="card-group">
                <img src={im4} alt="image1" />
                <img src={im5} alt="image1" />
                <img src={im6} alt="image1" />
              </div>
            </div>
          </div>
          {/* <div className="container">
            <h1>FLOKI INU</h1>
            <p>
              Static Rewards, LP Acquisition, Manual Burn
              <br />
              <br />A common misconception with the heavy APY average is the
              subjectivity of the impermanent loss from staking an LP (liquidity
              provider) in a farming reward generator. With the explosion of
              DeFi we have seen too many new cryptocurrency prospectors get
              sucked into a high APY LP-farming trap, feeling hopeless as they
              are pushed out by earlier buyers with higher staking rewards.
              We’ve all been there, seeing those shiny 6 digit figures can be
              pretty damn tempting to jump in. However, almost always the token
              suffers from the inevitable valuation bubble, which is then
              followed by the burst and the impending collapse of the price.
              This Is why we have seen the mass adoption of static rewards, also
              known as reflection, a separate concept that seeks to eliminate
              the troubles caused by farming rewards.
            </p>
          </div> */}
        </div>

        <div className="photo-section-3" id="rescue">
          {/* <div> */}

          <span>
            <h1>FLOKI INU RESCUE</h1>
            {/* <h2>FLOKI INU is fully Decentralized next generation meme Token </h2> */}
            <p>
              Luckily, we are helping these dogs in real life! We use Amazon
              Smile to collect and donate a percentage of your Amazon purchases
              to the Floki Inu Rescue Association. Joining is easy and free!
              Just use smile.amazon.com when placing orders and select FLOKI Inu
              Rescue Association (a 501(c)3, preferred non-profit organization).
              You’re seconds away from helping Floki in need. Start funding
              shelters today.
            </p>
          </span>
          <img src={amazon} alt="amazon" />
          {/* </div> */}
        </div>

        {/* <div className="content bg-light"> */}
        <div className="content" id="roadmap-section">
          <div className="container">
            <h1>Road Map</h1>
          </div>
        </div>
        <div className="timeline">
          <div className="container flex-column">
            <ul className="timeline-ul">
              <li>
                <div
                  class="timeline-badge"
                  data-placement="right"
                  data-toggle="tooltip"
                >
                  <svg
                    class="svg-inline--fa fa-shipping-fast fa-w-20 fa-lg"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="shipping-fast"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"
                    ></path>
                  </svg>
                </div>
                <div class="timeline-panel">
                  <div class="head">
                    <span>Q2</span>2021
                  </div>
                  <p>
                    Research & Design
                    <br />
                    Smart Contract Building
                    <br />
                    Website Design
                    <br />
                    Team Building
                    <br />
                    Partnership with Marketing Firms
                  </p>
                </div>
                <div className="timeline-panel-img-one">
                  <img src={f1} alt="roadmapone" />
                </div>
              </li>
              <li className="timeline_margin timeline-inverted">
                <div
                  class="timeline-badge"
                  data-placement="right"
                  data-toggle="tooltip"
                >
                  <svg
                    class="svg-inline--fa fa-exchange-alt fa-w-16 fa-lg"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="exchange-alt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"
                    ></path>
                  </svg>
                </div>
                <div class="timeline-panel">
                  <div class="head">
                    <span>Q3</span>2021
                  </div>
                  <p>
                    Token Generation Event
                    <br />
                    PancakeSwap Listing
                    <br />
                    Lock liquidity on Unicrypt
                    <br />
                    Partnership with Audit Firms
                    <br />
                    Whitepaper
                    <br />
                    Listings on Coingecko, CoinMarketCap, Blockfolio, Delta &
                    More
                    <br />
                    CEX Listings
                    <br />
                    Building IDO Platform
                    <br />
                    ChainLink Integration
                  </p>
                </div>
                <div className="timeline-panel-img-two">
                  <img src={hero} alt="featured2" />
                </div>
              </li>
              <li className="timeline_margin">
                <div
                  class="timeline-badge timeline-badge-3"
                  data-placement="right"
                  data-toggle="tooltip"
                >
                  <svg
                    class="svg-inline--fa fa-handshake fa-w-20 fa-lg"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="handshake"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"
                    ></path>
                  </svg>
                </div>
                <div class="timeline-panel timeline-panel-3">
                  <div class="head">
                    <span>Q3</span>2021
                  </div>
                  <p>
                    Top Tier CEX Listings
                    <br />
                    ICO Launches
                    <br />
                    Cross-chain IDO platform
                    <br />
                    Partnership Rollout
                    <br />
                    Community Growth
                  </p>
                </div>
                <div className="timeline-panel-img-three">
                  <img src={f3} alt="featured3" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* </div> */}
        <footer>
          <div className="social">
            <div className="container flex-column">
              <div className="row-1">
                <h1>FLOKIINU</h1>
                <p>The FLOKI INU is a community driven, launched DeFi Token.</p>
              </div>
              <div className="row-2">
                {/* <a href="javascript:void(0)">
                  <svg
                    class="svg-inline--fa fa-facebook fa-w-16 fa-2x"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                    ></path>
                  </svg>
                </a> */}
                <a
                  href="https://twitter.com/flokinuofficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    class="svg-inline--fa fa-twitter fa-w-16 fa-2x"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>
                </a>
                {/* <a href="javascript:void(0)">
                  <svg
                    class="svg-inline--fa fa-instagram fa-w-14 fa-2x"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </a> */}
                {/* <a href="javascript:void(0)">
                  <svg
                    class="svg-inline--fa fa-reddit fa-w-16 fa-2x"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="reddit"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"
                    ></path>
                  </svg>
                </a> */}
                <a
                  href="https://t.me/FlokinuCHAT"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    class="svg-inline--fa fa-telegram fa-w-16 fa-2x"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="telegram"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
                    ></path>
                  </svg>
                </a>
                <a href="https://bscscan.com/token/0x2d2e485dd247bb9efce191a628ba994c6f2f7408">
                  <img src={bscscan} alt="bscscan" style={{width: "30px"}} />
                  {/* <svg
                    // class="svg-inline--fa fa-telegram fa-w-16 fa-2x"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    // data-icon="telegram"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    data-fa-i2svg=""
                  >
                      <path
                        id="Path_1"
                        data-name="Path 1"
                        fill="currentColor"
                        d="M244.6,271.1a5.144,5.144,0,0,1,5.168-5.143l8.568.028a5.151,5.151,0,0,1,5.151,5.151v32.4c.965-.286,2.2-.591,3.559-.911a4.292,4.292,0,0,0,3.309-4.177V258.261a5.152,5.152,0,0,1,5.151-5.152H284.1a5.152,5.152,0,0,1,5.151,5.152v37.3s2.15-.87,4.243-1.754a4.3,4.3,0,0,0,2.625-3.957V245.383a5.151,5.151,0,0,1,5.15-5.151h8.585A5.151,5.151,0,0,1,315,245.383V282c7.443-5.394,14.986-11.882,20.972-19.683a8.646,8.646,0,0,0,1.316-8.072,60.636,60.636,0,1,0-109.855,50.108,7.668,7.668,0,0,0,7.316,3.79c1.624-.143,3.646-.345,6.05-.627a4.29,4.29,0,0,0,3.805-4.258V271.1"
                        // fill="#fff"
                      />
                      <path
                        id="Path_2"
                        data-name="Path 2"
                        d="M244.417,323.061A60.656,60.656,0,0,0,340.756,274c0-1.4-.065-2.778-.158-4.152-22.163,33.055-63.085,48.508-96.181,53.213"
                        // fill="#f0b90b"
                        fill="currentColor"
                      />
                  </svg> */}
                </a>
                {/* <a href="javascript:void(0)">
                  <svg
                    class="svg-inline--fa fa-discord fa-w-14 fa-2x"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="discord"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"
                    ></path>
                  </svg>
                </a> */}
                {/* <a
                  href="https://medium.com/@SafeSpaceBSC"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={medium} alt="medium" />
                </a> */}
              </div>
            </div>
          </div>
          <div className="links">
            <div className="container">
              © 2021 FLOKIINU | All Rights Reserved.
              <ul>
                <li>
                  <a href="#howToBuy">How to Buy</a>
                </li>
                {/* <li>
                  <a href="javascript:void(0)">Terms of Service</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Privacy Policy</a>
                </li> */}
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Home;
