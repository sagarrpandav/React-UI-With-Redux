import React from 'react';
import connect from "react-redux/es/connect/connect";
import {closeModal} from "../actions/action";
import {addEditIdea} from "../actions/asyncActions/addEditIdea";
import _ from "lodash";


function mapStateToProps(state) {
    if (state) {
        console.log("State is");
        console.log(state.selectedIdea)
        return (
            {
                selectedIdea: state.selectedIdea,
                categoryList: state.categoryList,
                modalHeader: state.modalHeader,
                selectedHackathon: state.selectedHackathon,
                member : state.member
            }
        )
    }
    else {
        return (
            {}
        )
    }

};

const mapDispatchToProps = (dispatch) => {
    return (
        {
            addEditIdea: () => dispatch(addEditIdea()),
            closeModal: () => dispatch(closeModal())
        }
    )
};


class ConnectedModal extends React.Component {
    constructor(props) {
        super(props);

        console.log("Props received : ");
        console.log(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    state = {
        ideaID: 0,
        ideaSummary: "",
        ideaDetails: "",
        categoryName: "Technology",
        teamMemberNames: "",
        categoryList: [],
        modalHeader: "Add Idea",
        totalLikes: 0
    };

    componentWillReceiveProps(nextProps) {
        this.loadPosts(nextProps);
    }

    loadPosts = (nextProps) => {
        if (nextProps.selectedIdea) {
            this.setState(() => {
                return (
                    {
                        ideaDetails: nextProps.selectedIdea.ideaDetails,
                        ideaSummary: nextProps.selectedIdea.ideaSummary,
                        categoryName: nextProps.selectedIdea.categoryName,
                        teamMemberNames: nextProps.selectedIdea.teamMemberNames,
                        categoryList: nextProps.categoryList,
                        totalLikes: nextProps.selectedIdea.totalLikes,
                        modalHeader: nextProps.modalHeader,
                        ideaID: nextProps.selectedIdea.ideaID
                    }
                )
            });
        }
        else if (nextProps.categoryList) {
            this.setState(() => {
                return (
                    {
                        categoryList: nextProps.categoryList
                    }
                )
            });
        }
        this.setState(() => {
            return (
                {
                    modalHeader: nextProps.modalHeader,
                    selectedHackathon: nextProps.selectedHackathon

                }
            )
        });

        if (nextProps.selectedIdea == null) {
            this.setState(() => {
                return (
                    {
                        ideaDetails: "",
                        ideaSummary: "",
                        categoryName: "",
                        teamMemberNames: "",
                        totalLikes: 0,
                        ideaID: 0
                    }
                )
            });
        }
    };

    handleChange(event) {
        event.preventDefault();
        console.log(event.target.id + "=" + event.target.value);
        var keyName = event.target.id;
        var keyValue = event.target.value;

        switch (keyName) {
            case "ideaSummary":
                this.setState(() => {
                    return (
                        {
                            ideaSummary: keyValue
                        }
                    )
                });
                return;
            case "ideaDetails":
                this.setState(() => {
                    return (
                        {
                            ideaDetails: keyValue
                        }
                    )
                });
                return;
            case "categoryName":
                this.setState(() => {
                    return (
                        {
                            categoryName: keyValue
                        }
                    )
                });
                return;
            case "teamMemberNames":
                this.setState(() => {
                    return (
                        {
                            teamMemberNames: keyValue
                        }
                    )
                });
                return;
        }
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log("Submitting ....");
        var addEditIdeaObj =
            {
                ideaID: this.state.ideaID ? this.state.ideaID : 0,
                ideaSummary: this.state.ideaSummary,
                ideaDetails: this.state.ideaDetails,
                categoryName: this.state.categoryName ? this.state.categoryName : "Technology",
                teamMemberNames: this.state.teamMemberNames,
                totalLikes: this.state.totalLikes ? this.state.totalLikes : 0
            };
        addEditIdea(addEditIdeaObj, this.state.selectedHackathon,this.props.member);
        window.$("#myModal").modal('hide');

    };

    render() {
        {
            return (
                <div id="myModal" className="modal fade">

                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">
                                    {this.state.modalHeader}
                                </h4>
                                <button className="close" data-dismiss="modal" onClick={this.props.closeModal}>x</button>

                            </div>
                            <form onSubmit={(event) => {
                                event.preventDefault();
                                this.handleSubmit(event);
                            }}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Idea Summary</label>
                                        <input id="ideaSummary" type="text" className="form-control" onChange={this.handleChange} value={this.state.ideaSummary} required/>
                                        <label>Idea Details</label>
                                        <textarea id="ideaDetails" type="text" className="form-control" onChange={this.handleChange} value={this.state.ideaDetails} rows="5"
                                                  required>
                                </textarea>
                                        <label>Category</label>
                                        <select id="categoryName" className='form-control' onChange={this.handleChange}>
                                            {_.without(this.state.categoryList, "All").map((categoryObj) => <option value={categoryObj}
                                                                                                                    key={categoryObj}>{categoryObj}</option>)}
                                        </select>
                                        <label>Team Members</label>
                                        <textarea id="teamMemberNames" className="form-control" rows="3" onChange={this.handleChange} value={this.state.teamMemberNames}
                                                  required></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">{this.state.modalHeader}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
        ;
    }
};

export const Modal = connect(mapStateToProps, mapDispatchToProps)(ConnectedModal);