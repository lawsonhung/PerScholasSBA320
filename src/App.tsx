import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import type { TrackType } from 'TrackType';
import TrackItem from './components/Track/Track.js';

function App() {

  const [tracks, setTracks] = useState<Array<TrackType> | null>(null);

  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = async () => {
    const url = "https://accounts.spotify.com/api/token";
    const payload = {
      grant_type: "client_credentials",
      client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
      client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
    };

    let res = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    });

    axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.access_token}`;
  }

  return (
    <>
      <SearchBar setTracks={setTracks} />
      <ul>{tracks?.map(track => {
        return (
          <TrackItem
          key={track.id}
           track={track} 
           />
        )
      })}</ul>
    </>
  )
}

export default App;
