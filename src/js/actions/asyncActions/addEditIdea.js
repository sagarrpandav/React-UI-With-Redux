import {addIdeaPostCall} from "./addIdeaPostCall";
import {editIdeaPutCall} from "./editIdeaPutCall";

export function addEditIdea(IdeaData,HackathonData,Member)
{

    if(IdeaData.ideaID===0)
    {
        console.log("Add");
        addIdeaPostCall(IdeaData,HackathonData,Member);
    }
    else
    {
        console.log("Edit");
        editIdeaPutCall(IdeaData,HackathonData,Member);
    }
};