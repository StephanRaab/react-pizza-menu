import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data/pizzaData.json";

function App() {
  return (
    <div className={"container"}>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 className={"header"}>React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <section>
      <main className="menu">
        <h2>Our Menu</h2>
        <ul className="pizzas">
          {pizzaData.pizzas.map((pizza, i) => (
            <Pizza pizza={pizza} key={i + pizza.name} />
          ))}
        </ul>
      </main>
    </section>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizza.photoName} alt={props.pizza.name} />
      <div>
        <h3>{props.pizza.name}</h3>
        <p>{props.pizza.ingredients}</p>
        <span>{props.pizza.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour < closedHour;

  return (
    <footer className={"footer"}>
      {new Date().toLocaleTimeString()}, we're currently open.
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
