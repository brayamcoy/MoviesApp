import React, { useState, useEffect } from "react";

// Components
import SidebarLayout from "../components/SidebarLayout";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

// Utils
import { api } from "../config/utils";

export default function Home() {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const [genres, setGenres] = useState([]);
  const [usedSearch, setusedSearch] = useState(false);

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  const getMovies = () => {
    fetch(api.home)
      .then((response) => response.json())
      .then((myJson) => {
        setData(myJson.results);
      })
      .catch((error) => console.log(error));
  };

  const getGenres = () => {
    fetch(api.genres)
      .then((response) => response.json())
      .then((myJson) => {
        setGenres([...myJson.genres, { id: 0, name: "All" }]);
      })
      .catch((error) => console.log(error));
  };

  const handleResults = (results) => {
    setusedSearch(true);
    setResults(results);
  };

  const renderResults = () => {
    return <Container results={results} search={true} genres={genres} />;
  };

  return (
    <SidebarLayout>
      <div class="main">
        <Navbar onResults={handleResults} />
        {usedSearch ? (
          renderResults()
        ) : data.length > 0 ? (
          <Container data={data} search={false} genres={genres} />
        ) : (
          <Loading />
        )}
      </div>
    </SidebarLayout>
  );
}
