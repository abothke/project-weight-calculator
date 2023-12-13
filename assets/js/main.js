function idWeight() {
  let bodyHeight = document.querySelector("#height").value;
  let userAge = document.querySelector("#age").value;
  const calcBreit = [bodyHeight - 100 + userAge / 10] * 0.9 * 1.1;
  const calcSchmal = [bodyHeight - 100 + userAge / 10] * 0.9 * 0.9;
  let breitChecked = document.querySelector("#breit").checked;
  let schmalChecked = document.querySelector("#schmal").checked;

  if (breitChecked == true) {
    let calcResult = calcBreit.toFixed(0);
    document.querySelector("span").innerHTML = calcResult + "kg";
    document.querySelector("h3").innerHTML = "";
  } else if (schmalChecked == true) {
    calcResult = calcSchmal.toFixed(0);
    document.querySelector("span").innerHTML = calcResult + "kg";
    document.querySelector("h3").innerHTML = "";
  } else {
    document.querySelector("h3").innerHTML = "Bitte gib deinen Körpertyp an!";
  }
}
// let calcResult =
//   breitChecked == true ? calcBreit.toFixed(0) : calcSchmal.toFixed(0);
