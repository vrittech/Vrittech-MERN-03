import MovieCard from "@/components/MovieCard";
import { Movie } from "@/interface/global.interface";
import { setFilteredMovies, setGlobalMovies } from "@/slice/MovieSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  // const [movies, setMovies] = useState<Movie[]>([]);
  //fetch state
  const { movies, originalMovies } = useSelector((state: any) => {
    return state.MovieReducer;
  });

  //set state
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=5345d591dce999dd3dde52a8fd7e0f56"
      );
      dispatch(setGlobalMovies(response.data.results));
    } catch (error) {
      console.log(error);
    }
  };

  // const searchResult = (searchQuery: string) => {
  //local state way
  // const lowercaseResult = searchQuery.trim().toLowerCase();
  // const filteredResult = originalMovies.filter((movie: any) => {
  //   return movie.title.toLowerCase().includes(lowercaseResult);
  // });
  // dispatch(setFilteredMovies(filteredResult));
  // };

  const searchResult = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzQ1ZDU5MWRjZTk5OWRkM2RkZTUyYThmZDdlMGY1NiIsInN1YiI6IjY0NzRkMDBlOWFlNjEzMDEyNTdjZWFhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dnyfwNlK0YqelPFjs1vB4AvSC0iXzNLjKNk8axPYU9M",
        },
      }
    );
    dispatch(setGlobalMovies(response.data.results));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    const debounceFN = setTimeout(() => {
      searchResult();
    }, 500);

    return () => clearTimeout(debounceFN);
  }, [searchQuery]);

  return (
    <>
      <input
        placeholder="Search movies here"
        onChange={(e: any) => setSearchQuery(e.target.value)}
      />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Popular movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies &&
            movies.map((movie: any) => {
              return (
                <MovieCard
                  key={movie.id}
                  poster={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                  title={movie.title}
                  releaseYear={movie.release_date}
                  rating={movie.vote_average}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
