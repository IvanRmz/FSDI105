var main = document.getElementsByTagName("main");

var h1 = document.createElement("H1");
var text = document.createTextNode("Hello World!!!");
h1.append(text);

main[0].appendChild(h1);
console.log(h1);

var ul = document.createElement("ul");

for(var i = 0 ; i <= 3 ; i++) {
    var li = document.createElement("li");
    var textLi = document.createTextNode("Element " + i);
    li.append(textLi);
    ul.append(li);
}

main[0].appendChild(ul);

table - document.getElementById("table");
var tr = document.createElement("tr");
var td = document.createElement("td");
for(var i = 0 ; i<= 5 ; i++){
    var tr = document.createElement("tr");
    for(var j = 0 ; j <=5 ; j ++){
        var td = document.createElement("td");
        var textTab = document.createTextNode("cell");
        td.appendChild(textTab);
        td.setAttribute("class","bordered");
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
table.setAttribute("class","bordered");
