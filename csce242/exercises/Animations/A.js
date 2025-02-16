let pos = 0;

const changeCirclePos = (increment) =>{
    pos += increment;
    document.getElementById("circle").style.setProperty("top", pos + "px");
};

document.getElementById("btn-down").onclick = () =>{
    console.log("down");
    pos++;
    changeCirclePos();
};

document.getElementById(btn-up).onclick = () =>{
    console.log("up");
    pos--;
    changeCirclePos();
};

document.getElementById("btn-pick-color").onclick = () =>{
    console.log("color");
}