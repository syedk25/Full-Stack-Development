

let date = new Date();

let dayNumber = date.getDay();

let theDayIs;

let quote;

switch(dayNumber){

    case 0:
        theDayIs = "Sunday";
        quote = "Time to chillax"
        break;

    case 1:
        theDayIs = "Monday";
        quote = "Monday is a day of Work";
        break;

    case 2:
        theDayIs = "Tuesday";
        quote = "Tuesday is a Second day of Work";
        break;
    
    case 3:
        theDayIs = "Wednesday";
        quote = "Wednesday is a Third day of Work";
        break;
            
            
    case 4:
        theDayIs = "Thursday";
        quote = "Thursday is a Meeting day of Work";
        break;
        
    case 5:
        theDayIs = "Friday";
        quote = "Weekend is almost here.....";
        break;
        
    case 6:
        theDayIs = "Saturday";
        quote = "Time to party";
        break;
}


    let spanOfWeekday = document.getElementById("weekday");
    spanOfWeekday.innerHTML =  `${theDayIs}`;

    let spanOfQuote = document.getElementById("quote");
    spanOfQuote.innerHTML = `${quote}`;