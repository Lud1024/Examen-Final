import React from 'react';
import '../styles/App.css'; // Asegúrate de importar los estilos si es necesario

const Card = ({ cocktail, onSelect }) => {
    return (
        <div className="card" onClick={() => onSelect(cocktail)}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="card-image" />
            <h3 className="card-title">{cocktail.strDrink}</h3>
        </div>
    );
};

export default Card;
