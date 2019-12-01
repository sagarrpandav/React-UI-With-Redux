import $ from "jquery";
import {getIdeasPerHackathonGetCall} from "./getIdeasPerHackathonGetCall";

export function addIdeaPostCall(IdeaData,HackathonData,Member) {
    $.ajax({
        url:"http://localhost:8080/hackathons/" + HackathonData.id + "/ideas",
        type: 'POST',
        data: JSON.stringify(IdeaData),
        datatype: "application/json",
        contentType: "application/json",
        success: ()=>{
            getIdeasPerHackathonGetCall(HackathonData,Member);
        }
    });
};