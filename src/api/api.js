import axios from 'axios';

export const fetchDrinksByCategory = async (category) => {
  try {
    const response = await axios.get(`https://thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    return response.data.drinks;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
