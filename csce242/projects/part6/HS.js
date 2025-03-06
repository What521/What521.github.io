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

        if(Detail.genre == action)
        {
        const aDiv = document.getElementById("actionImg");
        const section = document.createElement("section");
        aDiv.append(section);

        const a = document.createElement("a");
        a.href = Detail.link;

        const h1 = document.createElement("h1");
        h1.innerHTML = Detail.title;
        a.append(h1);
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
        }

        else if(Detail.genre == comedy)
        {
            const aDiv = document.getElementById("comedyImg");
            const section = document.createElement("section");
            aDiv.append(section);
    
            const a = document.createElement("a");
            a.href = Detail.link;
    
            const h1 = document.createElement("h1");
            h1.innerHTML = Detail.title;
            a.append(h1);
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
        }

        else if(Detail.genre == romance)
            {
                const aDiv = document.getElementById("romanceImg");
                const section = document.createElement("section");
                aDiv.append(section);
        
                const a = document.createElement("a");
                a.href = Detail.link;
        
                const h1 = document.createElement("h1");
                h1.innerHTML = Detail.title;
                a.append(h1);
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
            }
    })
};

showMovieDetails();