import ReactDOM from 'react-dom';

export function moOfficeRenderer(instance , td , row , col , prop , value , cellProperties)
{
    var paragraph=document.createElement("p");
    paragraph.classList.add("text-info");

    paragraph.innerText=value;

    ReactDOM.findDOMNode(td).innerText="";

    td.appendChild(paragraph);
    return td;
};