declare module "TrackType" {
  export interface TrackType {
    id: string
    name: string;
    artists: Artist[];
  }

  interface Artist {
    name: string;
  }
}
