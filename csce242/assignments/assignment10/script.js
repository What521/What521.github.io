
const list = [];

list["Happy Birthday"] = document.getElementById("display-img").src="images/birthday.jpg";
list["Crazy Clown"] = document.getElementById("display-img").src="images/clown.jpg";
list["It's Raining"] = document.getElementById("display-img").src="images/rain.jpg";
list["Quiet Time"] = document.getElementById("display-img").src="images/read.jpg";
list["Working hard"] = document.getElementById("display-img").src="images/shovel.jpg";
list["Working From Home"] = document.getElementById("display-img").src="images/work.jpg";

for(let items in list)
    {
        const p = document.createElement("p");
        document.getElementById("display-names").append(p);
        p.innerHTML = `${items}`;
        p.onclick = () =>
        {
           document.getElementById("names").innerHTML = `${items}`;
           document.getElementById("display-img").src = `${list[items]}`;
           document.getElementById("image-pop").classList.remove("hide");
        };
    }

document.getElementById("close").onclick = () => {
    document.getElementById("image-pop").classList.add("hide");
    }
