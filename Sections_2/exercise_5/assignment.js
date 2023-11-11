const task3Element = document.getElementById("task-3");
const task5Element = document.getElementById("task-5");

// 1.Create two new functions: One that takes no parameters and simply shows an alert() with some text of your choice and one that receives a name as a parameter and then uses

function showAlert() {
  alert("Dude, whats up ?");
}

function alertName(name) {
  alert(name);
}

// 2.Call both functions directly from your code.

showAlert();
alertName("Max");

// 3. Add an event listener to task3Element  and attach it to the first function (the one without arguments). Click this task thereafter to verify whether it works.

task3Element.addEventListener("click", showAlert);

// 4. Add a brand-new function that takes three parameters (three strings,give them any names you want) that returns one combined string (where the three strings are concatenated).

function alertCoupleNames(name1, name2, name3) {
  alert(`${name1}, ${name2}, ${name3} hi Guys`);
}

// 5. Call that new function directly from your code and alert() the result of that function.
const message = alertCoupleNames("Ua", "Ue", "YT");
alert(message);
