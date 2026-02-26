import axios from 'axios';
import './App.css'
import { useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

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
      <SearchBar />
    </>
  )
}

export default App;
