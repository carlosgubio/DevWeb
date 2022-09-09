function mais() {
    var x = document.createElement("ul");
    var y = document.createElement("li");
    var t = document.createTextNode("input");
    x.appendChild(y);
    y.appendChild(t);
    document.body.appendChild(x);
  }