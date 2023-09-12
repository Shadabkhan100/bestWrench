import "./App.css";
import NotFound from "./components/ErrorPage/NotFound";
import Main from "./components/HomeCompponents/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/OurServices/Services";
import { useState, useEffect, createContext } from "react";
import Loading from "./components/loading/loading";
import BecomeSeller from "./components/BecomeSeller/Main";
import PostService from "./components/postService/PostService";
import Contact from "./components/UserContactForService/Contact";
import Profile from "./components/ProfilePage/MainProfile";
import About from "./components/BecomeSeller/ExtraCom/about";
import Privacy from "./components/BecomeSeller/ExtraCom/privecy";
import Success from "./components/BecomeSeller/ExtraCom/Success";
import TopClient from "./components/BecomeSeller/ExtraCom/topClient";
import Jobs from "./components/AllJobs/jobs";
// import MainNavbar from "./components/OurServices/navbar";
import JobPost from "./components/AllJobs/JobPost";
import JobDetails from "./components/AllJobs/JobDetails";

const myContext = createContext();
function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <myContext.Provider value={{ IsLoggedIn, setIsLoggedIn }}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Router>
              <Routes>
                <Route exact path="/" element={<Main />}></Route>
                <Route exact path="*" element={<NotFound />}></Route>
                <Route
                  path="/MainService/:index"
                  element={<Services />}
                ></Route>
                <Route path="/Become_Seller" element={<BecomeSeller />}></Route>
                <Route
                  path="/PostService/:PostTitle"
                  element={<PostService />}
                ></Route>
                <Route path="/contact/:userName" element={<Contact />}></Route>
                <Route path="/Profile/:userName" element={<Profile />}></Route>
                <Route path="/about/" element={<About />}></Route>
                <Route path="/contact" element={<Success />}></Route>
                <Route path="/topClient" element={<TopClient />}></Route>
                <Route path="/privacy" element={<Privacy />}></Route>
                <Route path="/jobs" element={<Jobs />}></Route>
                <Route path="/postJob" element={<JobPost />}></Route>
                <Route
                  path="/jobApplay/:title"
                  element={<JobDetails />}
                ></Route>
              </Routes>
            </Router>
          </>
        )}
      </myContext.Provider>
    </div>
  );
}
export { myContext };
export default App;
