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
        const recUl = document.getElementById("recommended");
        const li = document.createElement("li");
        const section = document.createElement("section");
        li.append(section);
        recUl.append(li);

        const h1 = document.createElement("h1");
        h1.innerHTML = Detail.title;
        section.append(h1);

        const image = document.createElement("img");
        image.src = Detail.image;
        section.append(image);

        const p1 = document.createElement("p");
        p1.innerHTML = Detail.cast;
        section.append(p1);

        const p2 = document.createElement("p");
        p2.innerHTML = Detail.year;
        section.append(p2);

        const p3 = document.createElement("p");
        p3.innerHTML = Detail.rating;
        section.append(p3);    
        
    })
};

showMovieDetails();