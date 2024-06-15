const countriesService = require("../services/CountriesService");

const getAllCountries = async (req, res) => {
    try {
        const countries = await countriesService.getAllCountries();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch countries' });
    }
};

const getCountryByName = async (req, res) => {
    try {
        const country = await countriesService.getCountryByName(req.params.name);
        if (country) {
            res.status(200).json(country);
        } else {
            res.status(404).json({ error: 'Country not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch country' });
    }
};

module.exports = {
    getAllCountries,
    getCountryByName,
};
