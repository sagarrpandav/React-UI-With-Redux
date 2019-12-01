import $ from "jquery";
import {addCategories} from "../action";
import {store} from "../../store/store";

export function getAllCategoriesGetCall() {
    $.get("http://localhost:8080/category", {}, (response) => {
            store.dispatch(addCategories(response));
        }
    );
};