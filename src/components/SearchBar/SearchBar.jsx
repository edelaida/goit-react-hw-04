import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSearchBar }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    onSearchBar(name);
    form.reset();
  };

  const notify = () => toast("Please enter search term!");

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new pictures</h2>
      <input type="text" name="name" placeholder="Search name..." />
      <button onClick={notify} type="submit">
        ▶ Serch new pictures
      </button>
      <Toaster />
    </form>
  );
};

export default SearchBar;
