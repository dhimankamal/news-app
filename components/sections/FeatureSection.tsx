import { NextPage } from "next";

interface Props {}

const FeatureSection: NextPage<Props> = ({}) => {
  return (
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
  );
};

export default FeatureSection;
