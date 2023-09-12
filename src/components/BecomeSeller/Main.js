import React, { useState } from "react";
import MainNavbar from "../OurServices/navbar";
import SellerHeader from "./SellerHeader";
import AvailableServices from "./AvailableServices";
import LoadingBar from "react-top-loading-bar";
import Scroller from "./Scroller";

function BecomeSeller() {
  const [Progress, setProgress] = useState(30);

  setTimeout(() => {
    setProgress(100);
  }, 3000);
  return (
    <div>
      <MainNavbar />
      <LoadingBar color="red" progress={Progress} height={4} />;
      <SellerHeader />
      {/* <Scroller /> */}
      <AvailableServices />
    </div>
  );
}

export default BecomeSeller;
