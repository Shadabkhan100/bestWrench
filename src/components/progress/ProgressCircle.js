import React, { useEffect, useState } from "react";
import { Progress, Card } from "antd";
import "./ProgressCircle.css"; // Create and import your custom CSS file for styling

function ProgressCircle(props) {
  const { totalClients, completedProjects, acceptedProjects } = props;
  const [completedProgress, setCompletedProgress] = useState(0);
  const [acceptedProgress, setAcceptedProgress] = useState(0);
  const [totalProgress, setTotalProgress] = useState(0);

  useEffect(() => {
    // Create intervals to increment progress values
    const completedInterval = setInterval(() => {
      if (completedProgress < completedProjects) {
        setCompletedProgress((prev) => prev + 1);
      }
    }, 100);

    const acceptedInterval = setInterval(() => {
      if (acceptedProgress < acceptedProjects) {
        setAcceptedProgress((prev) => prev + 1);
      }
    }, 100);

    const totalInterval = setInterval(() => {
      if (totalProgress < totalClients) {
        setTotalProgress((prev) => prev + 1);
      }
    }, 100);

    // Clear intervals when the component unmounts
    return () => {
      clearInterval(completedInterval);
      clearInterval(acceptedInterval);
      clearInterval(totalInterval);
    };
  }, [
    completedProgress,
    acceptedProgress,
    totalProgress,
    completedProjects,
    acceptedProjects,
    totalClients,
  ]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Card>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {" "}
            <h1
              className="text-center"
              style={{ color: "blue", fontFamily: "cursive", margin: "auto" }}
            >
              Completed Projects
            </h1>
            <Progress
              style={{ margin: "auto" }}
              size={200}
              type="circle"
              percent={(completedProgress / totalClients) * 100}
              format={() => (
                <div className="progress-content">
                  <span>{completedProgress}</span>
                  <p style={{ fontSize: "1.5rem", margin: "auto" }}>
                    Completed Projects
                  </p>
                </div>
              )}
            />
            <img
              style={{ margin: "auto" }}
              alt="loading"
              src="/images4.jpg"
            ></img>
          </div>
        </Card>

        <Card>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <h1
              className="text-center"
              style={{ color: "blue", fontFamily: "cursive", margin: "auto" }}
            >
              Accepted Projects
            </h1>
            <Progress
              style={{ margin: "auto" }}
              size={200}
              type="circle"
              percent={(acceptedProgress / totalClients) * 100}
              format={() => (
                <div className="progress-content">
                  <span>{acceptedProgress}</span>
                  <p style={{ fontSize: "1.5rem" }}>
                    Accepted <br></br> Projects
                  </p>
                </div>
              )}
            />

            <img
              style={{ margin: "auto" }}
              alt="loading"
              src="/image2.jpg"
            ></img>
          </div>
        </Card>

        <Card>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <h1
              className="text-center "
              style={{
                color: "rgb(0, 156, 21)",
                fontFamily: "cursive",
                margin: "auto",
              }}
            >
              Total Projects
            </h1>
            <Progress
              style={{ margin: "auto" }}
              className="mx-4"
              size={200}
              type="circle"
              percent={(totalProgress / totalClients) * 100}
              format={() => (
                <div className="progress-content">
                  <span>{totalProgress}</span>
                  <p style={{ fontSize: "1.5rem" }}>Total Clients</p>
                </div>
              )}
            />

            <img
              style={{ margin: "auto" }}
              alt="loading"
              src="/image3.jpg"
            ></img>
          </div>
        </Card>
      </div>
      <h1 className="text-center my-2 " style={{ fontFamily: "sans-serif" }}>
        Our Populer Services
      </h1>
    </>
  );
}

export default ProgressCircle;
