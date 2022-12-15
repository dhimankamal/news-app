import { NextPage } from "next";

interface Props {}

const TopContentSection: NextPage<Props> = ({}) => {
  return (
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
  );
};

export default TopContentSection;
