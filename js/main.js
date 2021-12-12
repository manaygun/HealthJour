window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    let height = parseInt(document
            .querySelector("#height").value);

    let weight = parseInt(document
            .querySelector("#weight").value);

    let result = document.querySelector("#result");
    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";

    else {

        let bmi = (weight / ((height * height)
                            / 10000)).toFixed(2);

        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;

        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML =
                `Normal : <span>${bmi}</span>`;

        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}

var modal = document.getElementById('id01');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

