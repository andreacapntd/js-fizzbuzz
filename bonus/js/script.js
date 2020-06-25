var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  for (var i = 1; i <= 100; i++) {
    if (i%3 == 0 && i%5 == 0) {
      numberList.innerHTML += "<li> BuzzFizz </li>";
    } else if (i%3 == 0) {
      numberList.innerHTML += "<li> Fizz </li>";

    } else if (i%5 == 0) {
      numberList.innerHTML += "<li> Buzz </li>";

    } else {
      numberList.innerHTML += "<li>" + i +  " </li>";

    }
  }

});
