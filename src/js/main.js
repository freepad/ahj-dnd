import "../css/style.scss";
import "./dnd";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import Sortable from "sortablejs";

const columnsEl = document.querySelectorAll(".js-col");

for (const columnEl of columnsEl) {
  new Sortable(columnEl, {
    group: "shared", // set both lists to same group
    animation: 150,
    draggable: ".card",
    onEnd(event) {
      // eslint-disable-next-line no-debugger
      debugger;
    },
  });
}
