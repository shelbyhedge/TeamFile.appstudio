
  btnA2.onclick=function(){
  questionNum.push("1")
  simple.push("1")
  ChangeForm(Q3)
  }

  btnB2.onclick=function(){
  questionNum.push("1")
  color.push("1")
  ChangeForm(Q3)
  }

  btnC2.onclick=function(){
  questionNum.push("1")
  pink.push("1")
  ChangeForm(Q3)
  }

  btnD2.onclick=function(){
  questionNum.push("1")
  black.push("1")
  ChangeForm(Q3)
  }

hmb2.onclick=function(s){
  if(typeof(s) == "object") {
    return
  } 
  switch(s) {
    case 'Home':
      ChangeForm(Home)
      break
    case 'Twitter':
      ChangeForm(Social)
      break
    case 'Style':
      ChangeForm(Style)
      break
    case 'Shop':
      ChangeForm(Shop)
      break
    case 'Social':
      ChangeForm(Social)
      break
  }
}
