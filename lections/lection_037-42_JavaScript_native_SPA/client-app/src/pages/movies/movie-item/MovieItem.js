import './MovieItem.scss'
import Component from "@/plugins/component";
import {AsNode} from "@/common/decorators";

export default class MovieItem extends Component {
    constructor(...props) {
        super(...props)
    }

    getTemplate() {
        return `
            <div class="movie_card col-4" id="bright">
              <div class="info_section">
                <div class="movie_header">
                  <img class="locandina" src="${this.props.poster}"/>
                  <h1>${this.props.title}</h1>
                  <h4>${this.props.year}</h4>
                  <span class="minutes">117 min</span>
                  <p class="type">Action, Fantasy</p>
                  <div><button>+</button></div>
                </div>
              </div>
              <div class="blur_back bright_back"></div>
            </div> 
        `;
    }

    @AsNode
    render() {
        return this.getTemplate();
    }
}