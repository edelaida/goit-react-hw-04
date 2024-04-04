import { useState } from "react";
import { useEffect } from "react";

import { requestPicturesQuery } from "./components/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchPicturesQuery() {
      try {
        setLoading(true);
        const data = await requestPicturesQuery(query, page);
        setPictures(data.results);
        setPictures((prev) => [...prev, ...data.results]);
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
    setPictures([]);
    setPage(1);
  };

  const onSearchPage = () => {
    setPage((page) => page + 1);
  };

  return (
    <div>
      <ImageModal />
      <SearchBar onSearchBar={onSearchBar} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {pictures && <ImageGallery pictures={pictures} />}
      {query.length !== 0 && <LoadMoreBtn onSearchPage={onSearchPage} />}
    </div>
  );
}

export default App;
