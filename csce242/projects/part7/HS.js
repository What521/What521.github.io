document.getElementById("toggle-bar").onclick = () =>{
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const getMovieDetails = async () =>{
    const link = "https://what521.github.io/csce242/projects/part6/movieDetails.json";
        try {
            const response = await fetch(link);
            return response.json();
        } catch(error){
            console.log(error);
        }
};

const showMovieDetails = async () =>
{
    const MovieDetails = await getMovieDetails();

    MovieDetails.forEach((Detail)=>{
        
        const section = document.createElement("section");
    
        const a = document.createElement("a");
        a.href = Detail.link;

        const h3 = document.createElement("h3");
        h3.innerHTML = Detail.title;
        a.append(h3);
        section.append(a);

        const image = document.createElement("img");
        image.src = Detail.image;
        a.append(image);
        section.append(a);

        const p1 = document.createElement("p");
        p1.innerHTML = Detail.cast;
        section.append(p1);

        const p2 = document.createElement("p");
        p2.innerHTML = Detail.year;
        section.append(p2);

        const p3 = document.createElement("p");
        p3.innerHTML = Detail.rating;
        section.append(p3);    

        if(Detail.genre == "action")
        {
            const aDiv = document.getElementById("actionImg");
            aDiv.append(section);
        }

        else if(Detail.genre == "comedy")
        {
            const aDiv = document.getElementById("comedyImg");
            aDiv.append(section); 
        }

        else if(Detail.genre == "romance")
            {
                const aDiv = document.getElementById("romanceImg");
                aDiv.append(section);
            }
    })
};

showMovieDetails();