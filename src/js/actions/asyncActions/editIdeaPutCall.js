import $ from "jquery";
import {getIdeasPerHackathonGetCall} from "./getIdeasPerHackathonGetCall";

export function editIdeaPutCall(IdeaData,HackathonData,Member) {
    $.ajax({
        url:"http://localhost:8080/hackathons/ideas/" + IdeaData.ideaID,
        type: 'PUT',
        data: JSON.stringify(IdeaData),
        datatype: "application/json",
        contentType: "application/json",
        success: ()=>{
            getIdeasPerHackathonGetCall(HackathonData,Member);
        }
    });
};