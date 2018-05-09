function setValue(){
    var c = document.getElementById("setVal").value;
   // document.getElementById("practice").innerHTML=a;

    var a = document.createElement("td");
    var b =document.createTextNode(c);
    a.appendChild(b);
    document.getElementById("abc").appendChild(a);}