export function ideaLikesRenderer(instance , td , row , col , prop , value , cellProperties)
{
    var paragraph=document.createElement("p");
    var center=document.createElement("center");
    paragraph.classList.add("text-info");

    center.innerText=value;

    paragraph.appendChild(center);


    td.appendChild(paragraph);

    return td;
};