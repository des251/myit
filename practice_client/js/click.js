window.onload = function() {
    var elements = document.getElementsByClassName("reveal");
    for(var i = 0; i < elements.length; i++) {
        var elt = elements[i];
        var title = elt.getElementsByClassName("handle")[0];
        title.onclick = function() {
            if (elt.className == "reveal") elt.className = "revealed";
            else if (elt.className == "revealed") elt.className = "reveal";
        }
    }
};
