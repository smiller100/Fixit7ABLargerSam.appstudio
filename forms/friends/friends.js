let firstFriend = prompt("Enter the name of your first of three friends.");
let secondFriend = prompt("Enter the name of your second of three friends.");
let thirdFriend = prompt("Enter the name of your third of three friends.");
let best = Number(prompt("Enter a 1 if your first person was your best friend, a 2 for the second, and a 3 for the third"))

var friendNames = [];

friendNames[0] = firstFriend
friendNames[1] = secondFriend
friendNames[2] = thirdFriend
let bestFriend = friendNames[best - 1]

if (bestFriend.charAt(0) == "A")
   alert("Your best friends' name starts with A.")
else if (bestFriend.charAt(0) == "B")
   alert("Your best friends' name starts with B.")
else 
   alert("Your name starts with something other than A or B.")


