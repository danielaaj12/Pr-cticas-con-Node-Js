const date = require('./myModule.js');
const timeTo = date.timeTo('11/02/2019');
// if json just put .json
console.log(`the date is ${date.get()}`);
console.log(`
${timeTo.rMonths} months,
${timeTo.rDays} days,
${timeTo.rHours} hours,
${timeTo.rMinutes} minutes,
and ${timeTo.rSeconds} seconds,
and ${timeTo.rMilliseconds} milliseconds until my birthday
`);