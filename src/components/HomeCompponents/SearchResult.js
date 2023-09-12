import React from "react";

function SearchResults({ data }) {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
