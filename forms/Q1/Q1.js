let simple = [];
let color = [];
let pink = [];
let black = [];
let questionNum = [];


  btnA.onclick=function(){
  questionNum.push(1)
  simple.push(1)
  ChangeForm(Q2)
  }

  btnB.onclick=function(){
  questionNum.push(1)
  color.push(1)
  ChangeForm(Q2)
  }

  btnC.onclick=function(){
  questionNum.push(1)
  pink.push(1)
  ChangeForm(Q2)
  }

  btnD.onclick=function(){
  questionNum.push(1)
  black.push("1")
  ChangeForm(Q2)
  }
  
  
hmb1.onclick=function(s){
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
    case 'Twitter':
      ChangeForm(Social)
      break
    case 'Shop':
      ChangeForm(Shop)
      break
    case 'Social':
      ChangeForm(Social)
      break
  }
}









