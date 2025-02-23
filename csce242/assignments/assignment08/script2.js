document.getElementById("arrow-down").onclick = () =>{
  const arrowElement = document.getElementById("arrow-down");
  const itemsList = document.getElementById("items");

    if (arrowElement.innerHTML === "\\/") 
      {
      arrowElement.innerHTML = "/\\";
      itemsList.classList.remove("hide");
    } 
         
    else 
    {
      arrowElement.innerHTML = "\\/";
      itemsList.classList.add("hide");
    }
};

const ButtonFunction = () =>{
    const btns = document.querySelectorAll("section button");
    const svgEl = document.querySelector("svg"); 
btns.forEach ((btn) => {
    btn.onclick = (e) =>{
        if(e.target.id === "btn-red")
        {
          svgEl.setAttribute("fill", "red");
        }

        else if(e.target.id === "btn-green")
        {
          svgEl.setAttribute("fill", "green");
        }

        else if(e.target.id === "btn-blue")
        {
          svgEl.setAttribute("fill", "blue");
        }
    };
  });
};

ButtonFunction();