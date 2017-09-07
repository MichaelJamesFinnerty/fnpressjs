window.addEventListener("DOMContentLoaded", function (event) {
   
  console.log("temp_eng engaged")
  var myJson = JSON.parse(first_data);
  parse(myJson);

});


function parse(obj, indents) {

  if (!indents) {indents = 0;}

  //console.log("\nParsing");
  if (typeof(obj) === "string") {
      //write string
      console.log(Array(indents).join("\t"), obj);
      insert_graf(obj)

  } else if (Array.isArray(obj)) {
      //parse items in array
      for (f in obj) {parse(obj[f], indents);}

  } else if (typeof(obj)==="object"){
      //write the key as heading, then parse the value
      indents++;
      for (k in Object.keys(obj)) {
          var key = Object.keys(obj)[k];
          console.log(Array(indents).join("\t"), key);
          insert_heading(key, indents);
          parse(obj[key], indents);
      }
  }
}

function insert_heading(header, indents) {
    var newHeading = document.createElement("h"+indents);
    newHeading.innerHTML = header;
    document.body.appendChild(newHeading);
}


function insert_graf(graf) {
    var newGraf = document.createElement("p");
    newGraf.innerHTML = graf;
    document.body.appendChild(newGraf);
}


function graf_style(){
    
}