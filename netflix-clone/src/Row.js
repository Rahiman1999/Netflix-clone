import React, { useState, useEffect } from "react";
import axios from "./axious";
import request from "./request";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchurl }) {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(fetchurl);
      console.log(requests.data.results);
      return requests;
    }
    fetchData();
  }, [fetchurl]);
  console.table(movie);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movie.map((movies) => (
          <img src={movies.poster_path} alt={movies.name} />
        ))}
      </div>
    </div>
  );
}
export default Row;
