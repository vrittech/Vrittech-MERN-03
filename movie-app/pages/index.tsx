import MovieCard from "@/components/MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";

interface MovieInterface {
  id: number;
  title: string;
  poster_path: string;
  release_data: string;
  vote_average: number;
}

export default function Home() {
  const [movies, setMovies] = useState<MovieInterface[]>([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=5345d591dce999dd3dde52a8fd7e0f56"
      );
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Popular movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie: any) => {
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
