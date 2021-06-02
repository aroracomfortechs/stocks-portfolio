
const initialState = {
    data: [
        { scrip: 'AADR', quantity: 420, price: 50.30, avgCost: 41.75, investedAmount: 17952.07, portfolioValue: 22.06, pandl: 3676.93, return: 20.48 },
        { scrip: 'MFEM', quantity: 210, price: 23.20, avgCost: 22.50, investedAmount: 4725.84, portfolioValue: 5.81, pandl: 146.16, return: 3.09 },
        { scrip: 'JPEM', quantity: 328, price: 52.50, avgCost: 56.70, investedAmount: 18597.60, portfolioValue: 22.86, pandl: -1377.60, return: -7.41 },
        { scrip: 'KEMQ', quantity: 801, price: 20.40, avgCost: 22.24, investedAmount: 17811.04, portfolioValue: 21.89, pandl: -1470.64, return: -8.26 },
        { scrip: 'KLDW', quantity: 523, price: 32.90, avgCost: 26.32, investedAmount: 13765.36, portfolioValue: 16.92, pandl: 3441.34, return: 25.00 },
        { scrip: 'KOIN', quantity: 335, price: 25.40, avgCost: 25.40, investedAmount: 8509.00, portfolioValue: 10.46, pandl: 0, return: 0.00 },
    ]
}

export default function (state = initialState, action) {
    return state;
}