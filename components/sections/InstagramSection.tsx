import { NextPage } from "next";

interface Props {}

const InstagramSection: NextPage<Props> = ({}) => {
  return (
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
  );
};

export default InstagramSection;
