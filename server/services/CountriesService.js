const axios = require('axios');

const getAllCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countries = response.data.map((country) => {
      // Safely access country attributes
      const countryName = country.name && country.name.common ? country.name.common : null;
      const countryCurrency = country.currencies ? Object.values(country.currencies)[0].name : null;
      const countryFlag = country.flags.png ? country.flags.png : null; 

      return {
        name: countryName,
        currency: countryCurrency,
        flag: countryFlag,
      };
    });
    return countries;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

module.exports = {
  getAllCountries,
};
