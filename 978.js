function asd(day, num) {
    return {
        'Monday': num === 12,
        'Tuesday': num > 95,
        'Wednesday': num === 34,
        'Thursday': num === 0,
        'Friday': num % 2 === 0,
        'Saturday': num === 56,
        'Sunday': Math.abs(666), 
    }[day]
    
}

function qwe() {
    console.log(asd("Monday", 12)); 
}
            

qwe();

// Monday --> 12

// Tuesday --> numbers greater than 95

// Wednesday --> 34

// Thursday --> 0

// Friday --> numbers divisible by 2

// Saturday --> 56

// Sunday --> 666 or -666