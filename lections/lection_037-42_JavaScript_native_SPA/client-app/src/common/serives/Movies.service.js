import httpService from "@/common/serives/Http.service";
import MoviesList from "@/pages/movies/movies-list/Movies-list";

class MoviesService {
     prepareMovies(movies) {
         if (!movies) return [];

         return movies.map(movie => ({
             poster: movie['Poster'],
             title: movie['Title'],
             type: movie['Type'],
             year: movie['Year'],
             id: movie['imdbID']
         }))
     }

     getUrlParams(params) {
         return new URLSearchParams(params).toString();
     }

    async loadMovies(movieTitle) {
        const query = this.getUrlParams({ movieTitle });
        const url =`/search-movies?${query}`
        const { data } = await httpService.get(url)

        if (data['Response'].toLowerCase() === 'true') {
           return data['Search'];
        }

        return [];
    }

    renderMoviesList($container, movies) {
        const movieListContainer = $container.querySelector('.movies-page__movies-list')

        const moviesListNode = new MoviesList({ movies }).render()

        movieListContainer.innerHTML = '';
        movieListContainer.append(moviesListNode);
    }
 }



 export default new MoviesService();