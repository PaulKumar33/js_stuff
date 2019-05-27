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
        dateb: fDateBought,
        bestb: fBestBefore,
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
/* further note the following:

obj has the following structure
{
    name: "some name",
    quantity: "some quantity",
    date bought: "some date",
    best before: "some date"
}

the elements in this array show correspond to the key
*/
var groceryArray = new Array();

function PopulateMainArray(newItem){
    //this method is the main  population method
    groceryArray.push(newItem)
}

function ParseMainArray(arrayName){
    var mainAr = groceryArray;
    for(let element in groceryArray){
        let el =  groceryArray[element];
        if(el.name == arrayName){
            //flow for accessing the element
            console.log("Yes this exists!")

        }
    }
}

//main block

var testObject = new ProduceObject("carrot",
2, 'today', 'tomorrow');
var testObject2 = new ProduceObject("brocoli",
1, 'today', 'tomorrow')
console.log(testObject);
PopulateMainArray(testObject);
PopulateMainArray(testObject2);
console.log("this is a test")
console.log(groceryArray[1].name);
ParseMainArray('carrot');


