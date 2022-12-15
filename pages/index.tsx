import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      {/* Preloading */}
      {/* <div className="preloader text-center">
        <div className="la-ball-scale-multiple la-2x">
          <div />
          <div />
          <div />
        </div>
      </div> */}
      {/* Preloading */}
      {/* Header Top Bar */}
      <section className="top_bar_01">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header_bar">
                <div className="row">
                  <div className="col-lg-7 col-md-6">
                    <nav className="top_nav">
                      <ul className="clearfix">
                        <li>
                          <a href="#">Sign in / Join</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Purchase Theme</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-lg-5 col-md-6 clearfix">
                    <div className="top_info clearfix">
                      <div className="dates_times">Saturday, October 7</div>
                      <div className="weathers">
                        Melbourne 31°C / 25 - 32°C
                        <i data-icon="" className="icon-weather" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Header Top Bar */}
      {/* Main Header */}
      <header className="header_01">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header_01_inner">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="logo_01">
                      <a href="index.html">
                        <img src="./images/logo.png" alt="Magro" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 noPaddingLeft">
                    <nav className="main_menu mobile_menu">
                      <div className="mobileMenuBar">
                        <a href="javascript: void(0);">
                          <span>Menu</span>
                          <i className="twi-bars" />
                        </a>
                      </div>
                      <ul className="clearfix">
                        <li className="current-menu-item menu-item-has-children mg_menu">
                          <a href="#">Home</a>
                          <div className="megamenu_1 megamenu">
                            <div className="row">
                              <div className="col-lg-5">
                                <ul>
                                  <li>
                                    <a href="index.html">Home Version 01</a>
                                  </li>
                                  <li>
                                    <a href="index2.html">Home Version 02</a>
                                  </li>
                                  <li>
                                    <a href="index3.html">Home Version 03</a>
                                  </li>
                                  <li>
                                    <a href="index4.html">Home Version 04</a>
                                  </li>
                                  <li>
                                    <a href="index5.html">Home Version 05</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-7">
                                <div className="slider_post owl-carousel">
                                  <div className="featured_item_1 fi1_sm">
                                    <img src="./images/ms1.jpg" alt="" />
                                    <div className="fi1_content">
                                      <div className="fi1c_categories">
                                        <a href="#" className="cats blues2">
                                          Design
                                        </a>
                                      </div>
                                      <h2>
                                        <a href="#">
                                          This is how to style flip flops like a
                                          super model Erin Fitzpatrick
                                        </a>
                                      </h2>
                                      <div className="fi1c_meta clearfix">
                                        <span className="fi1cm_author">
                                          By<a href="#">Jawn Staff</a>
                                        </span>
                                        <span className="fi1cm_date font-italic">
                                          <a href="#">Nov 10, 2018</a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="featured_item_1 fi1_sm">
                                    <img src="./images/ms2.jpg" alt="" />
                                    <div className="fi1_content">
                                      <div className="fi1c_categories">
                                        <a href="#" className="cats yellows">
                                          Travel
                                        </a>
                                      </div>
                                      <h2>
                                        <a href="#">
                                          How to Style a Choker so you Don’t
                                          look Like every Erin Fitzpatrick.
                                        </a>
                                      </h2>
                                      <div className="fi1c_meta clearfix">
                                        <span className="fi1cm_author">
                                          By<a href="#">Jawn Staff</a>
                                        </span>
                                        <span className="fi1cm_date font-italic">
                                          <a href="#">Nov 11, 2018</a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="menu-item-has-children mg_menu">
                          <a href="#">Lifestyle</a>
                          <div className="megamenu_2">
                            <div className="magro_tab_1">
                              <ul
                                className="mtab_1 menu_tab nav nav-tabs"
                                id="menu_post_tab"
                              >
                                <li>
                                  <a
                                    className="active"
                                    href="#twt_1"
                                    data-toggle="tab"
                                  >
                                    Hot Vacation
                                  </a>
                                </li>
                                <li>
                                  <a href="#twt_2" data-toggle="tab">
                                    Mountain
                                  </a>
                                </li>
                                <li>
                                  <a href="#twt_3" data-toggle="tab">
                                    Beach
                                  </a>
                                </li>
                                <li>
                                  <a href="#twt_4" data-toggle="tab">
                                    Tour
                                  </a>
                                </li>
                              </ul>
                              <div className="tab-content">
                                <div
                                  className="tab-pane fade show in active"
                                  id="twt_1"
                                  role="tabpanel"
                                >
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/2.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a href="#" className="cats reds">
                                              Tech
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Apollo Astronauts Hared Deep
                                              Radiation
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/6.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a href="#" className="cats blues">
                                              Sports
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Discovering Sydney’s See
                                              Attractions line
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 noPaddingRight">
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/3.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a
                                              href="#"
                                              className="cats live reds"
                                            >
                                              Live
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Added Two New Vegan Flavors To Its
                                              Dairy
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/4.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a href="#" className="cats blues">
                                              Sports
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Apollo Astronauts Hared Deep
                                              Radiation
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="twt_2"
                                  role="tabpanel"
                                >
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/3.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a
                                              href="#"
                                              className="cats live reds"
                                            >
                                              Live
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Added Two New Vegan Flavors To Its
                                              Dairy
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/4.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a href="#" className="cats blues">
                                              Sports
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Apollo Astronauts Hared Deep
                                              Radiation
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 noPaddingRight">
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/2.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a href="#" className="cats reds">
                                              Tech
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Apollo Astronauts Hared Deep
                                              Radiation
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/6.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a href="#" className="cats blues">
                                              Sports
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Discovering Sydney’s See
                                              Attractions line
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="twt_3"
                                  role="tabpanel"
                                >
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/2.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a href="#" className="cats reds">
                                              Tech
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Apollo Astronauts Hared Deep
                                              Radiation
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/6.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a href="#" className="cats blues">
                                              Sports
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Discovering Sydney’s See
                                              Attractions line
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 noPaddingRight">
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/3.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a
                                              href="#"
                                              className="cats live reds"
                                            >
                                              Live
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Added Two New Vegan Flavors To Its
                                              Dairy
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/4.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a href="#" className="cats blues">
                                              Sports
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Apollo Astronauts Hared Deep
                                              Radiation
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="twt_4"
                                  role="tabpanel"
                                >
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/3.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a
                                              href="#"
                                              className="cats live reds"
                                            >
                                              Live
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Added Two New Vegan Flavors To Its
                                              Dairy
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/4.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a href="#" className="cats blues">
                                              Sports
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Apollo Astronauts Hared Deep
                                              Radiation
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 noPaddingRight">
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/2.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a href="#" className="cats reds">
                                              Tech
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Apollo Astronauts Hared Deep
                                              Radiation
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tw1_list clearfix">
                                        <div className="tw1l_thumb">
                                          <img
                                            src="./images/home1/top_week/6.jpg"
                                            alt=""
                                          />
                                          <div className="tw1l_cats">
                                            <a href="#" className="cats blues">
                                              Sports
                                            </a>
                                          </div>
                                        </div>
                                        <div className="tw1_l_content">
                                          <h3>
                                            <a href="#">
                                              Discovering Sydney’s See
                                              Attractions line
                                            </a>
                                          </h3>
                                          <div className="comon_meta clearfix">
                                            <span className="cm_author">
                                              <i className="twi-user" />
                                              By<a href="#">Jawn Staff</a>
                                            </span>
                                            <span className="cm_date">
                                              <a href="#">Nov 10, 2019</a>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a href="category_3.html">Tech</a>
                        </li>
                        <li>
                          <a href="category_6.html">Sports</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Gallery</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="gallery_1.html">Gallery 01</a>
                            </li>
                            <li>
                              <a href="gallery_2.html">Gallery 02</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Features</a>
                          <ul className="sub-menu">
                            <li className="menu-item-has-children">
                              <a href="#">Post Layout</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="single_blog_1.html">
                                    Post Layout 01
                                  </a>
                                </li>
                                <li>
                                  <a href="single_blog_2.html">
                                    Post Layout 02
                                  </a>
                                </li>
                                <li>
                                  <a href="single_blog_3.html">
                                    Post Layout 03
                                  </a>
                                </li>
                                <li>
                                  <a href="single_blog_4.html">
                                    Post Layout 04
                                  </a>
                                </li>
                                <li>
                                  <a href="single_blog_5.html">
                                    Post Layout 05
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="#">Category Layout</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="category_1.html">
                                    category Layout 01
                                  </a>
                                </li>
                                <li>
                                  <a href="category_2.html">
                                    category Layout 02
                                  </a>
                                </li>
                                <li>
                                  <a href="category_3.html">
                                    category Layout 03
                                  </a>
                                </li>
                                <li>
                                  <a href="category_4.html">
                                    category Layout 04
                                  </a>
                                </li>
                                <li>
                                  <a href="category_5.html">
                                    category Layout 05
                                  </a>
                                </li>
                                <li>
                                  <a href="category_6.html">
                                    category Layout 06
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="#">Pages</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="shop_grid.html">Shop Grid</a>
                                </li>
                                <li>
                                  <a href="shop_list.html">Shop List</a>
                                </li>
                                <li>
                                  <a href="shop_details.html">Shop Single</a>
                                </li>
                                <li>
                                  <a href="top_stories.html">Top Stories</a>
                                </li>
                                <li>
                                  <a href="contact.html">Contact Page</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="#">Utility Pages</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="login_1.html">Login Page 01</a>
                                </li>
                                <li>
                                  <a href="login_2.html">Login Page 02</a>
                                </li>
                                <li>
                                  <a href="404_1.html">404 Page 01</a>
                                </li>
                                <li>
                                  <a href="404_2.html">404 Page 02</a>
                                </li>
                                <li>
                                  <a href="coming_soon_1.html">
                                    Coming Soon 01
                                  </a>
                                </li>
                                <li>
                                  <a href="coming_soon_2.html">
                                    Coming Soon 02
                                  </a>
                                </li>
                                <li>
                                  <a href="popup_1.html">Popup 01</a>
                                </li>
                                <li>
                                  <a href="popup_2.html">Popup 02</a>
                                </li>
                                <li>
                                  <a href="popup_3.html">Popup 03</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-lg-3">
                    <div className="header_01_settings">
                      <div className="social_01 clearfix">
                        <a href="#">
                          <i className="twi-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="twi-twitter" />
                        </a>
                        <a href="#">
                          <i className="twi-linkedin-in" />
                        </a>
                        <a href="#">
                          <i className="twi-youtube" />
                        </a>
                      </div>
                      <div className="search_btn">
                        <a href="javascript:void(0);">
                          <i className="twi-search" />
                        </a>
                        <form
                          role="search"
                          method="get"
                          className="searchForms"
                          action="#"
                        >
                          <input
                            type="search"
                            className="search-field"
                            placeholder="Type and Hit Enter..."
                            name="s"
                          />
                          <button type="submit" className="search-submit">
                            <i className="twi-search2" />
                          </button>
                        </form>
                      </div>
                      <a href="#" className="cart_btn">
                        <span>2</span>
                        <i className="twi-shopping-cart" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main Header */}
      {/* Header Bottom */}
      <section className="bottom_bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9">
              <div className="tranding_part clearfix">
                <h4 className="float-left">Trending Now</h4>
                <div className="tr_slider float-left owl-carousel">
                  <div className="tr_items">
                    <a href="#">
                      Heritage Museums &amp; Gardens to Open with New Landscape
                    </a>
                  </div>
                  <div className="tr_items">
                    <a href="#">
                      Meritage Museums &amp; Gardens to Open with New Landscape
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <nav className="bottom_nav">
                <ul>
                  <li>
                    <a href="#">Hot</a>
                  </li>
                  <li>
                    <a href="#">Trending</a>
                  </li>
                  <li>
                    <a href="#">Popular</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Header Bottom */}
      {/* Featured Section */}
      <section className="featured_post_section_1">
        <div className="container">
          <div className="row custom_margin">
            <div className="col-lg-8 col-md-6 custom_padding">
              <div className="featured_item_1">
                <img src="./images/home1/featured/1.jpg" alt="" />
                <div className="fi1_content">
                  <div className="fi1c_categories">
                    <a href="#" className="cats pinks">
                      Fashion
                    </a>
                  </div>
                  <h2>
                    <a href="#">
                      How to Style a Choker so you Don’t look Like every other
                      girl on the planet
                    </a>
                  </h2>
                  <div className="fi1c_meta clearfix">
                    <span className="fi1cm_author">
                      By<a href="#">Jawn Staff</a>
                    </span>
                    <span className="fi1cm_date font-italic">
                      <a href="#">Nov 10, 2018</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row custom_margin">
                <div className="col-lg-6 col-md-12 custom_padding">
                  <div className="featured_item_1 fi1_sm">
                    <img src="./images/home1/featured/7.jpg" alt="" />
                    <div className="fi1_content">
                      <div className="fi1c_categories">
                        <a href="#" className="cats blues2">
                          Design
                        </a>
                      </div>
                      <h2>
                        <a href="#">
                          This is how to style flip flops like a super model
                          Erin Fitzpatrick
                        </a>
                      </h2>
                      <div className="fi1c_meta clearfix">
                        <span className="fi1cm_author">
                          By<a href="#">Jawn Staff</a>
                        </span>
                        <span className="fi1cm_date font-italic">
                          <a href="#">Nov 10, 2018</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 custom_padding">
                  <div className="featured_item_1 fi1_sm">
                    <img src="./images/home1/featured/6.jpg" alt="" />
                    <div className="fi1_content">
                      <div className="fi1c_categories">
                        <a href="#" className="cats reds">
                          Tech
                        </a>
                      </div>
                      <h2>
                        <a href="#">
                          This is how to style flip flops like a super model
                          Erin Fitzpatrick
                        </a>
                      </h2>
                      <div className="fi1c_meta clearfix">
                        <span className="fi1cm_author">
                          By<a href="#">Jawn Staff</a>
                        </span>
                        <span className="fi1cm_date font-italic">
                          <a href="#">Nov 10, 2018</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 custom_padding">
              <div className="featured_item_1 fi1_sm">
                <img src="./images/home1/featured/3.jpg" alt="" />
                <div className="fi1_content">
                  <div className="fi1c_categories">
                    <a href="#" className="cats greens">
                      lifestyle
                    </a>
                  </div>
                  <h2>
                    <a href="#">
                      This is how to style flip flops like a super model Erin
                      Fitzpatrick
                    </a>
                  </h2>
                  <div className="fi1c_meta clearfix">
                    <span className="fi1cm_author">
                      By<a href="#">Jawn Staff</a>
                    </span>
                    <span className="fi1cm_date font-italic">
                      <a href="#">Nov 10, 2018</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="featured_item_1 fi1_sm">
                <img src="./images/home1/featured/4.jpg" alt="" />
                <div className="fi1_content">
                  <div className="fi1c_categories">
                    <a href="#" className="cats blues">
                      Sports
                    </a>
                  </div>
                  <h2>
                    <a href="#">
                      This is how to style flip flops like a super model Erin
                      Fitzpatrick
                    </a>
                  </h2>
                  <div className="fi1c_meta clearfix">
                    <span className="fi1cm_author">
                      By<a href="#">Jawn Staff</a>
                    </span>
                    <span className="fi1cm_date font-italic">
                      <a href="#">Nov 10, 2018</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="featured_item_1 fi1_sm">
                <img src="./images/home1/featured/5.jpg" alt="" />
                <div className="fi1_content">
                  <div className="fi1c_categories">
                    <a href="#" className="cats purples">
                      Health
                    </a>
                  </div>
                  <h2>
                    <a href="#">
                      This is how to style flip flops like a super model Erin
                      Fitzpatrick
                    </a>
                  </h2>
                  <div className="fi1c_meta clearfix">
                    <span className="fi1cm_author">
                      By<a href="#">Jawn Staff</a>
                    </span>
                    <span className="fi1cm_date font-italic">
                      <a href="#">Nov 10, 2018</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Section */}
      {/* Top Post Section */}
      <section className="comon_section bg_white clearfix">
        <div className="container">
          <div className="row cus_top_week_column clearfix">
            <div className="col-lg-8 clearfix">
              <h2 className="sec_titles">
                <i />
                Top of The Week
              </h2>
              <div className="magro_tab_1">
                <ul
                  className="mtab_1 right_top nav nav-tabs"
                  id="top_of_the_week_tab"
                >
                  <li>
                    <a className="active" href="#t_tab_1" data-toggle="tab">
                      Hot Vacation
                    </a>
                  </li>
                  <li>
                    <a href="#t_tab_2" data-toggle="tab">
                      Mountain
                    </a>
                  </li>
                  <li>
                    <a href="#t_tab_3" data-toggle="tab">
                      Beach
                    </a>
                  </li>
                  <li>
                    <a href="#t_tab_4" data-toggle="tab">
                      Tour
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show in active"
                    id="t_tab_1"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="top_week_1">
                          <div className="tw1_thumb">
                            <img src="./images/home1/top_week/1.jpg" alt="" />
                            <div className="tw1_cats">
                              <a href="#" className="cats blues2">
                                Design
                              </a>
                            </div>
                          </div>
                          <div className="tw1_details">
                            <h2>
                              <a href="#">
                                Discovering Sydney’s See Attractions line
                              </a>
                            </h2>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 noPaddingRight">
                        <div className="tw1_list clearfix">
                          <div className="tw1l_thumb">
                            <img src="./images/home1/top_week/2.jpg" alt="" />
                            <div className="tw1l_cats">
                              <a href="#" className="cats reds">
                                Tech
                              </a>
                            </div>
                          </div>
                          <div className="tw1_l_content">
                            <h3>
                              <a href="#">
                                Apollo Astronauts Hared Deep Radiation
                              </a>
                            </h3>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tw1_list clearfix">
                          <div className="tw1l_thumb">
                            <img src="./images/home1/top_week/3.jpg" alt="" />
                            <div className="tw1l_cats">
                              <a href="#" className="cats live reds">
                                Live
                              </a>
                            </div>
                          </div>
                          <div className="tw1_l_content">
                            <h3>
                              <a href="#">
                                Added Two New Vegan Flavors To Its Dairy
                              </a>
                            </h3>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tw1_list clearfix">
                          <div className="tw1l_thumb">
                            <img src="./images/home1/top_week/4.jpg" alt="" />
                            <div className="tw1l_cats">
                              <a href="#" className="cats blues">
                                Sports
                              </a>
                            </div>
                          </div>
                          <div className="tw1_l_content">
                            <h3>
                              <a href="#">
                                Apollo Astronauts Hared Deep Radiation
                              </a>
                            </h3>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="t_tab_2" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="top_week_1">
                          <div className="tw1_thumb">
                            <img src="./images/home1/top_week/5.jpg" alt="" />
                            <div className="tw1_cats">
                              <a href="#" className="cats blues2">
                                Design
                              </a>
                            </div>
                          </div>
                          <div className="tw1_details">
                            <h2>
                              <a href="#">
                                Apollo Astronauts Hared Deep Radiation
                              </a>
                            </h2>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 noPaddingRight">
                        <div className="tw1_list clearfix">
                          <div className="tw1l_thumb">
                            <img src="./images/home1/top_week/4.jpg" alt="" />
                            <div className="tw1l_cats">
                              <a href="#" className="cats live reds">
                                Live
                              </a>
                            </div>
                          </div>
                          <div className="tw1_l_content">
                            <h3>
                              <a href="#">
                                Added Two New Vegan Flavors To Its Dairy
                              </a>
                            </h3>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tw1_list clearfix">
                          <div className="tw1l_thumb">
                            <img src="./images/home1/top_week/2.jpg" alt="" />
                            <div className="tw1l_cats">
                              <a href="#" className="cats reds">
                                Tech
                              </a>
                            </div>
                          </div>
                          <div className="tw1_l_content">
                            <h3>
                              <a href="#">
                                Apollo Astronauts Hared Deep Radiation
                              </a>
                            </h3>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tw1_list clearfix">
                          <div className="tw1l_thumb">
                            <img src="./images/home1/top_week/6.jpg" alt="" />
                            <div className="tw1l_cats">
                              <a href="#" className="cats blues">
                                Sports
                              </a>
                            </div>
                          </div>
                          <div className="tw1_l_content">
                            <h3>
                              <a href="#">
                                Discovering Sydney’s See Attractions line
                              </a>
                            </h3>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="t_tab_3" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="top_week_1">
                          <div className="tw1_thumb">
                            <img src="./images/home1/top_week/1.jpg" alt="" />
                            <div className="tw1_cats">
                              <a href="#" className="cats blues2">
                                Design
                              </a>
                            </div>
                          </div>
                          <div className="tw1_details">
                            <h2>
                              <a href="#">
                                Added Two New Vegan Flavors To Its Dairy
                              </a>
                            </h2>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 noPaddingRight">
                        <div className="tw1_list clearfix">
                          <div className="tw1l_thumb">
                            <img src="./images/home1/top_week/2.jpg" alt="" />
                            <div className="tw1l_cats">
                              <a href="#" className="cats reds">
                                Tech
                              </a>
                            </div>
                          </div>
                          <div className="tw1_l_content">
                            <h3>
                              <a href="#">
                                Apollo Astronauts Hared Deep Radiation
                              </a>
                            </h3>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tw1_list clearfix">
                          <div className="tw1l_thumb">
                            <img src="./images/home1/top_week/3.jpg" alt="" />
                            <div className="tw1l_cats">
                              <a href="#" className="cats live reds">
                                Live
                              </a>
                            </div>
                          </div>
                          <div className="tw1_l_content">
                            <h3>
                              <a href="#">
                                Discovering Sydney’s See Attractions line
                              </a>
                            </h3>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tw1_list clearfix">
                          <div className="tw1l_thumb">
                            <img src="./images/home1/top_week/4.jpg" alt="" />
                            <div className="tw1l_cats">
                              <a href="#" className="cats blues">
                                Sports
                              </a>
                            </div>
                          </div>
                          <div className="tw1_l_content">
                            <h3>
                              <a href="#">
                                Apollo Astronauts Hared Deep Radiation
                              </a>
                            </h3>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="t_tab_4" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="top_week_1">
                          <div className="tw1_thumb">
                            <img src="./images/home1/top_week/5.jpg" alt="" />
                            <div className="tw1_cats">
                              <a href="#" className="cats blues2">
                                Design
                              </a>
                            </div>
                          </div>
                          <div className="tw1_details">
                            <h2>
                              <a href="#">
                                Apollo Astronauts Hared Deep Radiation
                              </a>
                            </h2>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 noPaddingRight">
                        <div className="tw1_list clearfix">
                          <div className="tw1l_thumb">
                            <img src="./images/home1/top_week/4.jpg" alt="" />
                            <div className="tw1l_cats">
                              <a href="#" className="cats live reds">
                                Live
                              </a>
                            </div>
                          </div>
                          <div className="tw1_l_content">
                            <h3>
                              <a href="#">
                                Added Two New Vegan Flavors To Its Dairy
                              </a>
                            </h3>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tw1_list clearfix">
                          <div className="tw1l_thumb">
                            <img src="./images/home1/top_week/6.jpg" alt="" />
                            <div className="tw1l_cats">
                              <a href="#" className="cats blues">
                                Sports
                              </a>
                            </div>
                          </div>
                          <div className="tw1_l_content">
                            <h3>
                              <a href="#">
                                Discovering Sydney’s See Attractions line
                              </a>
                            </h3>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tw1_list clearfix">
                          <div className="tw1l_thumb">
                            <img src="./images/home1/top_week/2.jpg" alt="" />
                            <div className="tw1l_cats">
                              <a href="#" className="cats reds">
                                Tech
                              </a>
                            </div>
                          </div>
                          <div className="tw1_l_content">
                            <h3>
                              <a href="#">
                                Apollo Astronauts Hared Deep Radiation
                              </a>
                            </h3>
                            <div className="comon_meta clearfix">
                              <span className="cm_author">
                                <i className="twi-user" />
                                By<a href="#">Jawn Staff</a>
                              </span>
                              <span className="cm_date">
                                <a href="#">Nov 10, 2019</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="widget mag_cat_widget">
                <h3 className="widget_title">
                  <span>Categories</span>
                </h3>
                <div className="mcw_content">
                  <div className="mcwc_items travel_cate">
                    <a href="#">
                      <img src="./images/widget/cat/1.jpg" alt="" />
                      <span className="mcwc_name">Travel</span>
                      <span className="mcwc_count">11</span>
                    </a>
                  </div>
                  <div className="mcwc_items fashion_cate">
                    <a href="#">
                      <img src="./images/widget/cat/2.jpg" alt="" />
                      <span className="mcwc_name">Fashion</span>
                      <span className="mcwc_count">11</span>
                    </a>
                  </div>
                  <div className="mcwc_items entertainment_cate">
                    <a href="#">
                      <img src="./images/widget/cat/3.jpg" alt="" />
                      <span className="mcwc_name">Entertainment</span>
                      <span className="mcwc_count">11</span>
                    </a>
                  </div>
                  <div className="mcwc_items health_cate">
                    <a href="#">
                      <img src="./images/widget/cat/4.jpg" alt="" />
                      <span className="mcwc_name">Health</span>
                      <span className="mcwc_count">11</span>
                    </a>
                  </div>
                  <div className="mcwc_items nature_cate">
                    <a href="#">
                      <img src="./images/widget/cat/5.jpg" alt="" />
                      <span className="mcwc_name">Nature</span>
                      <span className="mcwc_count">11</span>
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* Top Post Section */}
      {/* Lifestyle Section */}
      <section className="comon_section life_style_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="sec_titles">
                <i />
                Lifestyle
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="tw2_list clearfix">
                <div className="tw2l_thumb">
                  <img src="./images/home1/lifestyle/1.jpg" alt="" />
                </div>
                <div className="tw2_l_content">
                  <a href="#" className="cats reds">
                    Tech
                  </a>
                  <h3>
                    <a href="#">Discovering Sydney’s See Attractions line</a>
                  </h3>
                  <div className="comon_meta clearfix">
                    <span className="cm_author">
                      <i className="twi-user" />
                      By<a href="#">Jawn Staff</a>
                    </span>
                    <span className="cm_date">
                      <a href="#">Nov 11, 2019</a>
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit
                    vitae lobortis faucibus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tw2_list clearfix">
                <div className="tw2l_thumb">
                  <img src="./images/home1/lifestyle/2.jpg" alt="" />
                  <a className="comments" href="#">
                    13
                  </a>
                </div>
                <div className="tw2_l_content">
                  <a href="#" className="cats yellows">
                    Travel
                  </a>
                  <h3>
                    <a href="#">Astronauts Hared Deep Radiation</a>
                  </h3>
                  <div className="comon_meta clearfix">
                    <span className="cm_author">
                      <i className="twi-user" />
                      By<a href="#">Jawn Staff</a>
                    </span>
                    <span className="cm_date">
                      <a href="#">Nov 14, 2019</a>
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit
                    vitae lobortis faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tw2_list_slide owl-carousel">
                <div className="single_tw2_list">
                  <img src="./images/home1/lifestyle/5.jpg" alt="" />
                  <div className="tw2_list_content">
                    <a href="#" className="cats reds">
                      Tech
                    </a>
                    <div className="list_meta_con">
                      <h3>
                        <a href="#">Taylor Swift sent message to people who</a>
                      </h3>
                      <div className="comon_meta clearfix">
                        <span className="cm_author">
                          <i className="twi-user" />
                          By<a href="#">Jawn Staff</a>
                        </span>
                        <span className="cm_date">
                          <a href="#">Nov 10, 2020</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single_tw2_list">
                  <img src="./images/home1/lifestyle/6.jpg" alt="" />
                  <div className="tw2_list_content">
                    <a href="#" className="cats greens">
                      lifestyle
                    </a>
                    <div className="list_meta_con">
                      <h3>
                        <a href="#">Apollo Astronauts Hared Deep Radiation</a>
                      </h3>
                      <div className="comon_meta clearfix">
                        <span className="cm_author">
                          <i className="twi-user" />
                          By<a href="#">Jawn Staff</a>
                        </span>
                        <span className="cm_date">
                          <a href="#">Nov 11, 2020</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="tw2_list clearfix">
                <div className="tw2l_thumb">
                  <img src="./images/home1/lifestyle/3.jpg" alt="" />
                  <a className="comments" href="#">
                    23
                  </a>
                </div>
                <div className="tw2_l_content">
                  <a href="#" className="cats pinks">
                    Fashion
                  </a>
                  <h3>
                    <a href="#">Astronauts Hared Deep Radiation</a>
                  </h3>
                  <div className="comon_meta clearfix">
                    <span className="cm_author">
                      <i className="twi-user" />
                      By<a href="#">Jawn Staff</a>
                    </span>
                    <span className="cm_date">
                      <a href="#">Nov 13, 2019</a>
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit
                    vitae lobortis faucibus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tw2_list clearfix">
                <div className="tw2l_thumb">
                  <img src="./images/home1/lifestyle/4.jpg" alt="" />
                </div>
                <div className="tw2_l_content">
                  <a href="#" className="cats purples">
                    Health
                  </a>
                  <h3>
                    <a href="#">Discovering Sydney’s See Attractions line</a>
                  </h3>
                  <div className="comon_meta clearfix">
                    <span className="cm_author">
                      <i className="twi-user" />
                      By<a href="#">Jawn Staff</a>
                    </span>
                    <span className="cm_date">
                      <a href="#">Nov 12, 2019</a>
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipis Vi ales elit
                    vitae lobortis faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Lifestyle Section */}
      {/* Ads Section */}
      <section className="comon_section ad_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ads text-center">
                <a href="#">
                  <img src="./images/home1/ad.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ads Section */}
      {/* Featured Carousel Section */}
      <section className="feature_section_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="featured_slider_2 owl-carousel">
                <div className="featured_slider_item">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="featured_slider_content">
                        <a href="#" className="cats pinks">
                          Fashion
                        </a>
                        <h2>
                          <a href="#">
                            Will Smith &amp; Martin Lawr Say ‘Bad Boys For Life’
                            Smith &amp; Martin
                          </a>
                        </h2>
                        <p>
                          Mauris mattis auctor cursus. Phasellus tellus tellus,
                          imperdiet ut imperdie sasa eiaculis a sem. Donec
                          vehicula luctus nunc. We come up with revolutionary
                          ideas that bring positive changes to your instagram
                          activity!
                        </p>
                        <a href="#" className="read_more">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 noPaddingRight">
                      <div className="feature_img">
                        <img src="./images/home1/f1.jpg" alt="" />
                        <a
                          className="popup_video"
                          href="https://www.youtube.com/embed/LXb3EKWsInQ"
                          data-rel="lightcase"
                        >
                          <i className="magro-play-button" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <div className="feature_img">
                        <img src="./images/home1/f2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="featured_slider_item">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="featured_slider_content">
                        <a href="#" className="cats purples">
                          Health
                        </a>
                        <h2>
                          <a href="#">
                            How to Style a Choker so you Don’t look Like every.
                          </a>
                        </h2>
                        <p>
                          Donec vehicula luctus nunc. Mauris mattis auctor
                          cursus. Phasellus tellus tellus, imperdiet ut imperdie
                          sasa eiaculis a sem. We come up with revolutionary
                          ideas that bring positive changes to your instagram
                          activity!
                        </p>
                        <a href="#" className="read_more">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 noPaddingRight">
                      <div className="feature_img">
                        <img src="./images/home1/f2.jpg" alt="" />
                        <a
                          className="popup_video"
                          href="https://www.youtube.com/embed/LXb3EKWsInQ"
                          data-rel="lightcase"
                        >
                          <i className="magro-play-button" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <div className="feature_img">
                        <img src="./images/home1/f1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="featured_slider_item">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="featured_slider_content">
                        <a href="#" className="cats blues">
                          Sports
                        </a>
                        <h2>
                          <a href="#">
                            Will Smith &amp; Martin Lawr Say ‘Bad Boys For Life’
                            Smith &amp; Martin
                          </a>
                        </h2>
                        <p>
                          Mauris mattis auctor cursus. Phasellus tellus tellus,
                          imperdiet ut imperdie sasa eiaculis a sem. Donec
                          vehicula luctus nunc. We come up with revolutionary
                          ideas that bring positive changes to your instagram
                          activity!
                        </p>
                        <a href="#" className="read_more">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 noPaddingRight">
                      <div className="feature_img">
                        <img src="./images/home1/f1.jpg" alt="" />
                        <a
                          className="popup_video"
                          href="https://www.youtube.com/embed/LXb3EKWsInQ"
                          data-rel="lightcase"
                        >
                          <i className="magro-play-button" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <div className="feature_img">
                        <img src="./images/home1/f2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="featured_slider_item">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="featured_slider_content">
                        <a href="#" className="cats greens">
                          lifestyle
                        </a>
                        <h2>
                          <a href="#">
                            How to Style a Choker so you Don’t look Like every.
                          </a>
                        </h2>
                        <p>
                          Donec vehicula luctus nunc. Mauris mattis auctor
                          cursus. Phasellus tellus tellus, imperdiet ut imperdie
                          sasa eiaculis a sem. We come up with revolutionary
                          ideas that bring positive changes to your instagram
                          activity!
                        </p>
                        <a href="#" className="read_more">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 noPaddingRight">
                      <div className="feature_img">
                        <img src="./images/home1/f2.jpg" alt="" />
                        <a
                          className="popup_video"
                          href="https://www.youtube.com/embed/LXb3EKWsInQ"
                          data-rel="lightcase"
                        >
                          <i className="magro-play-button" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <div className="feature_img">
                        <img src="./images/home1/f1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="featured_slider_item">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="featured_slider_content">
                        <a href="#" className="cats purples">
                          Health
                        </a>
                        <h2>
                          <a href="#">
                            Will Smith &amp; Martin Lawr Say ‘Bad Boys For Life’
                            Smith &amp; Martin
                          </a>
                        </h2>
                        <p>
                          Donec vehicula luctus nunc. Mauris mattis auctor
                          cursus. Phasellus tellus tellus, imperdiet ut imperdie
                          sasa eiaculis a sem. We come up with revolutionary
                          ideas that bring positive changes to your instagram
                          activity!
                        </p>
                        <a href="#" className="read_more">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 noPaddingRight">
                      <div className="feature_img">
                        <img src="./images/home1/f2.jpg" alt="" />
                        <a
                          className="popup_video"
                          href="https://www.youtube.com/embed/LXb3EKWsInQ"
                          data-rel="lightcase"
                        >
                          <i className="magro-play-button" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                      <div className="feature_img">
                        <img src="./images/home1/f1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Carousel Section */}
      {/* Top Post Section */}
      <section className="comon_section">
        <div className="container">
          <div className="row top_post_cus_column">
            <div className="col-lg-8">
              <h2 className="sec_titles">
                <i />
                Weekly Top Post
              </h2>
              <div className="row">
                <div className="col-lg-6">
                  <div className="top_week_1 mb_60">
                    <div className="tw1_thumb">
                      <img src="./images/home1/top_week/7.jpg" alt="" />
                      <div className="tw1_cats">
                        <a href="#" className="cats pinks2">
                          Entertainment
                        </a>
                      </div>
                    </div>
                    <div className="tw1_details">
                      <h2>
                        <a href="#">
                          Discovering Sydney’s See Attractions line
                        </a>
                      </h2>
                      <div className="comon_meta clearfix">
                        <span className="cm_author">
                          <i className="twi-user" />
                          By<a href="#">Jawn Staff</a>
                        </span>
                        <span className="cm_date">
                          <a href="#">Nov 10, 2019</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="top_week_1 mb_60">
                    <div className="tw1_thumb">
                      <img src="./images/home1/top_week/8.jpg" alt="" />
                      <div className="tw1_cats">
                        <a href="#" className="cats pinks">
                          Fashion
                        </a>
                      </div>
                    </div>
                    <div className="tw1_details">
                      <h2>
                        <a href="#">
                          What’s Your Favourite TV Show? Take Our Poll
                        </a>
                      </h2>
                      <div className="comon_meta clearfix">
                        <span className="cm_author">
                          <i className="twi-user" />
                          By<a href="#">Jawn Staff</a>
                        </span>
                        <span className="cm_date">
                          <a href="#">Nov 11, 2019</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="top_week_1 mb_60">
                    <div className="tw1_thumb">
                      <img src="./images/home1/top_week/9.jpg" alt="" />
                      <div className="tw1_cats">
                        <a href="#" className="cats purples">
                          Health
                        </a>
                      </div>
                    </div>
                    <div className="tw1_details">
                      <h2>
                        <a href="#">Apollo Astronauts Hared Deep Radiation</a>
                      </h2>
                      <div className="comon_meta clearfix">
                        <span className="cm_author">
                          <i className="twi-user" />
                          By<a href="#">Jawn Staff</a>
                        </span>
                        <span className="cm_date">
                          <a href="#">Nov 12, 2019</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="top_week_1 mb_60">
                    <div className="tw1_thumb">
                      <img src="./images/home1/top_week/10.jpg" alt="" />
                      <div className="tw1_cats">
                        <a href="#" className="cats yellows">
                          Travel
                        </a>
                      </div>
                    </div>
                    <div className="tw1_details">
                      <h2>
                        <a href="#">Taylor Swift sent message to people who</a>
                      </h2>
                      <div className="comon_meta clearfix">
                        <span className="cm_author">
                          <i className="twi-user" />
                          By<a href="#">Jawn Staff</a>
                        </span>
                        <span className="cm_date">
                          <a href="#">Nov 13, 2019</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="top_week_1 mb_60">
                    <div className="tw1_thumb">
                      <img src="./images/home1/top_week/11.jpg" alt="" />
                      <div className="tw1_cats">
                        <a href="#" className="cats blues">
                          Sports
                        </a>
                      </div>
                    </div>
                    <div className="tw1_details">
                      <h2>
                        <a href="#">
                          What’s Your Favourite TV Show? Take Our Poll
                        </a>
                      </h2>
                      <div className="comon_meta clearfix">
                        <span className="cm_author">
                          <i className="twi-user" />
                          By<a href="#">Jawn Staff</a>
                        </span>
                        <span className="cm_date">
                          <a href="#">Nov 14, 2019</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="top_week_1 mb_60">
                    <div className="tw1_thumb">
                      <img src="./images/home1/top_week/12.jpg" alt="" />
                      <div className="tw1_cats">
                        <a href="#" className="cats reds">
                          Tech
                        </a>
                      </div>
                    </div>
                    <div className="tw1_details">
                      <h2>
                        <a href="#">
                          Discovering Sydney’s See Attractions line
                        </a>
                      </h2>
                      <div className="comon_meta clearfix">
                        <span className="cm_author">
                          <i className="twi-user" />
                          By<a href="#">Jawn Staff</a>
                        </span>
                        <span className="cm_date">
                          <a href="#">Nov 15, 2019</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt_10">
                  <div className="ads text-center">
                    <h5>advertisement</h5>
                    <a href="#">
                      <img src="./images/home1/ad2.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pad_left_25">
              <aside className="widget mag_social_widget">
                <h3 className="widget_title">
                  <span>Stay Connected</span>
                </h3>
                <div className="social_area">
                  <div className="single_social twi">
                    <a href="#">
                      <i className="twi-twitter" />
                    </a>
                    <div className="social_meta">
                      <span>36.798</span> Fans
                      <a href="#">Like</a>
                    </div>
                  </div>
                  <div className="single_social fac">
                    <a href="#">
                      <i className="twi-facebook-f" />
                    </a>
                    <div className="social_meta">
                      <span>145.519</span> Followers
                      <a href="#">Follow</a>
                    </div>
                  </div>
                  <div className="single_social you">
                    <a href="#">
                      <i className="magro-play-button" />
                    </a>
                    <div className="social_meta">
                      <span>980</span> Subscribers
                      <a href="#">Subscribe</a>
                    </div>
                  </div>
                </div>
              </aside>
              <aside className="widget mag_ads_widget">
                <div className="ads_widget">
                  <h6>advertisement</h6>
                  <a href="#">
                    <img src="./images/home1/ad3.jpg" alt="" />
                  </a>
                </div>
              </aside>
              <aside className="widget mag_modern_widget">
                <h3 className="widget_title">
                  <span>Make It Modern</span>
                </h3>
                <div className="modern_slide owl-carousel">
                  <div className="single_modern">
                    <div className="single_md_item">
                      <img src="./images/home1/m1.jpg" alt="" />
                      <a href="#">Article with a woman in red sitting</a>
                    </div>
                    <div className="single_md_item">
                      <img src="./images/home1/m2.jpg" alt="" />
                      <a href="#">Mauris mattis auctor tellus cursus</a>
                    </div>
                  </div>
                  <div className="single_modern">
                    <div className="single_md_item">
                      <img src="./images/home1/m3.jpg" alt="" />
                      <a href="#">We come up with revolutionary ideas</a>
                    </div>
                    <div className="single_md_item">
                      <img src="./images/home1/m4.jpg" alt="" />
                      <a href="#">Positive changes to your instagram</a>
                    </div>
                  </div>
                  <div className="single_modern">
                    <div className="single_md_item">
                      <img src="./images/home1/m1.jpg" alt="" />
                      <a href="#">Article with a woman in red sitting</a>
                    </div>
                    <div className="single_md_item">
                      <img src="./images/home1/m2.jpg" alt="" />
                      <a href="#">Mauris mattis auctor tellus cursus</a>
                    </div>
                  </div>
                </div>
              </aside>
              <aside className="widget mag_latest_review_widget">
                <h3 className="widget_title">
                  <span>Latest Reviews</span>
                </h3>
                <div className="lr_post_area">
                  <div className="lr_feature_post">
                    <img src="./images/home1/r1.jpg" alt="" />
                    <h4>
                      <a href="#">
                        Sate uncle Lift on Royals William win the Biggest Fans
                      </a>
                    </h4>
                    <div className="comon_meta clearfix">
                      <span className="cm_author">
                        <i className="twi-user" />
                        By<a href="#">Jawn Staff</a>
                      </span>
                      <span className="cm_date">
                        <a href="#">Nov 12, 2020</a>
                      </span>
                      <a className="comments" href="#">
                        23
                      </a>
                    </div>
                    <p>
                      Fashion week officially begins Thursday at the and while
                      some of the brightest stars in the industry unveil their
                      latest collections.
                    </p>
                  </div>
                  <div className="lr_sp">
                    <img src="./images/home1/r2.jpg" alt="" />
                    <h5>
                      <a href="#">
                        Article with a woman in red sitting and relaxing
                      </a>
                    </h5>
                    <span>
                      <a href="#">Nov 10, 2020</a>
                    </span>
                  </div>
                  <div className="lr_sp">
                    <img src="./images/home1/r3.jpg" alt="" />
                    <h5>
                      <a href="#">
                        Asus Xonar U7 sound card has a built in Headphone
                      </a>
                    </h5>
                    <span>
                      <a href="#">Nov 11, 2020</a>
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* Top Post Section */}
      {/* Top Content Section */}
      <section className="comon_section top_content_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="sec_titles white">
                <i />
                Top Content
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_tc_post">
                <img src="./images/home1/t1.jpg" alt="" />
                <a
                  className="popup_video"
                  href="https://www.youtube.com/embed/LXb3EKWsInQ"
                  data-rel="lightcase"
                >
                  <i className="magro-play-arrow" />
                </a>
                <div className="tc_content">
                  <a href="#" className="cats reds">
                    Tech
                  </a>
                  <h3>
                    <a href="#">
                      <span>Will Smith &amp; Martin Lawrene</span>{" "}
                      <span>Say ‘Bad Boys For Life’</span>
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_tc_post">
                <img src="./images/home1/t2.jpg" alt="" />
                <div className="tc_content">
                  <a href="#" className="cats blues">
                    Sports
                  </a>
                  <h3>
                    <a href="#">
                      <span>This Hilarious Cat Eats toin</span>{" "}
                      <span>Every Single Meal</span>
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_tc_post">
                <img src="./images/home1/t3.jpg" alt="" />
                <div className="tc_content">
                  <a href="#" className="cats yellows">
                    Travel
                  </a>
                  <h3>
                    <a href="#">
                      <span>Breathtaking Views Of The</span>{" "}
                      <span>Himalayas, You Will</span>
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Top Content Section */}
      {/* Ads Section */}
      <section className="comon_section ad_section_2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ads text-center">
                <a href="#">
                  <img src="./images/home1/ad.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ads Section */}
      {/* Whats New Section */}
      <section className="comon_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <h2 className="sec_titles">
                <i />
                What’s New
              </h2>
              <div className="tw3_list clearfix">
                <div className="tw3_thumb">
                  <img src="./images/home1/1.jpg" alt="" />
                </div>
                <div className="tw_3_content">
                  <a href="#" className="cats reds">
                    Tech
                  </a>
                  <h3>
                    <a href="#">13 Perfect Responses For When Someone</a>
                  </h3>
                </div>
              </div>
              <div className="tw3_list clearfix">
                <div className="tw3_thumb">
                  <img src="./images/home1/2.jpg" alt="" />
                </div>
                <div className="tw_3_content">
                  <a href="#" className="cats purples">
                    Health
                  </a>
                  <h3>
                    <a href="#">15 Unbelievable Facts About Sushi</a>
                  </h3>
                </div>
              </div>
              <div className="tw3_list clearfix">
                <div className="tw3_thumb">
                  <img src="./images/home1/3.jpg" alt="" />
                </div>
                <div className="tw_3_content">
                  <a href="#" className="cats pinks2">
                    Entertainment
                  </a>
                  <h3>
                    <a href="#">7 Simple Ways To Blow A Kiss Like</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h2 className="sec_titles">
                <i />
                Weekend Top
              </h2>
              <div className="tw3_list clearfix">
                <div className="tw3_thumb">
                  <img src="./images/home1/4.jpg" alt="" />
                </div>
                <div className="tw_3_content">
                  <a href="#" className="cats blues">
                    Sports
                  </a>
                  <h3>
                    <a href="#">15 Unbelievable Facts About Sushi</a>
                  </h3>
                </div>
              </div>
              <div className="tw3_list clearfix">
                <div className="tw3_thumb">
                  <img src="./images/home1/5.jpg" alt="" />
                </div>
                <div className="tw_3_content">
                  <a href="#" className="cats pinks">
                    Fashion
                  </a>
                  <h3>
                    <a href="#">What’s Hot &amp; What’s 2018 TV Shows</a>
                  </h3>
                </div>
              </div>
              <div className="tw3_list clearfix">
                <div className="tw3_thumb">
                  <img src="./images/home1/6.jpg" alt="" />
                </div>
                <div className="tw_3_content">
                  <a href="#" className="cats yellows">
                    Travel
                  </a>
                  <h3>
                    <a href="#">Habits Like Everyone Else’s?</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="editor_choice_area">
                <h2 className="sec_titles white">
                  <i />
                  Editor's Choice
                </h2>
                <div className="editor_slide">
                  <div className="sinlge_edit_item">
                    <div className="edit_thumb">
                      <img src="./images/home1/e1.jpg" alt="" />
                      <a
                        className="popup_video"
                        href="https://www.youtube.com/embed/LXb3EKWsInQ"
                        data-rel="lightcase"
                      >
                        <i className="magro-play-arrow" />
                      </a>
                    </div>
                    <div className="edit_content">
                      <h4>
                        <a href="#">But Pizza For Every Single Meal</a>
                      </h4>
                      <a className="ed_date" href="#">
                        Nov 10, 2020
                      </a>
                    </div>
                  </div>
                  <div className="sinlge_edit_item">
                    <div className="edit_thumb">
                      <img src="./images/home1/e2.jpg" alt="" />
                      <a
                        className="popup_video"
                        href="https://www.youtube.com/embed/LXb3EKWsInQ"
                        data-rel="lightcase"
                      >
                        <i className="magro-play-arrow" />
                      </a>
                    </div>
                    <div className="edit_content">
                      <h4>
                        <a href="#">You Will Want To Forget ASAP</a>
                      </h4>
                      <a className="ed_date" href="#">
                        Nov 11, 2020
                      </a>
                    </div>
                  </div>
                  <div className="sinlge_edit_item">
                    <div className="edit_thumb">
                      <img src="./images/home1/e3.jpg" alt="" />
                      <a
                        className="popup_video"
                        href="https://www.youtube.com/embed/LXb3EKWsInQ"
                        data-rel="lightcase"
                      >
                        <i className="magro-play-arrow" />
                      </a>
                    </div>
                    <div className="edit_content">
                      <h4>
                        <a href="#">Ways To Blow A Kiss Like A Pro</a>
                      </h4>
                      <a className="ed_date" href="#">
                        Nov 12, 2020
                      </a>
                    </div>
                  </div>
                  <div className="sinlge_edit_item">
                    <div className="edit_thumb">
                      <img src="./images/home1/e4.jpg" alt="" />
                      <a
                        className="popup_video"
                        href="https://www.youtube.com/embed/LXb3EKWsInQ"
                        data-rel="lightcase"
                      >
                        <i className="magro-play-arrow" />
                      </a>
                    </div>
                    <div className="edit_content">
                      <h4>
                        <a href="#">Asia You’ve Probaly Never</a>
                      </h4>
                      <a className="ed_date" href="#">
                        Nov 13, 2020
                      </a>
                    </div>
                  </div>
                  <div className="sinlge_edit_item">
                    <div className="edit_thumb">
                      <img src="./images/home1/e1.jpg" alt="" />
                      <a
                        className="popup_video"
                        href="https://www.youtube.com/embed/LXb3EKWsInQ"
                        data-rel="lightcase"
                      >
                        <i className="magro-play-arrow" />
                      </a>
                    </div>
                    <div className="edit_content">
                      <h4>
                        <a href="#">But Pizza For Every Single Meal</a>
                      </h4>
                      <a className="ed_date" href="#">
                        Nov 10, 2020
                      </a>
                    </div>
                  </div>
                  <div className="sinlge_edit_item">
                    <div className="edit_thumb">
                      <img src="./images/home1/e2.jpg" alt="" />
                      <a
                        className="popup_video"
                        href="https://www.youtube.com/embed/LXb3EKWsInQ"
                        data-rel="lightcase"
                      >
                        <i className="magro-play-arrow" />
                      </a>
                    </div>
                    <div className="edit_content">
                      <h4>
                        <a href="#">You Will Want To Forget ASAP</a>
                      </h4>
                      <a className="ed_date" href="#">
                        Nov 11, 2020
                      </a>
                    </div>
                  </div>
                  <div className="sinlge_edit_item">
                    <div className="edit_thumb">
                      <img src="./images/home1/e3.jpg" alt="" />
                      <a
                        className="popup_video"
                        href="https://www.youtube.com/embed/LXb3EKWsInQ"
                        data-rel="lightcase"
                      >
                        <i className="magro-play-arrow" />
                      </a>
                    </div>
                    <div className="edit_content">
                      <h4>
                        <a href="#">Ways To Blow A Kiss Like A Pro</a>
                      </h4>
                      <a className="ed_date" href="#">
                        Nov 12, 2020
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Whats New Section */}
      {/* Instagram Section */}
      <section className="mag_instagram_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3>
                <img src="./images/instagram.png" alt="" />
                @Magazine Images
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 noPadding">
              <div className="my_instagram">
                <div className="instagram_img">
                  <a href="#">
                    <img src="./images/instagram/1.jpg" alt="" />
                  </a>
                </div>
                <div className="instagram_img">
                  <a href="#">
                    <img src="./images/instagram/2.jpg" alt="" />
                  </a>
                </div>
                <div className="instagram_img">
                  <a href="#">
                    <img src="./images/instagram/3.jpg" alt="" />
                  </a>
                </div>
                <div className="instagram_img">
                  <a href="#">
                    <img src="./images/instagram/4.jpg" alt="" />
                  </a>
                </div>
                <div className="instagram_img">
                  <a href="#">
                    <img src="./images/instagram/5.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Instagram Section */}
      {/* Footer Section */}
      <footer className="footer_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <aside className="widget">
                <h2 className="widget_title">
                  <i />
                  Editor's Picks
                </h2>
                <div className="sf_s1_post">
                  <img src="./images/home1/7.jpg" alt="" />
                  <h5>
                    <a href="#">The problem might be your health</a>
                  </h5>
                  <a className="sf_date" href="#">
                    4 days ago
                  </a>
                </div>
                <div className="sf_s1_post">
                  <img src="./images/home1/8.jpg" alt="" />
                  <h5>
                    <a href="#">Habits Like Everyone Else’s?</a>
                  </h5>
                  <a className="sf_date" href="#">
                    4 days ago
                  </a>
                </div>
                <div className="sf_s1_post">
                  <img src="./images/home1/9.jpg" alt="" />
                  <h5>
                    <a href="#">The problem might be your health</a>
                  </h5>
                  <a className="sf_date" href="#">
                    4 days ago
                  </a>
                </div>
              </aside>
            </div>
            <div className="col-lg-4 col-md-4">
              <aside className="widget">
                <h2 className="widget_title">
                  <i />
                  Latest Articles
                </h2>
                <div className="sf_s1_post">
                  <img src="./images/home1/10.jpg" alt="" />
                  <h5>
                    <a href="#">You Will Want To Forget ASAP</a>
                  </h5>
                  <a className="sf_date" href="#">
                    4 days ago
                  </a>
                </div>
                <div className="sf_s1_post">
                  <img src="./images/home1/11.jpg" alt="" />
                  <h5>
                    <a href="#">Habits Like Everyone Else’s?</a>
                  </h5>
                  <a className="sf_date" href="#">
                    4 days ago
                  </a>
                </div>
                <div className="sf_s1_post">
                  <img src="./images/home1/12.jpg" alt="" />
                  <h5>
                    <a href="#">The problem might be your health</a>
                  </h5>
                  <a className="sf_date" href="#">
                    4 days ago
                  </a>
                </div>
              </aside>
            </div>
            <div className="col-lg-4 col-md-4">
              <aside className="widget widget_categories">
                <h2 className="widget_title">
                  <i />
                  Popular Categories
                </h2>
                <ul>
                  <li>
                    <a href="#">Architecture</a>26
                  </li>
                  <li>
                    <a href="#">New look 2015</a>16
                  </li>
                  <li>
                    <a href="#">Gadgets</a>14
                  </li>
                  <li>
                    <a href="#">Mobile and Phones</a>12
                  </li>
                  <li>
                    <a href="#">Recipes</a>10
                  </li>
                  <li>
                    <a href="#">Decorating</a>8
                  </li>
                  <li>
                    <a href="#">Interiors</a>6
                  </li>
                  <li>
                    <a href="#">Street fashion</a>2
                  </li>
                </ul>
              </aside>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="f_bar" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <aside className="widget widget_about">
                <div className="about_magro">
                  <a href="index.html">
                    <img src="./images/logo2.png" alt="Magro" />
                  </a>
                  <p>
                    Magro is your news, entertainment, music &amp; fashion
                    website. We provide you with the latest breaking news and
                    videos straight from the entertainment industry.
                  </p>
                  <h4>
                    Contact Us : <span>info@youremail.com</span>
                  </h4>
                </div>
              </aside>
            </div>
            <div className="col-lg-5 col-md-5">
              <aside className="widget">
                <div className="mailchimp_form">
                  <form action="#" method="post">
                    <input
                      type="email"
                      name="email"
                      placeholder="your email address"
                    />
                    <input type="submit" defaultValue="Subcribe" />
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section */}
      {/* Copyright Section */}
      <section className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="copyies">
                © Magro. All rights reserved 2020.
                <a href="http://themewar.com">Themewar.com</a>
              </div>
              <div className="f_menu clearfix">
                <a href="#">Pricacy</a>
                <a href="#">Advertisement</a>
                <a href="#">About us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Copyright Section */}
      {/* Bact To Top */}
      <a href="#" id="backtotop">
        <i className="twi-angle-double-up2" />
      </a>
      {/* Bact To Top */}
      {/* Include All JS */}
    </>
  );
}
