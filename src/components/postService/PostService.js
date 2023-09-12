import React, { useState } from "react";
import Navbar from "./postingNavbar";
import { useParams } from "react-router-dom";
import Header from "./header";
import LoadingBar from "react-top-loading-bar";
import UserPost from "./userPost";
import Footer from "../footer";

export default function PostService() {
  const [Progress, setProgress] = useState(30);

  setTimeout(() => {
    setProgress(100);
  }, 3000);
  const { PostTitle } = useParams();
  return (
    <div>
      <Navbar PostTitle={PostTitle} />
      <LoadingBar color="red" progress={Progress} height={12} />
      <Header PostTitle={PostTitle} />
      <h1 style={{ marginTop: "-6rem" }} className="text-center">
        Post Service in {PostTitle}
      </h1>
      <UserPost />
      <Footer />
    </div>
  );
}
