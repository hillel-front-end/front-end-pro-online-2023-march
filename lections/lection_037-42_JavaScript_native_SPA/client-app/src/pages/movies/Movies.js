import './movies.scss'
import { AsNode, SaveContainer } from "@/common/decorators";
import Component from "@/plugins/component";
import Header from "@/pages/movies/header/Header";
import MoviesList from "@/pages/movies/movies-list/Movies-list";
import moviesService from "@/common/serives/Movies.service";

export default class Movies extends Component {
    movies = []

    updateMovies(movieTitle) {
        this.onSearchMovies(movieTitle)
            .then(() => {
                this.prepareMovies();
                this.renderMoviesList();
            });
    }

    async onSearchMovies(movieTitle) {
        this.movies = await moviesService.loadMovies(movieTitle)
    }
    prepareMovies() {
        this.movies = moviesService.prepareMovies(this.movies)
    }

    renderMoviesList() {
        moviesService.renderMoviesList(this.$container, this.movies)
    }

    updateTemplate(template) {
        return this.replaceSlot(
            template,
            {
                key: 'slot[name="header"]', replacer: () => new Header({
                    onSearch: this.updateMovies.bind(this)
                }).render()
            },
            {
                key: 'slot[name="movies-list"]', replacer: () => new MoviesList({
                    movies: this.movies
                }).render()
            }
        );
    }

    @AsNode
    getTemplate() {
        return `
            <main class="movies-page">
                <div class="movies-page__header">
                    <slot name="header"></slot>
                </div>
                <div class="movies-page__movies-list">
                    <slot name="movies-list"></slot>
                </div>
            </main>
        `;
    }

    @SaveContainer
    render() {
        return this.updateTemplate(
            this.getTemplate()
        );
    }
}