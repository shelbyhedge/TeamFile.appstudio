Results.onshow=function() {
let simpleScore = simple.length 
let pinkScore = pink.length
let blackScore = black.length
let colorScore = color.length
let winner = ""
let qNumber = questionNum.length
console.log(simple)
console.log(simpleScore)
console.log(simple.length)


if (simpleScore > pinkScore && simpleScore > blackScore && simpleScore > colorScore) {
  let winner = 'simple'
  lblResults.textContent = "YOU GOT: THE LUNA EARRING"
  imgResults.src = "luna.jpg"
  lblDescription.textContent = "Your genuine and unassuming nature is a perfect fit for the Luna!"
} else if (pinkScore > simpleScore && pinkScore > blackScore && pinkScore > colorScore) {
  let winner = 'pink'
  lblResults.textContent = "YOU GOT: THE DOT EARRING"
  imgResults.src = "dot.jpg"
  lblDescription.textContent = "With your sweet and simple style we think you love The Dot earrings"
} else if (blackScore > simpleScore && blackScore > pinkScore && blackScore > colorScore) {
  let winner = 'black'
  lblResults.textContent = "YOU GOT: THE NORA EARRING"
  imgResults.src = "Nora.jpg"
  lblDescription.textContent = "You your go getter attitude we think you would love the Nora earrings!"
} else if (colorScore > blackScore && colorScore > simpleScore && colorScore > pinkScore){
  let winner = 'color'
  lblResults.textContent = "YOU GOT: THE ANGIE EARRING"
  imgResults.src = "angie.jpg"
  lblDescription.textContent = "With your sweet and simple style we think you love The Angie earrings"
} else {
  let winner = 'random'
  lblResults.textContent = "YOU GOT: THE BRENDA EARRING"
  imgResults.src = "Brenda.jpg"
  lblDescription.textContent = "With your cool and laid-back style we think you love The Brenda earrings"
  }
}

hmbResults.onclick=function(s){
  if(typeof(s) == "object") {
    return
} 
  switch(s) {
    case 'Home':
      ChangeForm(Home)
      break
    case 'Style':
      ChangeForm(Style)
      break
    case 'Social':
      ChangeForm(Social)
      break
    case 'Twitter':
      ChangeForm(Social)
      break
  }
}


