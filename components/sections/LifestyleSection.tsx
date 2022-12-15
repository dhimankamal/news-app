import { NextPage } from "next";

interface Props {}

const LifestyleSection: NextPage<Props> = ({}) => {
  return (
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
  );
};

export default LifestyleSection;
