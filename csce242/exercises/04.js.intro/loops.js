document.getElementById("btn-display").onclick = () => {
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const displayArea = document.getElementById("start-end-display");
    displayArea.innerHTML = "";
    const errorDisplay = document.getElementById("error-num-order");
    errorDisplay.innerHTML = "";    //clear out any previous errors
    const favMessageP = document.getElementById("fav-message");
    favMessageP.innerHTML = "";

    if(endNum < startNum) {
        errorDisplay.innerHTML = `${endNum} is less than ${startNum}.`
        return; //don't do anything else if you already have an error
    }

    for(let i=startNum; i <= endNum; i++){
        const li = document.createElement("li");
        li.innerHTML = i;
        displayArea.append(li);
        //attach event to onclick li
        li.onclick = () => {
            favMessageP.innerHTML = `You clicked ${i}.`
        }
    }  
}

let count = 0;
let updateCount;

document.querySelector("#btn-count").onclick = (event) =>
{
    if(event.currentTarget.innerHTML.toLowerCase()=="start")
    {
        event.currentTarget.innerHTML="Stop";
        updateCount = setInterval(()=>{
            count++;
            document.querySelector("#count-display").innerHTML = count;
        }, 300);
    }
     else
    {
        event.currentTarget.innerHTML = "Start";
        clearInterval(updateCount);
    }
}

document.querySelector("#reset-btn").onclick = () =>
{
    count = 0;
    clearInterval(updateCount);
    document.querySelector("#btn-count").innerHTML="Start";
    document.querySelector("#count-display").innerHTML = "";
}

document.querySelectorAll("#btn-barbieList").onclick = (event) => {
    const toys = ["ball", "boom", "drop", "boo!"];
     
    event.currentTarget.disabled = true; //only display this btn once

   /* for(let i=0; i<barbie.length; i++)
    {
        document.getElementById("barbieDisplay").innerHTML=barbie[i];
    }
} */

    const ul = document.createElement("ul");
    document.getElementById("display-toys").append(ul);

/*toys.forEach((toy, i)=>{
    const li=document.createElement("li"); 
    ul.append(li);
    li.innerHTML = `${i+1}`. ${toy}`;
});

}*/

document.getElementById("btn-show-toy-desc").onclick = () =>
{
    const toys = [];
    toys["ball"] = "An item to throw";
    toys["doll"] = "small hooman";
    toys["rope"] = " a thing to tie with";

    const section = document.getElementById("display-toy-descs");

    for(let toy in toys)
    {
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = `${toy}: ${toys[toy]}`;
        p.onclick = () =>
        {
            document.getElementById("toy-message").innerHTML = `Best ${toy} Ever. ${toys[toy]}`;
        };
    }
}

}