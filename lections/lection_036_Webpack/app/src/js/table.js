// import "@style/table.css";
import "@style/table.scss";

export default class Table {
  print() {
    document.querySelector("body").innerHTML += '<div class="box"></div>';
  }
}
