import ReactDOM from 'react-dom';

export function eventNameRenderer(instance , td , row , col , prop , value , cellProperties)
{
    var paragraph=document.createElement("p");
    var bold=document.createElement("b");
    paragraph.classList.add("text-info");
    bold.innerText=value;
    paragraph.appendChild(bold);

    ReactDOM.findDOMNode(td).innerText="";

    td.appendChild(paragraph);

    return td;
};