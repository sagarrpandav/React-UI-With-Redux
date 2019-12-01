import {createStore} from "redux";
import {rootReducer} from "../reducers/rootReducer";

//Store creation
export const store=createStore(rootReducer);

store.subscribe(()=>
{
    console.log("Redux Subscribed!!!!");
});
//Subscription and Dispatch sample code