class pizza
{
    constructor(title, ingredients, sauce, cheese, price, image)
    {
        this.title = title;
        this.ingredients = ingredients; 
        this.sauce = sauce;
        this.cheese = cheese;
        this.price = price;
        this.image = image;    
    }

    get item ()
    {
       const pizzaDiv = document.createElement("div");
       pizzaDiv.classList.add("Pizza");

       const flavor = document.createElement("h3");
       flavor.innerHTML = this.title;
       pizzaDiv.appendChild(flavor);

       const pic = document.createElement("img");
       pic.src = this.image;
       pizzaDiv.appendChild(pic);

       flavor.onclick = () => displayPizzaDetails(this);
       pic.onclick = () => displayPizzaDetails(this);
 
       return pizzaDiv;
    }
};

const displayPizzaDetails = (pizza) => {


    const pizzaDetails = document.getElementById("pizza-details");

    const pizzaDetailsC = document.createElement("div");
    pizzaDetails.innerHTML = "";

    const ul = document.createElement("ul");

    const h3 = document.createElement("h3");
    h3.textContent = pizza.title;
    ul.append(h3);

    const li1 = document.createElement("li");
    li1.textContent = `Ingredients: ${pizza.ingredients}`;
    ul.append(li1);
    
    const li2 = document.createElement("li");
    li2.textContent = `Sauce: ${pizza.sauce}`;
    ul.append(li2);
    
    const li3 = document.createElement("li");
    li3.textContent = `Cheese: ${pizza.cheese}`;
    ul.append(li3);
    
    const li4 = document.createElement("li");
    li4.textContent = `Price: ${pizza.price}`;
    ul.append(li4);
    
    pizzaDetailsC.append(ul);

    const img = document.createElement("img");
    img.src = pizza.image;
    pizzaDetailsC.append(img);

    pizzaDetails.append(pizzaDetailsC);

    pizzaDetails.style.display = "block";
    document.getElementById("close").style.display="block";
};

const createPizzaDiv = () =>
{
    let pizzas = [];
    let pizzaList = document.getElementById("pizza-list");

    pizzas.push(new pizza("Hawaiian", "Pineapple, Bacon", "Pizza Sauce", "Mozzarella", "$20","images/hawaiian.jpg"));
    pizzas.push(new pizza("Buffalo Chicken Ranch", "Chicken, Onions", "Wing Sauce", "Mozzarella", "$19.5","images/ranch.jpg"));
    pizzas.push(new pizza("Margarita", "Basil, Tomatoes", "Extra Virgin Olive Oil", "Fresh Mozzarella", "$19.2","images/margarita.png"));
    pizzas.push(new pizza("Pepperoni", "Pepperoni, Pork and beef salami", "Tomato Sauce", "Mozzarella", "$19","images/pepperoni.jfif"));
    pizzas.push(new pizza("Veggie", "Bell peppers, Onions", "Tomato Sauce", "Mozzarella", "$18.5","images/veggie.png"));


    for(let i in pizzas)
    {
    pizzaList.append(pizzas[i].item);
    }
};

window.onload = () => createPizzaDiv ();

document.getElementById("close").onclick = () =>
{
    document.getElementById("pizza-details").style.display = "none";
    document.getElementById("close").style.display = "none";
}