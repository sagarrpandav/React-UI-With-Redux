import $ from "jquery";
import {getIdeasPerHackathonGetCall} from "./getIdeasPerHackathonGetCall";
import {store} from "../../store/store";

export const dislikeIdeaPutCall = (instance, row,member) => {
    const ideaID = instance.getSourceDataAtRow(row).ideaID;
    const likeID=instance.getSourceDataAtRow(row).likeDTO.likeID;
    $.ajax({
        url: "http://localhost:8080/hackathons/ideas/" + ideaID + "/dislike",
        type: 'PUT',
        data: JSON.stringify({
            ideaID: ideaID,
            likeID : likeID
        }),
        datatype: "application/json",
        contentType: "application/json",
        success: ()=>{
            console.log("Success");
            getIdeasPerHackathonGetCall(store.getState().selectedHackathon,member);
        }
    });
};