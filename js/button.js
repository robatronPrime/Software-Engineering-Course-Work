"use strict"

document.getElementById('wbtButton').onclick = function() {showPage()}

function showPage() {
    document.getElementsByClassName('chart').classList.toggle("show");
}

console.log("Hello world");
function selectCategory(listItem) {
    var oldActiveItem = findEl(listItem.parentElement, '.active');
    if (oldActiveItem) oldActiveItem.classList.remove('active');

    listItem.classList.add('active');
  }

  var txt1 = document.createElement("p");
      txt1.innerHTML = "Test";
