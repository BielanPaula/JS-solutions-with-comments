let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
let birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];


function gooseFilter(, geese) {  //create a function with 2 arguments(birds and geese)
     var name = []; //declaration an empty array
     for (let i=0; i<birds.length; i++) { //loop through each items (i) from birds
       if (geese.includes(birds[i])) {  //if some item (i) from birds is included in geese array
       name.push(birds[i])  //then add this item (i) to name's array
       }
     }
     return name; //return name's array
};

gooseFilter(birds, geese);  //invocation our gooseFilter's function

//["African", "Pilgrim", "Toulouse"]
