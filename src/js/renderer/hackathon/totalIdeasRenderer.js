import ReactDOM from 'react-dom';

export function totalIdeasRenderer(instance , td , row , col , prop , value , cellProperties)
{
    var paragraph=document.createElement("p");
    paragraph.classList.add("text-info");
    var bold=document.createElement("b");
    var center=document.createElement("center");

    paragraph.appendChild(bold);
    bold.appendChild(center);
    bold.innerText=value;

    ReactDOM.findDOMNode(td).innerText="";

    td.appendChild(paragraph);
    return td;
};