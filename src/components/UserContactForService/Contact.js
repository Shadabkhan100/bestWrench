import React from "react";
import { useParams } from "react-router-dom";
import MainNavbar from "../OurServices/navbar";
import ChatClient from "./chatClient";

function Contact() {
  const { userName } = useParams();
  const targetUser = userName;
  return (
    <div>
      <MainNavbar />

      <ChatClient userName={targetUser} />
    </div>
  );
}

export default Contact;
