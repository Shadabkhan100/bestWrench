import React, { useState } from "react";
import MainNavbar from "../OurServices/navbar";

import { Carousel, message } from "antd";
import Footer from "../footer";
import { addJob } from "../AllUserRedux/store";
import { useDispatch } from "react-redux";
function JobPost() {
  const dispatch = useDispatch();
  const [Post, setPost] = useState({
    title: "",
    description: "",
    expertise: "",
    duration: "",
    location: "",
  });
  let value, name;
  const handlechnage = (event) => {
    name = event.target.name;
    value = event.target.value;
    setPost({ ...Post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Post);
    const { title, description, expertise, duration, location } = Post;
    dispatch(addJob({ title, description, expertise, duration, location }));

    message.success("Job Posted");
    setPost({
      title: "",
      description: "",
      expertise: "",
      duration: "",
      location: "",
    });
  };
  // useEffect(() => {
  //   console.log(data); // This will log the updated data when it changes.
  // }, []);
  return (
    <>
      <MainNavbar />

      <Carousel id="header-carousel" autoplay>
        <div className="carousel-item active" style={{ height: "22rem" }}>
          <img
            className="w-100"
            style={{ height: "37rem" }}
            src="/headerImage1.jpg"
            alt="loading"
          />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="p-3" style={{ maxWidth: "700px" }}>
              <h1
                className="display-3  mb-4 animated slideInDown"
                style={{ fontWeight: "bold", color: "green" }}
              >
                Post The Job And Get Fast Service
              </h1>
              <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown ">
                Post Job On Best Wrench
              </h6>
              <button className="btn btn-success animated slideInRight mx-2">
                Get Service
              </button>
              <button className="btn btn-success  animated slideInRight mx-2 my-2">
                Give Service
              </button>
            </div>
          </div>
        </div>
      </Carousel>

      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-sm-13">
            <div className="card p-4" style={{ borderRadius: "20px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <h1
                  style={{ color: "rgb(253, 53, 53)", fontFamily: "fantasy" }}
                >
                  Post On
                </h1>
                <img
                  style={{ height: "6rem", width: "10rem" }}
                  className="imagePost"
                  src="/logo.png"
                  alt="loading"
                ></img>
              </div>
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "rgb(0, 0, 102)",
                  padding: "5rem",
                  borderRadius: "20px",
                }}
              >
                <div className="form-group">
                  <label
                    className="my-3"
                    style={{
                      fontSize: "1.5rem",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    htmlFor="exampleInputDescription"
                  >
                    Title
                  </label>
                  <input
                    value={Post.title}
                    onChange={(e) => handlechnage(e)}
                    name="title"
                    type="text"
                    className="form-control"
                    id="exampleInputNumber"
                    placeholder="Enter your job title..........."
                  />
                </div>
                <div className="form-group">
                  <label
                    className="my-3"
                    style={{
                      fontSize: "1.5rem",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    htmlFor="exampleInputDescription"
                  >
                    Description
                  </label>
                  <textarea
                    value={Post.description}
                    maxLength={500}
                    onChange={(e) => handlechnage(e)}
                    name="description"
                    type="text"
                    className="form-control"
                    id="exampleInputNumber"
                    placeholder="You have to provide the complete description about your job........"
                  />
                </div>

                <div className="form-group">
                  <label
                    className="my-3"
                    style={{
                      fontSize: "1.5rem",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    htmlFor="exampleInputNumber"
                  >
                    Expertise
                  </label>
                  <input
                    value={Post.expertise}
                    onChange={(e) => handlechnage(e)}
                    name="expertise"
                    type="text"
                    className="form-control"
                    id="exampleInputNumber"
                    placeholder="Enter the required expertise for your job"
                  />
                </div>

                <div className="form-group">
                  <label
                    className="my-3"
                    style={{
                      fontSize: "1.5rem",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    htmlFor="exampleInputNumber"
                  >
                    Duration
                  </label>
                  <input
                    value={Post.duration}
                    onChange={(e) => handlechnage(e)}
                    name="duration"
                    type="number"
                    className="form-control"
                    id="exampleInputNumber"
                    placeholder="Enter your total duration for your job..."
                  />
                </div>
                <div className="form-group">
                  <label
                    className="my-3"
                    style={{
                      fontSize: "1.5rem",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    htmlFor="exampleInputDescription"
                  >
                    Location
                  </label>
                  <input
                    value={Post.location}
                    onChange={(e) => handlechnage(e)}
                    name="location"
                    type="text"
                    className="form-control"
                    id="exampleInputNumber"
                    placeholder="Enter your exact location through which customers contact you..........."
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    style={{ width: "60%" }}
                    type="submit"
                    className="btn btn-success my-4 text-center"
                  >
                    Post Job
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JobPost;
