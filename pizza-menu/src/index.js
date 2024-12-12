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
  const pizzas = pizzaData.pizzas;

  return (
    <section>
      <main className="menu">
        <h2>Our Menu</h2>

        {pizzas.length > 0 ? (
          <ul className="pizzas">
            {pizzas.map((pizza, i) => (
              <Pizza pizza={pizza} key={i + pizza.name} />
            ))}
          </ul>
        ) : (
          <p>We're still working on our menu. Please come back later.</p>
        )}
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
  const closedHour = 21;
  const isOpen = hour >= openHour && hour < closedHour;

  return (
    <footer className={"footer"}>
      <div className="order">
        {isOpen ? (
          <p>
            We're open until {closedHour}:00. Come visit us or order online!{" "}
          </p>
        ) : (
          <p>
            We're open between {openHour}:00 and {closedHour}:00 every day of
            the week!
          </p>
        )}

        <button className="btn">Order Now</button>
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
