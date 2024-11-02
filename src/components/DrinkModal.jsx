import React from 'react';
import '../styles/DrinkModal.css';

const DrinkModal = ({ show, cocktail, onClose }) => {
    if (!show || !cocktail) return null;

    // Función para mostrar ingredientes con sus medidas
    const renderIngredients = () => {
        const ingredients = [];
        for (let i = 1; i <= 15; i++) {
            const ingredient = cocktail[`strIngredient${i}`];
            const measure = cocktail[`strMeasure${i}`];
            if (ingredient) {
                ingredients.push(
                    <li key={i} className="ingredient-item">
                        {measure ? `${measure} ` : ''}{ingredient}
                    </li>
                );
            }
        }
        return ingredients;
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close-button">×</button>
                <h2 className="modal-title">{cocktail.strDrink}</h2>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="modal-image" />
                <p className="modal-description"><strong>Categoría:</strong> {cocktail.strCategory}</p>
                <p className="modal-description"><strong>Instrucciones:</strong> {cocktail.strInstructions}</p>
                <p className="modal-ingredients"><strong>Ingredientes:</strong></p>
                <ul>
                    {renderIngredients()}
                </ul>
            </div>
        </div>
    );
};

export default DrinkModal;
