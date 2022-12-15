import { NextPage } from "next";

interface Props {}

const TopPostSection: NextPage<Props> = ({}) => {
  return (
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
  );
};

export default TopPostSection;
