import { NextPage } from 'next'

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return   <header className="header_01">
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
}

export default Navbar