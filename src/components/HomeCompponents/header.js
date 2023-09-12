import React, { useState } from "react";
import { Input, Button } from "antd";
import "../style/header.css";
import { SearchOutlined } from "@ant-design/icons";
import TrustedBy from "./trustedBy";
import { NavLink } from "react-router-dom";
import jsonData from "../services.json";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const handleSearch = (query) => {
    const filtered = jsonData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query); // Update suggestions as the user types
  };

  return (
    <>
      <div className="header">
        <div className="Header">
          <div className="title" style={{ marginTop: "5rem" }}>
            <h1 className="my-4 blockquote">Find the right </h1>
            <h1 style={{ fontFamily: "serif" }}>Mechanics </h1>
            <h3> service, right away</h3>
            <Input
              placeholder="Search For service"
              className="search my-4"
              style={{ fontSize: "1.5rem" }}
              suffix={
                <SearchOutlined
                  style={{
                    color: "green",
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSearch(searchQuery)}
                  dleSearch
                  when
                  the
                  search
                  icon
                  is
                  clicked
                />
              }
              value={searchQuery}
              onChange={handleInputChange} // Update searchQuery state as the user types
            />

            {suggestions.length > 0 && (
              <div className="suggestions">
                <h3 style={{ color: "black" }}>Suggestions:</h3>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    listStyle: "none",
                  }}
                >
                  {searchQuery !== "" &&
                    suggestions.map((item) => (
                      <li key={item.id}>
                        <NavLink
                          to="/Become_Seller"
                          style={{
                            color: "blue",
                            margin: "1rem",
                            listStyle: "none",
                          }}
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* Conditionally render the SearchResults component */}
            {/* <div style={{ display: "flex" }}>
              {searchQuery && <SearchResults data={jsonData} />}
            </div> */}

            <div
              style={{
                display:
                  suggestions.length > 0 && searchQuery !== "" ? "none" : "",
              }}
            >
              <Button style={{ height: "100%" }} className="mx-1 my-2">
                <NavLink
                  to={"/Become_Seller"}
                  style={{ padding: "3rem 2rem", fontSize: "1.3rem" }}
                >
                  Mechanics
                </NavLink>
              </Button>
              <Button style={{ height: "100%" }} className="mx-1 my-2">
                <NavLink
                  to={"/Become_Seller"}
                  style={{ padding: "3rem 2rem", fontSize: "1.3rem" }}
                >
                  Millwrights
                </NavLink>
              </Button>

              <Button style={{ height: "100%" }} className="mx-1 my-2">
                <NavLink
                  to={"/Become_Seller"}
                  style={{ padding: "3rem 2rem", fontSize: "1.3rem" }}
                >
                  Welders
                </NavLink>
              </Button>
              <Button style={{ height: "100%" }} className="mx-1 my-2">
                <NavLink
                  to={"/Become_Seller"}
                  style={{ padding: "3rem 2rem", fontSize: "1.3rem" }}
                >
                  Plumber
                </NavLink>
              </Button>
              <Button style={{ height: "100%" }} className="mx-1 my-2">
                <NavLink
                  to={"/Become_Seller"}
                  style={{ padding: "3rem 2rem", fontSize: "1.3rem" }}
                >
                  Electricians
                </NavLink>
              </Button>

              <Button style={{ height: "100%" }} className="mx-1 my-2">
                <NavLink
                  to={"/Become_Seller"}
                  style={{ padding: "3rem 2rem", fontSize: "1.3rem" }}
                >
                  HVAC
                </NavLink>
              </Button>
            </div>
          </div>

          <div className="sider">
            <div className="image"></div>
          </div>
        </div>
        <TrustedBy />
      </div>
    </>
  );
}

export default Header;
