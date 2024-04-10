let overlay=document.getElementById("overlay")
let popup=document.getElementById("popup")
popup.style.display="none"

function openpop(){
    popup.style.display="grid";
}

function closepop(){
    popup.style.display="none"
}

let inputss=document.getElementsByClassName("inputss")

function update(){
    
    
    let div=document.createElement("div")
    let h1=document.createElement("h1")
    let h2=document.createElement("h1")
    let h3=document.createElement("p")
    let dbtn=document.createElement("button")
    dbtn.setAttribute("id","deletebtn")
    dbtn.setAttribute("onclick","deleteee(event)")

    dbtn.innerText="Delete"
    console.log(dbtn);

    h1.append(inputss[0].value)
    h2.append("-"+inputss[1].value)
    h3.append(inputss[2].value)
    h2.setAttribute("class","authorname")
    
    div.append(h1)
    div.append(h3)
    div.append(h2)
    div.append(dbtn)
    
    console.log(div);

    overlay.append(div)



    popup.style.display="none"
}



function deleteee(event){
    console.log("deleted");
    event.target.parentElement.remove();

}