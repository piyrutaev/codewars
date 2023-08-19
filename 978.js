function asd(word) {
    var letters =  {
        "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
        "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
        "G": "Golf",   "H": "Hotel",   "I": "India",
        "J": "Juliett","K": "Kilo",    "L": "Lima",
        "M": "Mike",   "N": "November","O": "Oscar",
        "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
        "S": "Sierra", "T": "Tango",   "U": "Uniform",
        "V": "Victor", "W": "Whiskey", "X": "X-ray",
        "Y": "Yankee", "Z": "Zulu"
      }
    
    let b = '';
    for(let i = 0; i < word.length; i++) {
        b += letters[word[i].toUpperCase()]
        b += ' ';
    }
    return b.trim();
    
}

function qwe() {
    console.log(asd("hi")); 
}
            

qwe();
