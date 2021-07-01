import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import logo from "../images/floki_final.png"
import graph from "../images/graph.png"
import rocket from "../images/rocket.svg"
import barchart from "../images/bar-chart.svg"
import piechart from "../images/pie-chart.svg"
import arrowleft from "../images/arrow-left.svg"
import safespaceBanner from "../images/safespace-banner.gif"
import medium from "../images/medium.png"
import roadmapone from "../images/roadmap-1.png"
import roadmaptwo from "../images/roadmap-2.png"
import roadmapthree from "../images/roadmap-3.png"
import hero from "../images/hero.png"
import hero1 from "../images/imhhh.png"
import "./Home.css"
class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActiveMenu: false,
    }
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
    )
  }

  render() {
    const { isActiveMenu } = this.state
    return (
      <>
        <nav>
          <div className="container" id="nav-container">
            <a href="#" className="logo">
              <img src={logo} />
            </a>
            <ul className={isActiveMenu === true ? "active" : " "}>
              <li className="nav-link" onClick={(e) => this.handleActiveMenu(e)}>
                <a href="#" className="nav">
                  Home
                </a>
              </li>
              <li className="nav-link-about" onClick={(e) => this.handleActiveMenu(e)}>
                <a href="#about-section" className="nav-about">
                  About
                </a>
              </li>
              <li className="nav-link-roadmap" onClick={(e) => this.handleActiveMenu(e)}>
                <a href="#roadmap-section" className="nav-roadmap">
                  Roadmap
                </a>
              </li>
              <li className="nav-link" onClick={(e) => this.handleActiveMenu(e)}>
                <a href="#about-section" className="nav">
                  LitePapers
                </a>
              </li>
              <li className="nav-link" onClick={(e) => this.handleActiveMenu(e)}>
                <a href="#about-section" className="nav">
                  Giveaway
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn-effect btn-media-screen" onClick={(e) => this.handleActiveMenu(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                </svg>
              </button>
              <button href="https://safespace181.gitbook.io/safespace/" className="btn-effect">
                Buy Now
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
              <h2>FLOKI INU is fully Decentralized next generation meme Token </h2>
              <p>Meme for the Futureon Binance Smart Chain to bring recognizable products such as Holding Benefits</p>
              <h2>Lottery & investment into a new era.</h2>
              <div>
                <a href="https://t.me/safespacebsc" target="_blank" class="btn-effect button-blue">
                  BUY ON UNICRYPT.NETWORK
                </a>
                <a href="javascript:void(0)" class="btn-effect ml-1">
                  Buy FLOKI INU
                </a>
              </div>
            </span>
          </div>
        </div>
        <div className="photo-section">
          {/* <div> */}
            <img src={hero1} alt="imhhh.png" style={{height: "17rem", width: 'auto'}} />
            <span>
              <h1>Supported By ELON MUSK</h1>
              {/* <h2>FLOKI INU is fully Decentralized next generation meme Token </h2> */}
              <p>Meme for the Future. FLOKI INU is fully Decentralized next generation meme Token on Binance Smart Chain to bring recognizable products such as Holding Benefits, Lottery & investment into a new era.</p>
              {/* <h2>Lottery & investment into a new era.</h2> */}
              <div>
                <a href="https://t.me/safespacebsc" target="_blank" class="btn-effect button-blue">
                  BUY ON UNICRYPT.NETWORK
                </a>
                <a href="javascript:void(0)" class="btn-effect ml-1">
                  Buy FLOKI INU
                </a>
              </div>
            </span>
          {/* </div> */}
        </div>
        <div className="live-chart">
          {/* <div className="container">
            <div className="row">
              <span>
                <div className="dollar">$</div>
                <div className="content-value">
                  0.000000757
                  <small>Value</small>
                </div>
              </span> 
              <span>
                <div className="dollar">$</div>
                <div className="content-value">
                  0.000000757
                  <small>Value</small>
                </div>
              </span>
              <span>
                <div className="dollar">$</div>
                <div className="content-value">
                  0.000000757
                  <small>Value</small>
                </div>
              </span>
            </div>
            <div className="row">
              <span>
                <div className="dollar">$</div>
                <div className="content-value">
                  0.000000757
                  <small>Value</small>
                </div>
              </span>
              <span>
                <div className="dollar">$</div>
                <div className="content-value">
                  0.000000757
                  <small>Value</small>
                </div>
              </span>
            </div>
          </div> */}
          <div class="container">
            
          </div>
        </div>
        <div className="content about-section" id="about-section">
          <div className="container">
            <h1 className="text-center">About</h1>
          </div>
          <div className="container container-left">
            <h4>A revolutionary platform to leverage risk for dynamic yield generating strategies, in combination with frictionless holder incentives and reward structures.</h4>
            <p>We created $SAFESPACE to provide our holders with leading tokenomics within the DeFi space. Our frictionless yield & liquidity generation protocol means that you earn passive income without having to do anything at all. At $SAFESPACE, we charge a 6% transaction fee which is split in two ways 3% goes into a locked liquidity pool and 3% is shared amongst our stakeholders. This is called a deflationary currency and will earn up to 80% annual yield percentage - exceptionally higher than any traditional savings account.</p>
            <h4 className="text-green">Earn</h4>
            <p>Gain $SAFESPACE every time a transaction is completed. We charge a 6% transaction fee; this means 3% goes into a locked liquidity pool and 3% is rewarded to our stakeholders. No need to trade, simply watch your balance increase in real-time.</p>
            <h4 className="text-green">Fees</h4>
            <p>At $SAFESPACE, we charge a 6% transaction fee which is split in two ways. 3% goes into a locked liquidity pool and 3% is shared amongst our stakeholders. This is called a deflationary currency and will earn up to 80% annual yield percentage - exceptionally higher than any traditional savings account.</p>
            <h4 className="text-green">Join</h4>
            <p>We’d love for you to become part of our incredible $SAFESTAR community! We understand the crypto world is an exciting new place, so it’s likely you’re going to want to chat and ask some questions. Our team is always active and happy to answer any queries you may have.</p>
            <ul>
              <li>Have a question? Ask and speak directly to the dev team.</li>
              <li>Want to chat with our like-minded community? We love new members!</li>
            </ul>
          </div>
        </div>
        <div className="content bg-light text-center">
          <div className="container">
            <h1>FLOKI INU</h1>
            <p>
              Static Rewards, LP Acquisition, Manual Burn
              <br />
              <br />A common misconception with the heavy APY average is the subjectivity of the impermanent loss from staking an LP (liquidity provider) in a farming reward generator. With the explosion of DeFi we have seen too many new cryptocurrency prospectors get sucked into a high APY LP-farming trap, feeling hopeless as they are pushed out by earlier buyers with higher staking rewards. We’ve all been there, seeing those shiny 6 digit figures can be pretty damn tempting to jump in. However, almost always the token suffers from the inevitable valuation bubble, which is then followed by the burst and the impending collapse of the price. This Is why we have seen the mass adoption of static rewards, also known as reflection, a separate concept that seeks to eliminate the troubles caused by farming rewards.
            </p>
          </div>
        </div>
        <div className="content text-center">
          <div className="container">
            <div className="bg-img">
              <img src={rocket} />
            </div>
            <h1>Why Static?</h1>
            <p>Static rewards solve a host of problems. First, the reward amount is conditional upon the volume of the token being traded. This mechanism aims to alleviate some of the downward sell pressure put on the token caused by earlier adopters selling their tokens after farming crazy high APY’s. Second, the reflect mechanism encourages holders to hang onto their tokens to garner higher kick-backs which are based upon a percentages carried out and dependant upon the total tokens held by the owner.</p>
          </div>
        </div>
        <div className="content content-chart">
          <div className="container">
            <div className="chart-wrap">
              <div className="chart-content">
                <img src={barchart} />
                <h1>Manual Burns</h1>
                <p>Sometimes burns matter; sometimes they don’t. A continuous burn on any one protocol can be nice in the early days, however, this means the burn cannot be finite or controlled in any way. Having burns controlled by the team and promoted based on achievements helps to keep the community rewarded and informed. The conditions of the manual burn and the amounts can be advertised and tracked. SafeSpace aims to implement a burn strategy that is beneficial and rewarding for those engaged for the long term. Furthermore, the total number of SafeSpace burned is featured on our readout located on the website which allows for further transparency in identifying the current circulating supply at any given point of time.</p>
              </div>
              <div className="chart-content-two media-screen-none">
                <div className="row">
                  <span>
                    1,000,000,000,000,000
                    <small>Total Supply</small>
                  </span>
                  <span>
                    50% : 500,000,000,000,000
                    <small>Burn & Reward</small>
                  </span>
                </div>
                <div className="row">
                  <span>
                    20% : 200,000,000,000,000
                    <small>liquidity add</small>
                  </span>
                  <span>
                    7% : 70,000,000,000,000
                    <small>Innovation Fund</small>
                  </span>
                </div>
                <div className="row">
                  <span>
                    8% : 80,000,000,000,000
                    <small>Development Fund</small>
                  </span>
                  <span>
                    4% : 40,000,000,000,000
                    <small>Marketing Fund</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="chart-wrap">
              <div className="chart-content">
                <img src={piechart} />
                <h1>Automatic Liquidity Pool (LP)</h1>
                <p>Automatic LP is the secret sauce of SafeSpace. Here we have a function that acts as a two-fold beneficial implementation for holders. First, the contract sucks up tokens from sellers and buyers alike, and adds them to the LP creating a solid price floor. Second, the penalty acts as an arbitrage resistant mechanism that secures the volume of SafeSpace as a reward for the holders. In theory, the added LP creates a stability from the supplied LP by adding the tax to the overall liquidity of the token, thus increasing the tokens overall LP and supporting the price floor of the token. This is different from the burn function of other reflection tokens which is only beneficial in the short term from the granted reduction of supply. As the SafeSpace token LP increases, the price stability mirrors this function with the benefit of a solid price floor and cushion for holders. The goal here is to prevent the larger dips when whales decide to sell their tokens later in the game, which keeps the price from fluctuating as much as if there was no automatic LP function. All of this is an effort to alleviate some of the troubles we have seen with the current DeFi reflection tokens. We are confident that this model and protocol will prevail over the outdated reflection tokens for these reasons.</p>
                <div className="arrow-left">
                  <img src={arrowleft} />
                </div>
              </div>
              <div className="chart-content-two media-screen-block">
                <div className="row">
                  <span>
                    1,000,000,000,000,000
                    <small>Total Supply</small>
                  </span>
                  <span>
                    223,000,000,000,000
                    <small>Burned Dev Tokens</small>
                  </span>
                </div>
                <div className="row">
                  <span>
                    777,000,000,000,000
                    <small>Launch Supply</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content text-center content-fuctions">
          <div className="container">
            <h1>FLOKI INU</h1>
            <p>SafeSpace employs 3 simple functions: Reflection + LP acquisition + Burn In each trade, the transaction is taxed a 6% fee, which is split 2 ways.</p>
            <ul>
              <li>
                <span className="count">1</span>
                3% fee = redistributed to all existing holders
              </li>
              <li>
                <span className="count">2</span>
                3% fee is split 50/50 half of which is sold by the contract into BNB, while the other half of the SafeSpace tokens are paired automatically with the previously mentioned BNB and added as a liquidity pair on Pancake Swap.
              </li>
            </ul>
          </div>
        </div>
        <div className="content bg-light text-center">
          <div className="container">
            <h1>Safety</h1>
            <p>Step by step plan to ensure 100% safety.</p>
            <div className="steps">
              <div className="background">
                <div className="body">
                  <svg class="svg-inline--fa fa-burn fa-w-12 fa-3x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="burn" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M192 0C79.7 101.3 0 220.9 0 300.5 0 425 79 512 192 512s192-87 192-211.5c0-79.9-80.2-199.6-192-300.5zM98.9 385.2c0-13.3 4.2-61.2 93.1-161.2 88.9 100 93.1 147.9 93.1 161.2 0 48.5-28.9 84.1-72.4 92.7-6.8.8-13.5 2.1-20.7 2.1s-13.9-1.2-20.7-2.1c-43.5-8.5-72.4-44.2-72.4-92.7zm212 39.7c3.7-12.4 6.2-25.5 6.2-39.7 0-80.9-112.7-195.5-125.1-209.4-12.9 14.5-125.1 128.6-125.1 209.4 0 14.2 2.5 27.3 6.2 39.7-25.8-31.3-41.1-74-41.1-124.4 0-90.8 122.6-215.8 160-251.9 37.4 36 160 161.1 160 251.9 0 50.4-15.3 93.1-41.1 124.4z"></path>
                  </svg>
                  Dev burned all tokens in Dev Wallet prior to launch
                </div>
                <div className="foot">
                  <span>Step 1</span>
                </div>
              </div>
              <div className="background">
                <div className="body">
                  <svg class="svg-inline--fa fa-balance-scale fa-w-20 fa-3x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="balance-scale" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M634.4 279.09L525.35 103.12C522.18 98.38 517.09 96 512 96s-10.18 2.38-13.35 7.12L389.6 279.09c-3.87 5.78-6.09 12.72-5.51 19.64C389.56 364.4 444.74 416 512 416s122.44-51.6 127.91-117.27c.58-6.92-1.64-13.86-5.51-19.64zM512 384c-41.58 0-77.55-27.13-90.78-64h181.2C589 357.23 553.28 384 512 384zm-90.27-96l90.31-145.76L602.98 288H421.73zM536 480H336V125.74c27.56-7.14 48-31.95 48-61.74h152c4.42 0 8-3.58 8-8V40c0-4.42-3.58-8-8-8H374.89c-.15-.26-4.37-11.11-19.11-21.07C345.57 4.03 333.25 0 320 0s-25.57 4.03-35.78 10.93c-14.74 9.96-18.96 20.81-19.11 21.07H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h152c0 29.79 20.44 54.6 48 61.74V480H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h432c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM288 64c0-17.67 14.33-32 32-32s32 14.33 32 32-14.33 32-32 32-32-14.33-32-32zm-32.09 234.73c.58-6.92-1.64-13.86-5.51-19.64L141.35 103.12C138.18 98.38 133.09 96 128 96s-10.18 2.38-13.35 7.12L5.6 279.09c-3.87 5.78-6.09 12.72-5.51 19.64C5.56 364.4 60.74 416 128 416s122.44-51.6 127.91-117.27zM128.04 142.24L218.98 288H37.73l90.31-145.76zM37.22 320h181.2C205 357.23 169.28 384 128 384c-41.58 0-77.55-27.13-90.78-64z"></path>
                  </svg>
                  Launch on DxSale
                </div>
                <div className="foot">
                  <span>Step 2</span>
                </div>
              </div>
              <div className="background">
                <div className="body">
                  <svg class="svg-inline--fa fa-lock-alt fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="lock-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M224 420c-11 0-20-9-20-20v-64c0-11 9-20 20-20s20 9 20 20v64c0 11-9 20-20 20zm224-148v192c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48h16v-64C64 71.6 136-.3 224.5 0 312.9.3 384 73.1 384 161.5V224h16c26.5 0 48 21.5 48 48zM96 224h256v-64c0-70.6-57.4-128-128-128S96 89.4 96 160v64zm320 240V272c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16z"></path>
                  </svg>
                  LP locked on DxLocker for 4 years
                </div>
                <div className="foot">
                  <span>Step 3</span>
                </div>
              </div>
              <div className="background">
                <div className="body">
                  <svg class="svg-inline--fa fa-coins fa-w-16 fa-3x" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="coins" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M336 32c-48.6 0-92.6 9-124.5 23.4-.9.4-51.5 21-51.5 56.6v16.7C76.1 132.2 0 163.4 0 208v192c0 44.2 78.8 80 176 80s176-35.8 176-80v-16.4c89.7-3.7 160-37.9 160-79.6V112c0-37-62.1-80-176-80zm-16 368c0 13.9-50.5 48-144 48S32 413.9 32 400v-50.1c31.8 20.6 84.4 34.1 144 34.1s112.2-13.5 144-34.1V400zm0-96c0 13.9-50.5 48-144 48S32 317.9 32 304v-50.1c31.8 20.6 84.4 34.1 144 34.1s112.2-13.5 144-34.1V304zm-144-48c-81 0-146.7-21.5-146.7-48S95 160 176 160s146.7 21.5 146.7 48S257 256 176 256zm304 48c0 13.1-45 43.6-128 47.3v-64.1c52.8-2.2 99.1-14.6 128-33.3V304zm0-96c0 13.1-45.1 43.4-128 47.2V208c0-5.6-1.7-11-4.1-16.3 54.6-1.7 102.4-14.5 132.1-33.8V208zm-144-48c-7.3 0-14-.5-20.9-.9-36.9-21.7-85-28.2-115.6-30-6.3-5.3-10.1-11-10.1-17.1 0-26.5 65.7-48 146.7-48s146.7 21.5 146.7 48S417 160 336 160z"></path>
                  </svg>
                  LP generated with every trade and locked on Pancake
                </div>
                <div className="foot">
                  <span>Step 4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content" id="roadmap-section">
          <div className="container">
            <h1>Road Map</h1>
          </div>
        </div>
        <div className="timeline">
          <div className="container flex-column">
            <ul className="timeline-ul">
              <li>
                <div class="timeline-badge" data-placement="right" data-toggle="tooltip">
                  <svg class="svg-inline--fa fa-shipping-fast fa-w-20 fa-lg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shipping-fast" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
                  </svg>
                </div>
                <div class="timeline-panel">
                  <div class="head">
                    <span>Q1</span>2021
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
                  <img src={roadmapone} />
                </div>
              </li>
              <li className="timeline_margin timeline-inverted">
                <div class="timeline-badge" data-placement="right" data-toggle="tooltip">
                  <svg class="svg-inline--fa fa-exchange-alt fa-w-16 fa-lg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exchange-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"></path>
                  </svg>
                </div>
                <div class="timeline-panel">
                  <div class="head">
                    <span>Q2</span>2021
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
                    Listings on Coingecko, CoinMarketCap, Blockfolio, Delta & More
                    <br />
                    CEX Listings
                    <br />
                    Building IDO Platform
                    <br />
                    ChainLink Integration
                  </p>
                </div>
                <div className="timeline-panel-img-two">
                  <img src={roadmaptwo} />
                </div>
              </li>
              <li className="timeline_margin">
                <div class="timeline-badge timeline-badge-3" data-placement="right" data-toggle="tooltip">
                  <svg class="svg-inline--fa fa-handshake fa-w-20 fa-lg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="handshake" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
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
                  <img src={roadmapthree} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <footer>
          <div className="social">
            <div className="container flex-column">
              <div className="row-1">
                <h1>SafeSpace Protocol</h1>
                <p>The FLOKI INU is a community driven, launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn.</p>
              </div>
              <div className="row-2">
                <a href="javascript:void(0)">
                  <svg class="svg-inline--fa fa-facebook fa-w-16 fa-2x" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                  </svg>
                </a>
                <a href="https://mobile.twitter.com/safespacebsc" target="_blank">
                  <svg class="svg-inline--fa fa-twitter fa-w-16 fa-2x" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
                <a href="javascript:void(0)">
                  <svg class="svg-inline--fa fa-instagram fa-w-14 fa-2x" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
                <a href="javascript:void(0)">
                  <svg class="svg-inline--fa fa-reddit fa-w-16 fa-2x" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="reddit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"></path>
                  </svg>
                </a>
                <a href="https://t.me/safespacebsc" target="_blank">
                  <svg class="svg-inline--fa fa-telegram fa-w-16 fa-2x" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                  </svg>
                </a>
                <a href="javascript:void(0)">
                  <svg class="svg-inline--fa fa-discord fa-w-14 fa-2x" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
                  </svg>
                </a>
                <a href="https://medium.com/@SafeSpaceBSC" target="_blank">
                  <img src={medium} />
                </a>
              </div>
            </div>
          </div>
          <div className="links">
            <div className="container">
              © 2021 SafeSpace | All Rights Reserved.
              <ul>
                <li>
                  <a href="javascript:void(0)">Branding</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Whitepaper</a>
                </li>
                <li>
                  <a href="javascript:void(0)">How to Buy</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Terms of Service</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default Home
