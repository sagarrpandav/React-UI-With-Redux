//import actions

import {hackathonBaseRenderer} from "../renderer/hackathon/hackathonBaseRenderer";
import {ideaBaseRenderer} from "../renderer/idea/ideaBaseRenderer";
import _ from "lodash";

const initialState =
    {
        member: null,
        hackathonData: null,
        filterIdeaCategory: "All",
        ideaData: null,
        selectedHackathon: null,
        selectedIdea: null,
        categoryList: null,
        settings: null,
        settingsForHackathonTable: {
            data: null,
            columns:
                [
                    {data: "eventName", renderer: hackathonBaseRenderer, readOnly: true},
                    {data: "moOffice", renderer: hackathonBaseRenderer, readOnly: true},
                    {data: "dateConducted", renderer: hackathonBaseRenderer, readOnly: true},
                    {data: "totalIdeas", renderer: hackathonBaseRenderer, readOnly: true},
                    {data: "", renderer: hackathonBaseRenderer, readOnly: true}
                ],
            colHeaders: ["Event Name", "MO Office", "Date", "Total Ideas", ""],
            colWidths: ["200%", "100%", "125%", "100%", "150%"],
        },
        settingsForIdeaTable: {
            data: ,
            columns:
                [
                    {data: "ideaSummary", renderer: ideaBaseRenderer, readOnly: true},
                    {data: "ideaDetails", renderer: ideaBaseRenderer, readOnly: true},
                    {data: "categoryName", renderer: ideaBaseRenderer, readOnly: true},
                    {data: "teamMemberNames", renderer: ideaBaseRenderer, readOnly: true},
                    {data: "totalLikes", renderer: ideaBaseRenderer, readOnly: true},
                    {data: "liked", renderer: ideaBaseRenderer, readOnly: true},
                    {data: "editButton", renderer: ideaBaseRenderer, readOnly: true}
                ],
            colHeaders: ["Idea Summary", "Idea Details", "Category", "Members", "Likes", "", ""],
            colWidths: ["250%", "400%", "125%", "250%", "75%", "100%", "100%"]
        },
        isOpen: false,
        newHackathonFlag: true,
        newIdeaFlag: false,
        headerText: null,
        modalHeader: "Add Idea"
    };


export const rootReducer = (state = initialState, action) => {
    //switch cases for action.type , used for changing state
    switch (action.type) {
        case "VIEW_IDEAS":
            console.log("Inside Reducer for VIEW_IDEAS");
            console.log(action.payload);
            console.log(state);
            return (
                {
                    ...state,
                    ideaData: action.payload,
                    selectedHackathon: action.payload.Hackathon,
                    settings: {
                        ...state.settingsForIdeaTable,
                        data: (state.filterIdeaCategory === 'All') ? action.payload.IdeasData.ideaDTOList : _.filter(action.payload.IdeasData.ideaDTOList, function (obj) {
                            if (obj.categoryName === state.filterIdeaCategory) {
                                return obj;
                            }
                        }),
                        cells: (row, col) => {
                            if (col === 5) {
                                var obj = {};
                                obj.member = state.member;
                                return obj;
                            }
                        }
                    },
                    selectedIdea: null,
                    /*Object.assign(state.settingsForIdeaTable, {data: Object.assign(state.settings.data, action.payload.IdeasData.ideaDTOList)}),
                    */

                    newHackathonFlag: false,
                    newIdeaFlag: true,
                    headerText: action.payload.Hackathon.eventName
                }
            );
        //change state here
        case "VIEW_HACKATHONS":
            console.log("Inside View Hackathons");
            console.log(action);

            return (
                {
                    ...state,
                    hackathonData: action.payload,
                    settings: Object.assign(state.settingsForHackathonTable, {
                        data: action.payload,
                        cells: (row, col) => {
                            if (col === 4) {
                                var obj = {};
                                obj.member = state.member;
                                return obj;
                            }
                        }
                    }),
                    headerText: "Hackathons"
                }
            )
                ;
        case "ADD_CATEGORIES":
            return (
                {
                    ...state,
                    categoryList: action.payload
                }
            );
        case "ADD_IDEA":
            console.log("Adding Idea");
            return (
                {
                    ...state,
                    isOpen: true
                }
            );
        case "EDIT_MODAL":
            return (
                {
                    ...state,
                    selectedIdea: action.payload,
                    modalHeader: "Edit Idea"
                }
            );
        case "CLOSE_MODAL":
            return (
                {
                    ...state,
                    selectedIdea: null,
                    modalHeader: "Add Idea"
                }
            );
        case "CHANGE_IDEA_FILTER":
            console.log("Changing filter");
            return (
                {
                    ...state,
                    filterIdeaCategory: action.payload
                }
            );
        case "MEMBER_LOGIN":
            return (
                {
                    ...state,
                    member: action.payload
                }
            );
        default:
            console.log("Inside Default");
    }
};
