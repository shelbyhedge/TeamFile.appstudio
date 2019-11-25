let simple = []
let color = []
let pink = []
let black = []
let questionNum = []
  
let simpleScore = simple.length 
let pinkScore = pink.length
let blackScore = black.length
let colorScore = color.length
let qNumber = questionNum.length
let winner = ""

Q1.onshow=function() {
btnA.onclick=function(){
questionNum.push("1")
simple.push("1")
}

btnB.onclick=function(){
questionNum.push("1")
color.push("1")
}

btnC.onclick=function(){
questionNum.push("1")
pink.push("1")
}

btnD.onclick=function(){
questionNum.push("1")
black.push("1")
}

switch (qNumber) {
case 1:
  let lblQuestion.text = "How would you describe your look?"
  let btnA.value = "EFFORTLESS AND LAIDBACK"
  let btnB.value = "I LIKE MAKING A STATEMENT"
  let btnC.value = "PRETTY WITH DETAIL"
  let btnD.value = "UNSTRUCTURED AND MONOCHROME"
  let qNumber.text = "Question 1 of 7"
  break;
case 2:
  let lblQuestion.text = 'Which of these stores is your go to?'
  let btnA.value = "FREE PEOPLE"
  let btnB.value = "GOODWILL - THIFTED FINDS"
  let btnC.value = "VINEYARD VINES"
  let btnD.value = "MADEWELL"
  let qNumber.text = "Question 2 of 7"
  break;
case 3:
  let lblQuestion.text = "What's your go-to weekend activity?"
  let btnA.value = "GOING TO YOGA & STAYIN ZEN"
  let btnB.value = "GOING OUT WITH FRIENDS"
  let btnC.value = "WATCHING TIK TOKS IN BED"
  let btnD.value = "DINNER AT THE NEWEST RESTAURANT"
  let qNumber.text = "Question 3 of 7"
  break;
case 4:
  lblQuestion.text = "Pick one of the following outfits..."
  btnA.value = "A WIDE-LEG JUMPSUIT AND WHITE SNEAKERS"
  btnB.value = "A BOLD KNIT AND BRIGHT NAILS"
  btnC.value = "OFF THE SHOULDER FLORAL DRESS"
  btnD.value = "MILITARY JACKET, WHITE TEE AND BLUE JEANS"
  qNumber.text = "Question 4 of 7"
  break;
case 5:
  lblQuestion.text = "Which city best suits you?"
  btnA.value = "PORTLANDIA"
  btnB.value = "COLORFUL MARRAKESH"
  btnC.value = "ROMANTIC PARIS"
  btnD.value = "HUSTLIN NYC"
  qNumber.text = "Question 5 of 7"
  break;
case 6:
  lblQuestion.text = "How do you wear color?"
  lblQuestion.value = "How do you wear color?"
  btnA.value = "DOES KHAKI COUNT"
  btnB.value = "STRONG AND CONTRASTING"
  btnC.value = "PRETTY PASTELS"
  btnD.value = "COLOR...WHAT COLOR"
  qNumber.text = "Question 6 of 7"
  break;
case 7:
  lblQuestion.text = "Which personality do you most aspire to?"
  btnA.value = "TOTAL ZEN"
  btnB.value = "RISK-TAKER, LIVING LIFE TO THE FULLEST"
  btnC.value = "TREND-SETTER, LAID BACK"
  btnD.value = "SOPHISTICATED GO GETTER"
  qNumber.text = "Question 7 of 7"
  break;
}
}


if (simpleScore >= pinkScore && simpleScore >= blackScore && simpleScore >= colorScore) {
  let winner = 'simple'
  alert(winner)
} else if (pinkScore >= simpleScore && pinkScore >= blackScore && pinkScore >= colorScore) {
  let winner = 'pink'
  alert(winner)
} else if (blackScore >= simpleScore && blackScore >= pinkScore && blackScore >= colorScore) {
  let winner = 'black'
  alert(winner)
} else if (colorScore >= blackScore && colorScore >= simpleScore && colorScore >= pinkScore){
  let winner = 'color'
  alert(winner)
} else {
  let winner = 'random'
  alert(winner)
}
