declare module "TrackType" {
  export interface TrackType {
    id: string
    name: string;
    artists: Artist[];
    duration_ms: number;
  }

  interface Artist {
    name: string;
  }
}
