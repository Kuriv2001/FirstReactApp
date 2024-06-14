const countriesService = require("../services/CountriesService");

const getAllCountries = async (req, res) => {
    try {
      const countries = await countriesService.getAllCountries();
      res.status(200).json(countries);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch countries' });
    }
  };
  
module.exports = {
    getAllCountries,
};