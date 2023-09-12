import React, { useContext } from "react";
import NavBar from "./profileNavbar";
import ProfileDashBoard from "./ProfileDashBoard";
import { useParams } from "react-router-dom";
import { myContext } from "../../App";
import { useNavigate } from "react-router-dom";
function MainProfile() {
  const navigate = useNavigate();
  const a = useContext(myContext);
  let LoggedIn = a.IsLoggedIn;
  if (LoggedIn === true) {
    navigate("/");
  }
  const { userName } = useParams();
  return (
    <div>
      <NavBar />
      <ProfileDashBoard userName={userName} />
    </div>
  );
}

export default MainProfile;
