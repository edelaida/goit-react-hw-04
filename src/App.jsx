import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPictues() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://api.unsplash.com/photos/?client_id=soeSXALL2rbtm5QVQFKtx_SDCoa5F0QUDDkb61eIncI"
        );
        console.log(data);
        setPictures(data.pictures);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPictues();
  }, []);
  return (
    <div>
      <h1>goit-react-hw-04</h1>
      {loading && (
        <div>
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      {error && <p>oops. the request is not correct.</p>}
      <ul>
        {pictures &&
          pictures.length > 0 &&
          pictures.map((picture) => {
            return (
              <li key={picture.id}>
                <img src={picture.urls.small} alt={picture.alt_description} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
