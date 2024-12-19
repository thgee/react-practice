import { IMovie } from "../../models/netflix/models";

export interface IGetPlayingMovies {
  dates: { maximum: string; minimum: string };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export const apiGetPlayingMovies = () =>
  fetch(`https://api.themoviedb.org/3/movie/now_playing`, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjUwNjdiN2NjMzkxMWEwZDhmMzYzMWU4NWZiZDRiOSIsIm5iZiI6MTczMzk5MDU5Mi4yMTQwMDAyLCJzdWIiOiI2NzVhOThjMDdlN2NiOTRiZGYxZWJlMmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wDcz3i23SLW73qXsJatSKjy781LernpqdEpKQqvJJfs",
    },
  }).then((data) => data.json());
