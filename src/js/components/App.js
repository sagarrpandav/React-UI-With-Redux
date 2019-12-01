import React from 'react';
import 'handsontable/dist/handsontable.full.css';
import {HandsontableDiv} from "./HandsontableDiv";
import {Modal} from "./Modal";
import connect from "react-redux/es/connect/connect";
import {addIdea, closeModal} from "../actions/action";
import {DropdownSelector} from "./DropdownSelector";
import {LoginDialogue} from "./LoginDialog";

const mapStateToProps = (state) => {
    if (state) {
        return (
            {
                newHackathonFlag: state.newHackathonFlag,
                newIdeaFlag: state.newIdeaFlag,
                headerText: state.headerText,
                selectedIdea: state.selectedIdea,
                memberName: state.member ? state.member.memberName : null
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
            addIdea: () => dispatch(addIdea()),
            closeModal: () => dispatch(closeModal())
        }
    )
};

const ConnectedApp = ({selectedIdea, newHackathonFlag, newIdeaFlag, headerText, addIdea, memberName}) => {
    const buttonText = newHackathonFlag ? "Add Hackathon" : "Add Idea";

    if (!memberName) {
        return (
            <div>
                <LoginDialogue/>
            </div>
        )
    }
    return (
        <div id="userStory">
            <LoginDialogue/>
            <div className="container">
                <h1 className="display-3">
                    <center>{headerText}</center>
                </h1>
            </div>
            <DropdownSelector/>
            <HandsontableDiv/>
            <button type="button" className="btn btn-primary" onClick={addIdea} data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false">
                {buttonText}
            </button>
            <Modal selectedIdea={selectedIdea}/>
        </div>
    )
};

export const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

/*
export class App extends Component {

    viewIdeaButtonRenderer = (instance, td, row, col, prop, value, cellProperties) => {
        var button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-info");

        button.addEventListener("click", () => {
            this.viewIdeasPerHackathon(instance, td, row, col);
        });

        button.innerText = "View Ideas";

        ReactDOM.findDOMNode(td).innerText = "";

        td.appendChild(button);
    };

    editIdeaButtonRenderer = (instance, td, row, col, prop, value, cellProperties) => {
        var button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-info");
        button.addEventListener("click", () => {
            this.editIdea(instance, td, row, col);
        });
        button.innerText = "Edit";

        ReactDOM.findDOMNode(td).innerText = "";

        td.appendChild(button);
    };

    state = {
        hackathonData: null,
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
                    {data: "", renderer: this.viewIdeaButtonRenderer, readOnly: true}
                ],
            colHeaders: ["Event Name", "MO Office", "Date", "Total Ideas", ""],
            colWidths: ["200%", "100%", "125%", "100%", "125%"]
        },
        settingsForIdeaTable: {
            data: null,
            columns:
                [
                    {data: "ideaSummary", renderer: ideaBaseRenderer, readOnly: true},
                    {data: "ideaDetails", renderer: ideaBaseRenderer, readOnly: true},
                    {data: "categoryName", renderer: ideaBaseRenderer, readOnly: true},
                    {data: "teamMemberNames", renderer: ideaBaseRenderer, readOnly: true},
                    {data: "totalLikes", renderer: ideaBaseRenderer, readOnly: true},
                    {data: "likeButton", renderer: ideaBaseRenderer, readOnly: true},
                    {data: "editButton", renderer: this.editIdeaButtonRenderer, readOnly: true}
                ],
            colHeaders: ["Idea Summary", "Idea Details", "Category", "Members", "Likes", "", ""],
            colWidths: ["250%", "400%", "125%", "250%", "75%", "100%", "100%"]
        },
        isOpen: false
    };

    toggleModal = () => {
        this.setState((prev) => {
            return (
                {
                    isOpen: !prev.isOpen
                }
            );
        });
    };

    viewIdeasPerHackathon = (instance, td, row, col) => {
        console.log("Clicked");
        this.getCategories();
        let hackathonID = instance.getSourceDataAtRow(row).id;
        $.get("http://localhost:8080/hackathon/" + hackathonID + "/ideas", {}, (response) => {
            console.log(response);
            this.setState(
                (prev) => {
                    return (
                        {
                            selectedHackathon: instance.getSourceDataAtRow(row),
                            ideaData: response.ideaDTOList,
                            settings: Object.assign(prev.settingsForIdeaTable, {data: response.ideaDTOList})
                        }
                    )
                });

        });
    };

    editIdea = (instance, td, row, col) => {
        console.log("Edit Idea");
        this.toggleModal();
    };

    getCategories = () => {
        $.get("http://localhost:8080/category", {}, (response) => {
            console.log(response);
            this.setState(
                (prev) => {
                    return (
                        {
                            categoryList: response
                        }
                    )
                });

        });
    };


    componentDidMount = () => {
        $.get("http://localhost:8080/hackathons", {}, (response) => {
            this.setState(
                (prev) => {
                    return (
                        {
                            hackathonData: response,
                            settings: Object.assign(prev.settingsForHackathonTable, {data: response})
                        }
                    )
                });

        });
    };

    render() {

        return (
            <div className="App">
                <HandsontableDiv
                    settings={this.state.settings}
                />
                <button onClick={this.toggleModal}>
                    Open the modal
                </button>
                <Modal
                    show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    'Children Content'
                </Modal>
            </div>
        );
    }
};*/