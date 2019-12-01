import $ from "jquery";
import {viewHackathons} from "../action";
import {getAllCategoriesGetCall} from "./getAllCategoriesGetCall";
import {store} from "../../store/store";

export function viewHackathonsGetCall() {
    $.get("http://localhost:8080/hackathons", {}, (response) => {
            store.dispatch(viewHackathons(response));
        }
    );
    getAllCategoriesGetCall();
};