export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
}

export interface AuthInterface {
    isLoggedIn: boolean;
    jwtToken: string;
}

export interface MovieInterface {
    movies: Array<Movie>;
    originalMovies: Array<Movie>;
}