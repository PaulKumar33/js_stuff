//this script is simply to get used to JS syntax. Also to help me organize my groceries :)


//class methods

function ProduceObject(name, quantity, dateBought, bestBefore){
    var fName = name;
    var fQuantity = quantity;
    var fDateBought = dateBought;
    var fBestBefore = bestBefore;

    groceryObject = {
        name: fName,
        quant: fQuantity,
        dateb: fDateBought;
        bestb: fBestBefore;
    }

    return groceryObject;
}

function DisplayInfo(obj){
    console.log("Information for: ", obj.name);
    console.log("Quantity: ", obj.quant);
    console.log("You got this item: ", obj.dateb);
    console.log("This item is best before: ", obj.bestb)
}

//groceryArray is the main grocery array which stores
//everything that is present. SHould be an array of objects

//example ar = [obj1, obj2, obj3, ...... ,objn]
var groceryArray = [];

function PopulateMainArray(newItem){
    //this method is the main  population method

}



//main block