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
 
       return pizzaDiv;
    }
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

