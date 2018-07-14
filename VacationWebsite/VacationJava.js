/*List of All Variables*/

var climate = document.getElementById('climateQuestion')
var climateInput = document.getElementById('climateAnswer')
var local = document.getElementById('localQuestion')
var localInput = document.getElementById('localAnswer')
var wildlife = document.getElementById('wildlifeQuestion')
var wildlifeInput = document.getElementById('wildlifeAnswer')
var terrain = document.getElementById('terrainQuestion')
var terrainInput = document.getElementById('terrainAnswer')
var budget = document.getElementById('budgetQuestion')
var budgetInput = document.getElementById('budgetAnswer')
var result = document.getElementById('resultQuestion')
var canada = document.getElementById('Canada')


function clearInp() {
document.getElementsByTagName("input").value = "";
}

/*Function that Determines users preferred climate*/

climate.addEventListener('click', getClimate);

function getClimate() {
  if (climateInput.value === "warmer") {
    document.getElementById("climatePrint").innerHTML = "You have chosen " + climateInput.value +"!";
} else if (climateInput.value === "colder") {
  document.getElementById("climatePrint").innerHTML = "You have chosen " + climateInput.value +"!";
} else {
    document.getElementById("climatePrint").innerHTML = "You need to chose warmer or colder!";
  }
}

/*Function that Determines if user is willing to go outside the country*/

local.addEventListener('click', getLocal);

function getLocal() {
  if (localInput.value === "inside") {
    document.getElementById("localPrint").innerHTML = "You have chosen " + localInput.value +"!";
} else if (localInput.value === "outside") {
  document.getElementById("localPrint").innerHTML = "You have chosen " + localInput.value +"!";
} else {
    document.getElementById("localPrint").innerHTML = "You need to chose inside or outside!";
  }
}

/*Function that Determines if user wants wildlife or not*/

wildlife.addEventListener('click', getWildlife);

function getWildlife() {
  if (wildlifeInput.value === "yes") {
    document.getElementById("wildlifePrint").innerHTML = "You have chosen " + wildlifeInput.value +"!";
} else if (wildlifeInput.value === "no") {
  document.getElementById("wildlifePrint").innerHTML = "You have chosen " + wildlifeInput.value +"!";
} else {
    document.getElementById("wildlifePrint").innerHTML = "You need to chose yes or no!";
  }
}

/*Function that Determines Environment*/

terrain.addEventListener('click', getTerrain);

function getTerrain() {
  if (terrainInput.value === "beachs") {
    document.getElementById("terrainPrint").innerHTML = "You have chosen " + terrainInput.value +"!";
} else if (terrainInput.value === "mountains") {
  document.getElementById("terrainPrint").innerHTML = "You have chosen " + terrainInput.value +"!";
} else {
    document.getElementById("terrainPrint").innerHTML = "You need to chose beachs or mountains!";
  }
}

/*Function that Determines budget*/

budget.addEventListener('click', getBudget);

function getBudget() {
  if (budgetInput.value >= 2000) {
    document.getElementById("budgetPrint").innerHTML = "You can afford this trip!";
} else if (budgetInput.value <= 1000) {
  document.getElementById("budgetPrint").innerHTML = "You cannot afford this trip. Sorry!";
} else {
    document.getElementById("budgetPrint").innerHTML = "Please enter a your budget as a number!";
  }
}

/*Function that Determines result*/

result.addEventListener('click' , getResult)

function getResult() {
  if (climateInput.value === "warmer" && localInput.value === "inside" && wildlifeInput.value === "yes" && terrainInput.value === "beachs" && budgetInput.value >= 5000) {
    document.getElementById("resultFinal").innerHTML = "You should go to the beachs in Maryland!";
    document.getElementById("Maryland").style.display = "inline-block";
  } else if (climateInput.value === "colder" && localInput.value === "outside" && wildlifeInput.value === "no" && terrainInput.value === "mountains" && budgetInput.value >= 10000) {
    document.getElementById("resultFinal").innerHTML = "You should go to Canada!";
    document.getElementById("Canada").style.display = "inline-block";
  } else if (climateInput.value === "warmer" && localInput.value === "outside" && wildlifeInput.value === "no" && terrainInput.value === "mountains" && budgetInput.value >= 8000) {
    document.getElementById("resultFinal").innerHTML = "You should go to Tokyo!";
    document.getElementById("Tokyo").style.display = "inline-block";
  } else if (climateInput.value === "warmer" && localInput.value === "outside" && wildlifeInput.value === "no" && terrainInput.value === "beachs" && budgetInput.value >= 5000) {
    document.getElementById("resultFinal").innerHTML = "You should go to Greece!";
    document.getElementById("Greece").style.display = "inline-block";
  } else if (climateInput.value === "warmer" && localInput.value === "inside" && wildlifeInput.value === "no" && terrainInput.value === "beachs" && budgetInput.value >= 6000) {
    document.getElementById("resultFinal").innerHTML = "You should go to Texas!";
    document.getElementById("Texas").style.display = "inline-block";
  } else if (climateInput.value === "warmer" && localInput.value === "outside" && wildlifeInput.value === "no" && terrainInput.value === "beachs" && budgetInput.value >= 5000) {
    document.getElementById("resultFinal").innerHTML = "You should go to Italy!";
    document.getElementById("Italy").style.display = "inline-block";
  } else {
    document.getElementById("resultFinal").innerHTML = "We do not currently have anything available with these selecions!";
    }
  }
