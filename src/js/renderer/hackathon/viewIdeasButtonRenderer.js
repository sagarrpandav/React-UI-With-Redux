import ReactDOM from 'react-dom';
import {getIdeasPerHackathonGetCall} from "../../actions/asyncActions/getIdeasPerHackathonGetCall";

export function viewIdeaButtonRenderer(instance, td, row, col, prop, value, cellProperties) {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-info");
    button.innerText = "View Ideass";

    button.addEventListener("click", () => {

        getIdeasPerHackathonGetCall(instance.getSourceDataAtRow(row),cellProperties.member);

    });

    ReactDOM.findDOMNode(td).innerText = "";

    td.appendChild(button);
};