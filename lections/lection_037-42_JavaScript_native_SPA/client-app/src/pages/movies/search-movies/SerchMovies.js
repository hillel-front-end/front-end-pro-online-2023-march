import './SerchMovies.scss'
import Component from "@/plugins/component";
import {AsNode, BindEvent} from "@/common/decorators";

export default class SearchMovies extends Component {
    movieTitle = '';

    constructor(...props) {
        super(...props);

        console.log(this.props.onSearch, 'onSearch from SearchMovies');
    }

    @AsNode
    getTemplate() {
        return `
            <form class="search-movies form-inline">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        `;
    }

    onSearchHandler(event) {
        event.preventDefault();
        console.log(this.props, 'props');

        this.props.onSearch(this.movieTitle);
    }

    onKeyStrokeHandler(event) {
       this.movieTitle = event.target.value;
    }

    bindEvent(node) {
        node.querySelector('button[type="submit"]')
            .addEventListener('click', this.onSearchHandler.bind(this));

        node.querySelector('input[type="search"]')
            .addEventListener('change', this.onKeyStrokeHandler.bind(this))
    }

    @BindEvent
    render() {
        return this.getTemplate();
    }
}