const moment = require("moment");
const formats = [
        "X",
        "YYYY-MM-D",
        "D-MM-YYYY",
        "MMMM D, YYYY",
        "MMMM D YYYY",
        "MMM D, YYYY",
        "MMM D YYYY",
        "D MMMM YYYY",
        "D MMMM YY",
        "D MMM YYYY",
        "D MMM YY",
    ];

const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const parseTime = function(input) {
    const date = moment(input,formats, true);
    const output = {
        unix: null,
        utc: null,
    };
    
    if (date.isValid()) {
        output.unix = +moment.unix(date)/1000;
        output.utc = weekday[date.day()] + ', ' + date.format("D MMM YYYY hh:mm:ss");
    }
    
    return output;
};

module.exports = parseTime;