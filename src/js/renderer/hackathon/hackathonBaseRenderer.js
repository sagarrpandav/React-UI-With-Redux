import {eventNameRenderer} from "./eventNameRenderer";
import {moOfficeRenderer} from "./moOfficeRenderer";
import {totalIdeasRenderer} from "./totalIdeasRenderer";
import {viewIdeaButtonRenderer} from "./viewIdeasButtonRenderer";
import {dateRenderer} from "./dateRenderer";

export function hackathonBaseRenderer(instance , td , row , col , prop , value , cellProperties)
{
    switch (prop)
    {
        case "eventName":
            return eventNameRenderer(instance , td , row , col , prop , value , cellProperties);
        case "moOffice":
            return moOfficeRenderer(instance , td , row , col , prop , value , cellProperties);
        case "dateConducted":
            return dateRenderer(instance , td , row , col , prop , value , cellProperties);
        case "totalIdeas":
            return totalIdeasRenderer(instance , td , row , col , prop , value , cellProperties);
        default:
            return viewIdeaButtonRenderer(instance , td , row , col , prop , value , cellProperties);
    }
};