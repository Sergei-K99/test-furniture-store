'use strict'

let selected;
function clicMe(obj) {
    if (selected == undefined) {
        selected = obj;
        selected.style.background = "#FBF9F3";
    }
    else{
        selected.style.background = "#ffffff";
        selected = obj;
        selected.style.background = "#FBF9F3"
    }
    
}