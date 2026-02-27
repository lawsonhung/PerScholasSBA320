import type { TrackType } from "TrackType";

interface TrackProps {
  track: TrackType,
}

const Track = ({ track }: TrackProps) => {
  return (
    <>
      <h1>{track.name}</h1>
      <p>{track.artists[0].name} | {track.duration_ms}</p>
    </>
  )
}

export default Track;