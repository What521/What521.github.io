document.querySelectorAll(".gallery section").forEach(()=>{
    tile.onclick = () =>{
        const label = tile.querySelector("h4").innerHTML;
        const imgSRC = tile.querySelector("img").src;
        document.getElementById("popop").style.display="block";
        document.querySelector("#popop h2").innerHTML = label;
        document.querySelector("#popop img").src = imgSRC;
    }

})