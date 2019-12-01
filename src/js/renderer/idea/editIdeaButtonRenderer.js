import {editIdea} from "../../actions/action";
import {store} from "../../store/store";
import React from "react";

export function editIdeaButtonRenderer(instance , td , row , col , prop , value , cellProperties)
{
    var button=document.createElement("button");
    button.classList.add("btn");
    button.innerHTML="<i class='fa fa-pencil-square-o fa-lg'>";

    button.addEventListener("click",()=>
    {
        store.dispatch(editIdea(instance.getSourceDataAtRow(row)));
        window.$("#myModal").modal("show");
        console.log("Clicked "+row);
    });


    td.appendChild(button);
};