import { NextPage } from "next";

interface Props {}

const TopBar: NextPage<Props> = ({}) => {
  return (
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
  );
};

export default TopBar;
