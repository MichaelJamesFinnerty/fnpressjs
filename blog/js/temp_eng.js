//build json into html contents
function build_page(obj, indents) {

  if (!indents) {indents = 0;}

  //arrays
  if (Array.isArray(obj)) {
      //parse items in array
      for (f in obj) {build_page(obj[f], indents);}

  //objects
  } else if (typeof(obj)==="object"){
      //write the key as heading, then parse the value
      indents++;
      for (k in Object.keys(obj)) {
            //console.log(typeof(indents), indents);
          var key = Object.keys(obj)[k];
            //console.log(Array(indents).join("\t"), key);
          insert_heading(key, indents);
          build_page(obj[key], indents);
      }
  //strings
  } else if (typeof(obj) === "string") {
      //write string;
        //console.log(Array(indents).join("\t"), obj);
      if (obj) {insert_graf(obj, indents)};

  } 
};

//insert object keys as headings
function insert_heading(header, indents) {
    var newHeading = document.createElement("h"+indents);
    newHeading.innerHTML = header;
    newHeading.className = "header"+indents;
    
    var indentedHeading = element_indent(newHeading, indents)
    document.body.appendChild(newHeading);
};

//insert strings as grafs
function insert_graf(graf, indents) {
    
    if (graf.slice(0,2) === "#!") {
        var newGraf = document.createElement("code");
        newGraf.className = "code";
        graf = graf.slice(2);
    } else {
        var newGraf = document.createElement("p");
        newGraf.className = "graf";
    }
    newGraf.innerHTML = graf;    
    var indentedGraf = element_indent(newGraf, indents);
    document.body.appendChild(indentedGraf);
};

//apply element indents to everything
function element_indent(element, indents){
  if (!indents) {indents = 0};
  //console.log("Styling element\t",eval(indents*5)+"px");
  element.style.marginLeft = eval(indents*12)+"px";
  return element;
};