// let arrayOfFruits = {
//   "1":"apple",
//   "2":"mango",
//   "3":"banana",
// }
// let arrayOfFruits = ["apple" ,"mango","banana"];
// localStorage.setItem("arr" , JSON.stringify(arrayOfFruits)) ;
// let arr2 = localStorage.getItem("arr");
// let final = JSON.parse(arr2);
// console.log(final[0]) ;

// ******************************************************************

window.onload = function() {
  displayArray() ;
}

collectToDo = ()=>{
  
  let inputToDo = document.getElementById('textarea').value ;
  localStorage.pushArrayItem("arrayToDo" , inputToDo) ;
  document.getElementById('textarea').value =" "  ;
  displayArray();
  //  localStorage.clear();
}
{/* <div class="container">
      <div class="output-todo">
        <div class="text-todo">hello world</div>

        <button type="button" id="cross-button">
          x
        </button>
      </div>
    </div> */}

displayArray = ()=>{
  let arrayToDisplay = localStorage.getArray("arrayToDo") ;
  let finalOutput = "<ul class='list-group'>" ;

  for(let i = 0 ; i< arrayToDisplay.length ; i++){
    finalOutput += "<li class='output-todo'" + "id='"+i+"'>" ;
    finalOutput+= "<div class='text-todo'>" + i+"." + arrayToDisplay[i] + "</div>" ;
    finalOutput+= "<button class='cross-button' type='button'" +"id='"+i+"'"+" onClick='removeToDo(this.id)'>X </button>";
    finalOutput+= "</li>";
}
  finalOutput+="</ul>"
  document.getElementById('container').innerHTML = finalOutput ;

}

function removeToDo(click_id){
  removeFromArray(click_id) ;
}

function removeFromArray(element) {
  let arrayToDisplay = localStorage.getArray("arrayToDo") ;
  arrayToDisplay.splice(element,1) ;
  localStorage.setItem("arrayToDo",JSON.stringify(arrayToDisplay));
  displayArray() ;
}

Storage.prototype.getArray = function(arrayName) {
  var thisArray = [];
  var fetchArrayObject = this.getItem(arrayName);
  if (typeof fetchArrayObject !== 'undefined') {
    if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
  }
  return thisArray;
}

Storage.prototype.pushArrayItem = function(arrayName,arrayItem) {
  var existingArray = this.getArray(arrayName);
  existingArray.push(arrayItem);
  this.setItem(arrayName,JSON.stringify(existingArray));
}

Storage.prototype.popArrayItem = function(arrayName) {
  var arrayItem = {};
  var existingArray = this.getArray(arrayName);
  if (existingArray.length > 0) {
    arrayItem = existingArray.pop();
    this.setItem(arrayName,JSON.stringify(existingArray));
  }
  return arrayItem;
}

Storage.prototype.shiftArrayItem = function(arrayName) {
  var arrayItem = {};
  var existingArray = this.getArray(arrayName);
  if (existingArray.length > 0) {
    arrayItem = existingArray.shift();
    this.setItem(arrayName,JSON.stringify(existingArray));
  }
  return arrayItem;
}

Storage.prototype.unshiftArrayItem = function(arrayName,arrayItem) {
  var existingArray = this.getArray(arrayName);
  existingArray.unshift(arrayItem);
  this.setItem(arrayName,JSON.stringify(existingArray));
}

Storage.prototype.deleteArray = function(arrayName) {
  this.removeItem(arrayName);
}



// .pushArrayItem(arrayName,arrayItem); -> adds an element onto end of named array
// .unshiftArrayItem(arrayName,arrayItem); -> adds an element onto front of named array
// .popArrayItem(arrayName); -> removes & returns last array element
// .shiftArrayItem(arrayName); -> removes & returns first array element
// .getArray(arrayName); -> returns entire array
// .deleteArray(arrayName); -> removes entire array from storage

