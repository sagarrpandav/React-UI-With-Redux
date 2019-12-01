import $ from "jquery";
import {memberLogin} from "../action";
import {store} from "../../store/store";
import {viewHackathonsGetCall} from "./viewHacakthonsGetCall";

export function checkMemberCredentials(memberID) {
    $.get("http://localhost:8080/member/" + memberID, {}, (response) => {
            store.dispatch(memberLogin(response));
            viewHackathonsGetCall();
        }
    );
};