export class OmdbResponse {
    Search: Film[];
    totalResults: string;
    Response: string;
}

export class Film {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}