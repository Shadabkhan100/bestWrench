import React, { useState } from "react";
import MainNavbar from "./navbar";
import Header from "./header";
import PopulerServces from "./populerServces";

import Navbar from "./onScrollNav";
import Footer from "../footer";
import LoadingBar from "react-top-loading-bar";
import AboutUs from "./whychooseUs";
import ProgressCircle from "../progress/ProgressCircle";

function Main() {
  const [Progress, setProgress] = useState(30);
  setTimeout(() => {
    setProgress(100);
  }, 3000);
  document.title = "Best_Wrench Home";
  return (
    <div>
      <LoadingBar color="red" progress={Progress} height={5} />

      <MainNavbar />

      <Navbar key="uniqueNavbarKey" />

      <Header />

      <ProgressCircle
        totalClients={100} // Replace with your actual data
        completedProjects={75} // Replace with your actual data
        acceptedProjects={90} // Replace with your actual data
      />

      <PopulerServces />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Main;
