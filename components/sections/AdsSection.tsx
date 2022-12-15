import { NextPage } from "next";

interface Props {
  type: "primary" | "secondary";
}

const AdsSection: NextPage<Props> = ({ type }) => {
  return (
    <section className={`comon_section ${type === 'primary'?'ad_section':'ad_section_2'} `}>
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
  );
};

export default AdsSection;
