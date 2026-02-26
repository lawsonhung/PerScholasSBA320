import { useState, type ChangeEvent, type SubmitEventHandler } from "react";
import "./SearchBar.css";
import axios from "axios";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (e: ChangeEvent) => {
    setSearchTerm((e.target as HTMLInputElement).value);
  }

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const url = `https://api.spotify.com/v1/search?q=${searchTerm}&type=album,artist,playlist,track,show,episode,audiobook`;
    const res = await axios.get(url);

    console.log(res.data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchTerm"
        value={searchTerm}
        onChange={handleChange}
      />
      <input type="submit" value="Search" />
    </form>
  )
}

export default SearchBar;