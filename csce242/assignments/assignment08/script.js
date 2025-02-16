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
document.getElementById("MOT").onkeyup = () =>
{
    const vehicleChosen = document.getElementById("MOT").value.toLowerCase().trim();

    if(vehicleChosen == "bike")
    {
       document.getElementById("IOV").src="images/bike.jfif";
       document.getElementById("IOV").style.display="block";
    }

    else if (vehicleChosen == "scooter")
    {
       document.getElementById("IOV").src="images/scooter.jfif";
       document.getElementById("IOV").style.display="block";
    }

    else if(vehicleChosen == "car")
    {
        document.getElementById("IOV").src="images/car.jfif";
        document.getElementById("IOV").style.display="block";
    }

    else if(vehicleChosen == "skateboard")
    {
        document.getElementById("IOV").src="images/skateboard.jfif";
        document.getElementById("IOV").style.display="block";
    }

    else
    {
       document.getElementById("IOV").style.display ="none";         
    }
};