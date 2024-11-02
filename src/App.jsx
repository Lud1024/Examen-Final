import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import DrinkModal from './components/DrinkModal';
import './styles/App.css';

const App = () => {
    const [cocktails, setCocktails] = useState([]);
    const [selectedCocktail, setSelectedCocktail] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchCocktails = async () => {
            try {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
                const data = await response.json();
                setCocktails(data.drinks);
            } catch (error) {
                console.error('Error al obtener la lista de cócteles:', error);
            }
        };

        fetchCocktails();
    }, []);

    const handleSelectCocktail = async (cocktail) => {
        try {
            const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`);
            const data = await response.json();
            if (data.drinks && data.drinks.length > 0) {
                setSelectedCocktail(data.drinks[0]);
            }
            setShowModal(true);
        } catch (error) {
            console.error('Error al obtener detalles del cóctel:', error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCocktail(null);
    };

    return (
        <div className="app">
            <h1>Desarrollo Web 2024 - UMG</h1>
            <h3>Examen Final - Ludvin Marco Tulio Alonzo López - 1790-21-3759</h3>
            <div className="cocktail-grid">
                {cocktails.map(cocktail => (
                    <Card key={cocktail.idDrink} cocktail={cocktail} onSelect={handleSelectCocktail} />
                ))}
            </div>
            <DrinkModal show={showModal} cocktail={selectedCocktail} onClose={handleCloseModal} />
        </div>
    );
};

export default App;
