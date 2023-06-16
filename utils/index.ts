export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '432f15284amsh7c7206ca4c5a665p165586jsnf591cd45f1ac',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };
    
    const response = await fetch(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });
    const result = await response.json();

    return result;
};

export const calculteCarRent = (city_mpg: number, year: number) => {
    const basePriceDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    
    const rentalRatePerDay = basePriceDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}
