const getBreweries = async () =>{
const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showBreweries = async () => {
    const breweriesSection = document.getElementById("breweries");
    const breweries = await getBreweries();
    console.log(breweries);

    breweries.forEach((brewery)=>{
       const section = document.createElement("section");
       section.classList.add("brewery");
       breweriesSection.append(section);

       const a = document.createElement("a");
       a.href = brewery.webstie_url;
       section.append(a);

       const h3 = document.createElement("h3");
       h3.innerHTML = brewery.name;
       section.append(h3);

       const p = document.createElement("p");
       p.innerHTML = brewery.brewery_type + " brewery";
       section.append(p);

       const iframe = document.createElement("iframe");
       iframe.src = await getMap(brewery.longitude, brewery.latitude);
       
       section.append(iframe);
    })
};

showBreweries();