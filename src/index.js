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
  //   const pizzas = []; //  this is just here for testing

  return (
    <section>
      <main className="menu">
        <h2>Our Menu</h2>

        {pizzas.length > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. All from our stone oven, all organic,
              all local, all delicious.
            </p>

            <ul className="pizzas">
              {pizzas.map((pizza, i) => (
                <Pizza pizza={pizza} key={i + pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <p>We're still working on our menu. Please come back later.</p>
        )}
      </main>
    </section>
  );
}

function Pizza({ pizza }) {
  if (pizza.soldOut) return null; // this is just temporary for now

  return (
    <li className="pizza">
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
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
          <Order closingTime={closedHour} />
        ) : (
          <p>
            We're open between {openHour}:00 - {closedHour}:00 -- daily!
          </p>
        )}
      </div>
    </footer>
  );
}

function Order({ closingTime }) {
  return (
    <div className="order">
      <p>We're open until {closingTime}:00. Come visit us or order online! </p>

      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
