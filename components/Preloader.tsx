import { NextPage } from "next";

interface Props {}

const Preloader: NextPage<Props> = ({}) => {
  return (
    <div className="preloader text-center">
      <div className="la-ball-scale-multiple la-2x">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Preloader;
