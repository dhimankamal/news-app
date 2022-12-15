import { NextPage } from "next";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <>
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
    </>
  );
};

export default Footer;
