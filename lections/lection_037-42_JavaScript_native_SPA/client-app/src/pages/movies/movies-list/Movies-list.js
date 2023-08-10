import Component from "@/plugins/component";
import {AsNode, SaveContainer} from "@/common/decorators";
import MovieItem from "@/pages/movies/movie-item/MovieItem";

export default class MoviesList extends Component {

    constructor(...props) {
        super(...props);

        console.log(this.props.movies);
    }


    @AsNode
    getTemplate() {
        const isMoviesPresent = Boolean(this.props.movies.length);
        return `
          <div class="movies-list row">
                ${isMoviesPresent && `<slot name="movies-list"></slot>` || ''}        
                ${!isMoviesPresent && `<div class="no-movies">No movies found</div>` || ''}
          </div>
        `
    }

    makeMovieItems() {
        const items =  this.props.movies.map(movie => new MovieItem(movie).render());

        console.log(items, ';items');

        return items;
    }

    updateTemplate(template) {
        if (this.props.movies.length) {
            return this.replaceSlot(
                template,
                { key: 'slot[name="movies-list"]', replacer: () => this.makeMovieItems()},
            );
        }

        return template;
    }

    @SaveContainer
    render() {
        return this.updateTemplate(this.getTemplate());
    }
}