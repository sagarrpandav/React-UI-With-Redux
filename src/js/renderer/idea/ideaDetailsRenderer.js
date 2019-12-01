export function ideaDetailsRenderer(instance , td , row , col , prop , value , cellProperties)
{
    var paragraph=document.createElement("p");
    paragraph.classList.add("text-info");
    paragraph.innerText=value;



    td.appendChild(paragraph);

    return td;
};