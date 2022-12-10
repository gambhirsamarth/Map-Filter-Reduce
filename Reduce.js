// In the example below we create a new object that contains as a key the name of the stock and as a value the frequency of the stock.

const stocks = ['TSLA', 'PLTR', 'TSLA', 'AAPL', 'PLTR', 'TSLA'];

const result = stocks.reduce((stockFreq, stock) => {
    if(stockFreq.hasOwnProperty(stock)) {
        stockFreq[stock]++;
    } else {
        stockFreq[stock] = 1;
    }

    return stockFreq;
}, {});

// { TSLA: 3, PLTR: 2, AAPL: 1 }
console.log(result);




//In the example below we create a new string that contains the first two letters of each day.

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const newDay = days.reduce((buffer ,day) => {
    buffer += day.substring(0,2);
    return buffer;
}, "");

// SuMoTuWeThFrSa
console.log(newDay);
