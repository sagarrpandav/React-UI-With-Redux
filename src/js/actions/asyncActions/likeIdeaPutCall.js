import $ from "jquery";
import {getIdeasPerHackathonGetCall} from "./getIdeasPerHackathonGetCall";
import {store} from "../../store/store";

export const likeIdeaPutCall = (instance, row,member) => {
    const ideaID = instance.getSourceDataAtRow(row).ideaID;
    $.ajax({
        url: "http://localhost:8080/hackathons/ideas/" + ideaID + "/like",
        type: 'PUT',
        data: JSON.stringify({
            ideaID: ideaID,
            memberID: member.memberID
        }),
        datatype: "application/json",
        contentType: "application/json",
        success: ()=>{
            console.log("Success");
            getIdeasPerHackathonGetCall(store.getState().selectedHackathon,member);
        }
    });
};