import type { TrackType } from "TrackType";
import "./Track.css";

interface TrackProps {
  track: TrackType,
}

const Track = ({ track }: TrackProps) => {

  const getTime = () => {
    const ms = track.duration_ms;
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return seconds === 60
      ? `${minutes + 1}:00`
      : `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  return (
    <li className="track">
      <h1>{track.name}</h1>
      <p>{track.artists[0].name} | {getTime()}</p>
    </li>
  )
}

export default Track;