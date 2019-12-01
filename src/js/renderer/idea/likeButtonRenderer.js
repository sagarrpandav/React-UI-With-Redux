import {likeIdeaPutCall} from "../../actions/asyncActions/likeIdeaPutCall";
import {dislikeIdeaPutCall} from "../../actions/asyncActions/dislikeIdeaPutCall";

export function likeButtonRenderer(instance, td, row, col, prop, value, cellProperties) {
    var button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-info");

    if (!value) {
        button.innerHTML = "<i class='fa fa-thumbs-up fa-lg'>";
        button.addEventListener("click", () => likeIdeaPutCall(instance, row, cellProperties.member));
    }
    else {
        button.innerHTML = "<i class='fa fa-thumbs-down fa-lg'>";
        button.addEventListener("click", () => edislikeIdeaPutCall(instance, row,cellProperties.member));
    }

    td.appendChild(button);
};
