import $ from "jquery";
import {store} from "../../store/store";
import {viewIdeas} from "../action";
import {getAllCategoriesGetCall} from "./getAllCategoriesGetCall";

export const getIdeasPerHackathonGetCall = (HackathonData,member) => {

    console.log(HackathonData+"/"+ "/ideas");
    $.get("http://localhost:8080/hackathon/" + HackathonData.id + "/"+member.memberID+"/ideas", {}, (response) => {
        console.log(response);
        store.dispatch(viewIdeas(response, HackathonData));
        getAllCategoriesGetCall();
    });
};