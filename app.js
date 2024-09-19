
var input=document.querySelector("#input");
var ol=document.querySelector("#ol");

function sum(){
    for(var i=0; i<array.length; i++){
        ol.innerHTML+=`<li>${array[i]} <button class="btn1" onclick="deletebtn(${i})">Delete</button> <button class="btn2" onclick="editbtn(${i})">Edit</button></li>`
           }}



var array=[];   
function sum2(){
    ol.innerHTML="";
    array.push(input.value);
    console.log(array);
sum();
    input.value="";
}

//for deleting
function deletebtn(i){
    ol.innerHTML="";
    console.log("Task "+array[i]+" deleted");
    array.splice(i,1);
    console.log(array);
    sum();
    
    
}

function editbtn(i){
    ol.innerHTML="";
    console.log("Task "+array[i]+" edited");
  var edit=prompt("Enter new value");
  array.splice(i,1,edit);
  sum();
    
}