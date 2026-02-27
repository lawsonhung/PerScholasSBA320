import { useState, type ChangeEventHandler, type Dispatch, type SetStateAction, type SubmitEventHandler } from "react";
import "./SearchBar.css";
import axios from "axios";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import type { Track } from "../Track/Track";

interface SearchBarProps {
  setTracks: Dispatch<SetStateAction<Array<Track> | null>>,
}

const SearchBar = ({ setTracks }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setSearchTerm((e.target as HTMLInputElement).value);
  }

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    const url = `https://api.spotify.com/v1/search?q=${searchTerm}&type=album,artist,playlist,track,show,episode,audiobook`;
    const res = await axios.get(url);

    console.log(res.data.tracks.items)
    setTracks(res.data.tracks.items);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="searchTerm"
        name="searchTerm"
        label="Search"
        onChange={handleChange}
        value={searchTerm}
        fullWidth
        variant="standard"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit">
                  <Search />
                </IconButton>
              </InputAdornment>
            )
          }
        }}
      >
      </TextField>
    </form>
  )
}

export default SearchBar;