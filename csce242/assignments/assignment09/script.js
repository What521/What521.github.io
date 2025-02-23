document.getElementById("btn-stairs").onclick = () =>
{
    const programList = document.getElementById("program");
    programList.classList.remove("hide");

    const ladderList = document.getElementById("ladder");
    ladderList.innerHTML = "";

    for(let i=0; i<10 ; i++) 
    {
        const step = document.createElement("div");
        ladderList.append(step);
    }

}

const moveUp = document.getElementById("displayImg");

document.getElementById("btn-climb").onclick = (event) =>
{
   let firstStep = 540;
   let currentStep = 0;
   const heightOfAStep = 36;
   let isLeft = true;

   document.getElementById("displayImg").src="images/right.png";
   document.getElementById("displayImg").style.display="block";
  
   const climbing = setInterval(() => {

    if(currentStep == 7)
      {
        clearInterval(climbing);
      }

    if(isLeft)
      {
        document.getElementById("displayImg").src="images/left.png";
      }

    else
      {
        document.getElementById("displayImg").src="images/right.png";
      }

    isLeft = !isLeft;
    currentStep++;
    firstStep -= heightOfAStep;
    document.getElementById("displayImg").style.top=`${firstStep}px`;
   },690)
   
}