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

        dateb: {
            year: dateBought.year,
            month: dateBought.month,
            day: dateBought.day
        },

        bestb: {
            year: dateBought.year,
            month: dateBought.month,
            day: dateBought.day
        }
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

function DateConstructor(datePosition){
    /*
    if datePosition == 0 -> get the current date
    if datePosition == 1 -> construct a later date
    if datePosition == 2 -> get current time within end date and start date
    */
   if(datePosition == 0){
       var todaysDate = new Date();
       var returnDate = todaysDate.getFullYear()+"/"+todaysDate.getMonth()+"/"+todaysDate.getDay()
       return todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDay();
   }
}

function StringConstructor(headerLength, stringEntry){
    //this function builds a string line to be displayed
    var stringLength = stringEntry.length;
    if(headerLength > stringLength){
        //this needs to be satisphied
        var lengthDifference = headerLength - stringLength;
        if(lengthDifference % 2 != 0){
            //there is a remainder
            var endLengths = (lengthDifference-1)/2;

            var endLeft= endLengths;
            var endRight = endLengths+1;
            
            var leftString = ""+"=".repeat(endLeft-1)+ " ";
            var rightStirng = " "+"=".repeat(endRight-1);            
        }
        else if(lengthDifference%2==0){
            //this block is for even numbers
            var endLengths = lengthDifference/2;
            var leftString = ""+"=".repeat(endLengths-1)+" ";
            var rightStirng = " "+"=".repeat(endLengths-1);
        }
        var constructedString = leftString+stringEntry+rightStirng;
        return constructedString;
    }
}

function DisplayAllElements(){
    //this method displays all the groceries by name,
    //can access them after
    //later add functionality for order based on expiry
    //or order on most use (involve ML!!)
    //var names = []
    var lengthVal = "=================".length
    console.log("=================");
    console.log("=Available items=");
    for(var index = 0; index < groceryArray.length; index ++){
        console.log(StringConstructor(lengthVal,groceryArray[index].name));
    }
    console.log("=================");
}

//main block
var year_, month_, day_ = DateConstructor(1);
var testObject = new ProduceObject("carrot",
2, {year: year_, month: month_, day:day_}, {year: year_, month: month_, day:day_});
var testObject2 = new ProduceObject("brocoli",
1, {year: year_, month: month_, day:day_}, {year: year_, month: month_, day:day_})
console.log(testObject);
PopulateMainArray(testObject);
PopulateMainArray(testObject2);
console.log("this is a test")
console.log(groceryArray[1].name);
ParseMainArray('carrot');

DisplayAllElements();


