import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import pizzaData from './data/pizzaData.json';

function App() {
    return (
        <div className={"container"}>
            <Header />
            <Menu/>
            <Footer/>
        </div>
    )
}

function Header() {
    return (
        <header className="header">
            <h1 className={"header"}>React Pizza Co.</h1>
        </header>
    )
}

function Menu() {
    return (
        <section>
            <main className="menu">
                <h2>Our Menu</h2>
                {pizzaData.pizzas.map((pizza, i) => {
                    return (
                        <Pizza key={i}
                               name={pizza.name}
                               photoName={pizza.photoName}
                               ingredients={pizza.ingredients}
                               price={pizza.price} />
                        )
                })}
            </main>
        </section>
    )
}

function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.photoName} alt={props.name}/>
            <h3>{props.name}</h3>
            <p>{props.ingredients}</p>
            <p>{props.price}</p>
        </div>
    )
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
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<React.StrictMode><App/></React.StrictMode>)