import cars from '../data/cars.json';
import countries from '../data/countries';
import brands from '../data/brands';

export default class LstDataService  {
    getCars = () => {
        return cars.map(this._transformCar);
    }
    getCar = (id) => {
        return this._transformCar(cars.id);
    }
    getCountries = () => {
        return countries.map(this._transformCountry)
    }
    getCountriy = (id) => {
        return this._transformCountry(countries[id])
    }
    getBrands = () => {
        return brands.map(this._transformBrand);
    }
    getBrand(id) {
        return this._transformBrand(brands[id])
    }

    _transformCar(car) {
        return {
            image:car.image,
            details: {
                id: car.id,
                name: car.name,
                foundedDate: car.foundedDate,
                headquarters: car.headquarters,
            }
        }
    }

    _transformBrand(brand) {
        return {
            image:brand.image,
            details: {
                id: brand.id,
                name: brand.name,
                founded: brand.founded,
                website: brand.website,
            }
        }

    }

    _transformCountry(country) {
        return {
            image:country.image,
            details: {
                id: country.id,
                name: country.name,
                capital: country.capital,
                population: country.population,
            }
        }
    }
    
}
