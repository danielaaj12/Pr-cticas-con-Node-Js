function getDate() {
    const date = new Date();
    const mm = !((date.getMonth() + '').length - 1) ? '0' + date.getMonth() : date.getMonth();
    const dd = !((date.getDay() + '').length - 1) ? '0' + date.getDay() : date.getDay();
    return `${mm}/${dd}/${date.getFullYear()}`;
}

function timeUntil(date) {
    let now = new Date();
    let then = new Date(date);
    let rMonths = then.getMonth() - now.getMonth();
    let rDays = now.getDate() - then.getDate();
    let rMilliseconds = then.getTime() - now.getTime();
    let rSeconds = parseInt((then.getTime() - now.getTime()) / 1000);
    let rMinutes = parseInt(rSeconds / 60);
    let rHours = parseInt(rMinutes / 60);
    return {
        rMonths,
        rDays,
        rMinutes,
        rHours,
        rSeconds,
        rMilliseconds
    };
}

module.exports = {
    get: getDate,
    timeTo: timeUntil
};