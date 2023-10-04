import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Pizza Parque Caldas</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Nuestro Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>Treinta años siriviendo la mejor pizza en la ciudad!</p>
          <ul className="pizzas">
            {pizzas.map((pizza)=> (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>  
      ) : <p>Estamos construyendo nuestro menu 👷🏾‍♂️</p>}       
    </main>
  );
}

function Pizza({pizzaObj}) {
  // console.log(pizzaObj)
  // if (pizzaObj.soldOut) return null; //conditional rendering using multiple returns
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>Price:${pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("Estamos abiertos");
  // else alert("Nos vemos manana");
  
  // if (!isOpen)
  //   return(
  //     <p>Te esperamos entre {openHour} de la manana y {closeHour}de la noche</p>
  //   );

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />  
      ) : (<p>Te esperamos entre {openHour} de la manana y {closeHour} de la noche</p>)
      }
    </footer>
  );
  //   return React.createElement("footer", null, "Horas de Servicio"); The old way of writing React
}

function Order({closeHour, openHour}){
  return (
    <div className="order">
      <p>Estamos en servicio hasta las {closeHour}</p>
      <button className="btn">Pide a Domicilio</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
