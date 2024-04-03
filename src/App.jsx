import { useState } from "react";
import { useEffect } from "react";

import { requestPictures, requestPicturesQuery } from "./components/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchPictues() {
      try {
        setLoading(true);
        const data = await requestPictures();
        console.log(data);
        setPictures(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPictues();
  }, []);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchPicturesQuery() {
      try {
        setLoading(true);
        const data = await requestPicturesQuery(query, page);
        setPictures(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPicturesQuery();
  }, [query, page]);

  const onSearchBar = (name) => {
    setQuery(name);
  };

  const onSearchPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar onSearchBar={onSearchBar} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {pictures && <ImageGallery pictures={pictures} />}
      <LoadMoreBtn onSearchPage={onSearchPage} />
    </div>
  );
}

export default App;
