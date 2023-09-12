import React, { useState } from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../AllUserRedux/store";
function UserPost() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.value);
  console.log(data);
  const [Post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    experience: "",
    address: "",
    back_licensed: "",
    front_licensed: "",
    more_details: "",
  });
  let value, name;
  const handlechnage = (event) => {
    name = event.target.name;
    value = event.target.value;
    setPost({ ...Post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, experience, address } = Post;
    dispatch(add({ title, description, experience, address }));
    console.log(data);
  };
  // useEffect(() => {
  //   console.log(data); // This will log the updated data when it changes.
  // }, []);
  return (
    <div className="container">
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
              <h1 style={{ color: "rgb(253, 53, 53)", fontFamily: "fantasy" }}>
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
                backgroundColor: "rgb(12, 155, 79)",
                padding: "5rem .8rem",
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
                  onChange={(e) => handlechnage(e)}
                  name="title"
                  type="text"
                  className="form-control"
                  id="exampleInputNumber"
                  placeholder="Enter your service title..........."
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
                  maxLength={500}
                  onChange={(e) => handlechnage(e)}
                  name="description"
                  type="text"
                  className="form-control"
                  id="exampleInputNumber"
                  placeholder="You have to provide the complete description about your service........"
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
                  Phone Number
                </label>
                <input
                  onChange={(e) => handlechnage(e)}
                  name="number"
                  type="number"
                  className="form-control"
                  id="exampleInputNumber"
                  placeholder="Number"
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
                  htmlFor="exampleInputImage"
                >
                  Image
                </label>
                <input
                  onChange={(e) => handlechnage(e)}
                  name="image"
                  type="file"
                  className="form-control"
                  id="exampleInputImage"
                  placeholder="Image"
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
                  Years Of Experience
                </label>
                <input
                  onChange={(e) => handlechnage(e)}
                  name="experience"
                  type="number"
                  className="form-control"
                  id="exampleInputNumber"
                  placeholder="Enter your total years of experience in this field..."
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
                  Permanent Address
                </label>
                <input
                  onChange={(e) => handlechnage(e)}
                  name="address"
                  type="text"
                  className="form-control"
                  id="exampleInputNumber"
                  placeholder="Enter your exact location through which customers contact you..........."
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
                  htmlFor="exampleInputImage"
                >
                  Front Licensed
                </label>
                <input
                  onChange={(e) => handlechnage(e)}
                  name="front_licensed"
                  type="file"
                  className="form-control"
                  id="exampleInputImage"
                  placeholder="Enter front side image of your licensed "
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
                  htmlFor="exampleInputImage"
                >
                  Back Licensed
                </label>
                <input
                  onChange={(e) => handlechnage(e)}
                  name="back_licensed"
                  type="file"
                  className="form-control"
                  id="exampleInputImage"
                  placeholder="Enter back side image of your licensed"
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
                  Extra Details
                </label>
                <textarea
                  maxLength={500}
                  name="more_details"
                  type="text"
                  className="form-control"
                  id="exampleInputNumber"
                  placeholder="If you have more details about your service you can enter here it's will provide if customer interested........"
                />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  style={{ width: "60%" }}
                  type="submit"
                  className="btn btn-primary my-4 text-center"
                >
                  Post Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPost;
