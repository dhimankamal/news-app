import { NextPage } from "next";

interface Props {}

const BottomBar: NextPage<Props> = ({}) => {
  return (
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
  );
};

export default BottomBar;
