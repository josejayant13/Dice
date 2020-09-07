var diceFace = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var diceValue = [1,2,3,4,5,6];
var rnd1 = Math.floor(6 *Math.random());
var rnd2 = Math.floor(6 * Math.random());
document.querySelector(".img1").setAttribute("src", diceFace[rnd1]);
document.querySelector(".img2").setAttribute("src", diceFace[rnd2]);
if(rnd1>rnd2)
{
  document.querySelector("h2").textContent = "Player One Won!";
}
else if(rnd2>rnd1)
{
  document.querySelector("h2").textContent = "Player Two Won!";
}
else
{
  document.querySelector("h2").textContent = "No One Won. Its a Draw!";
}
