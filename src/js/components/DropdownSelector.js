import React from 'react';
import connect from "react-redux/es/connect/connect";
import {changeIdeaFilter, viewIdeas} from "../actions/action";

const mapStateToProps = (state) => {
    if (state) {
        return (
            {
                selectedHackathon: state.selectedHackathon,
                hackathonData: state.hackathonData,
                ideaData: state.ideaData,
                categoryList: state.categoryList,
                filterIdeaCategory: state.filterIdeaCategory
            }
        );
    }
    else {
        return {};
    }
};

const mapDispatchToProps = (dispatch) => {
    return (
        {
            changeIdeaFilter: (ideaFilterCategory) => dispatch(changeIdeaFilter(ideaFilterCategory)),
            viewIdeas: (ideaData, hackathonData) => dispatch(viewIdeas(ideaData, hackathonData))
        }
    )
};

const ConnectedDropdownSelector = ({selectedHackathon, categoryList, changeIdeaFilter, ideaData, hackathonData,viewIdeas}) => {

    var handleChange = (event) => {
        changeIdeaFilter(event.target.value);
        viewIdeas(ideaData.IdeasData,selectedHackathon);
    };

    if (selectedHackathon) {
        return (
            <div>
                <div className="container">
                    <select className="form-control pageTitle" onChange={handleChange}>
                        {categoryList.map((categoryObj) => <option value={categoryObj} key={categoryObj}>{categoryObj}</option>)}
                    </select>
                    <br/>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
};

export const DropdownSelector = connect(mapStateToProps, mapDispatchToProps)(ConnectedDropdownSelector);
