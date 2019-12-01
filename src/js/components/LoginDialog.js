import React from 'react';
import connect from "react-redux/es/connect/connect";
import {checkMemberCredentials} from "../actions/asyncActions/checkMemberCredentials";

const $=window.$;
const mapStateToProps = (state) => {
    return (
        {
            member: state ? state.member : null
        }
    )
};

const mapDispatchToProps = (dispatch) => {
    return (
        {
            checkMemberCredentials: (member) => checkMemberCredentials(member)
        }
    )
};

class ConnectedLoginDialogue extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    state = {
        memberID: "",
        memberName: ""
    };

    handleChange = (event) => {
        event.preventDefault();
        let val=event.target.value;
        this.setState(() => {
            return (
                {
                    memberID: val
                }
            );
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        checkMemberCredentials(this.state.memberID);
    };

    render() {
        if (this.props.member) {
            return(
                <div align="center">
                    <h5 className="display-5">Welcome {this.props.member.memberName}</h5>
                </div>
            )
        }
        else {
            return (
                <div id="loginModal" className="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">
                                    Login
                                </h4>
                            </div>
                            <form onSubmit={(event) => {
                                event.preventDefault();
                                this.handleSubmit(event);
                            }}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Member ID</label>
                                        <input id="memberID" type="text" className="form-control" onChange={this.handleChange} value={this.state.memberID} required/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    };

};

export const LoginDialogue = connect(mapStateToProps, mapDispatchToProps)(ConnectedLoginDialogue);