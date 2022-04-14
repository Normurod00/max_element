// Найти самый дорогой товар из массива и показать
let arr_cars = [
    {
        name: 'malibu',
        price: 30000
    },
    {
        name: 'matiz',
        price: 3000
    },
    {
        name: 'spark',
        price: 7500
    },
    {
        name: 'gentra',
        price: 140000
    },
    {
        name: 'santaferro',
        price: 80000
    },
    {
        name: 'tahoe',
        price: 80000
    },
    {
        name: 'tesla model y',
        price: 30000
    }
]

    let maxSum = []

    arr_cars.map(item => item.price ? maxSum.unshift(item.price) : console.log(''))
    max = Math.max(...maxSum)
    console.log(max);