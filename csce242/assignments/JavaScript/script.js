document.getElementById("hello-printer").onclick = () =>{
    console.log("working...");
        document.getElementById("result").innerHTML += "hello<br>"; 
};

const svgEl = document.querySelector("svg"); 
colorChanger.addEventListener("input", function() {
    svgEl.setAttribute("fill", colorChanger.value);
});

document.getElementById("image1").onclick = () => {
    document.getElementById("image1").src="images/random2.jfif"; 
};



