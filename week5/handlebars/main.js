const people = [
  { firstName: "Basel", lastName: "Omar" },
  { firstName: "zahra", lastName: "Aqel" },
  { firstName: "shams", lastName: "basel" },
];

// render data by funtion render 
const render = function (data) {                // pass data 
  const source = $("#people-templete").html();  // templet script id 
  const templete = Handlebars.compile(source);  
  for(let person of data){
    const someHtml = templete(person);
    $("#people").append(someHtml);              // div outside script 
  };
  }
  

render(people);     // pass people array as data for render function to view people elements


// for steps :
//      1. const source = $("ScriptID").html();
//      2. const templete = Handlebars.compile(source);
//      3. const someHtml = templete(person); ==> there ****
//      4.  $("tagContainer").append(someHtml);



// ****
// there we can pass all the array and we send the keys we want to view inside script in html code like {{firstName}}
// or we can pass just 1 elememt by:
// define any variable like "name"
// i.e => {name: person.firstName} and we write name as parameter to script 

/*
// render data by funtion render 
const render = function (data) {                // pass data 
  const source = $("#people-templete").html();  // templet script id 
  const templete = Handlebars.compile(source);  
  for(let person of data){
    const someHtml = templete({nameofperson: person.firstName});
    $("#people").append(someHtml);              // div outside script 
  };
  }
  
*/

/*
<!-- Script-->
    <script id="people-templete" type="text/x-handlebars-template">
      <p>{{nameofperson}}</p>
    </script>
    <!-- tag container for script-->
    <div id="people"></div>
*/






//--------------------- handlebar method --------------
/* 
if we want to make for inside script not inside js file
using each 
and we pass an object to templete 
i.e =>     const someHtml = templete({people: data}); object has people as key and we pass data array for this key 

*/