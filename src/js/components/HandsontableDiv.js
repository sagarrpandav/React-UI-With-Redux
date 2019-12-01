import React from "react";
import {HotTable} from "@handsontable/react";
import connect from "react-redux/es/connect/connect";

/*
const mapDispatchToProps = (dispatch) => {
    console.log("Inside mapDispatchToProps");
    console.log(dispatch);
    return (
        {
            editIdea:()=>dispatch(editIdea())}
    );
};
*/

function mapStateToProps(state) {
    console.log("HandsonTable : State is");

    if (state) {
        return (
            {
                settings: state.settings
            }
        )
    }
    else {
        return (
            {
                settings: null
            }
        )
    }

};

const ConnectedHOT = ({settings}) => {

    return (
        <div>
            <   HotTable
                settings={settings}
            />
        </div>
    )
};
export const HandsontableDiv = connect(mapStateToProps, null)(ConnectedHOT);
/*

export class HandsontableDiv extends Component {

    state = {};

    render() {
        return (
            <div>
                <HotTable
                    settings={this.props.settings}
                />
            </div>
        )
    }
};*/