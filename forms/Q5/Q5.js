
  btnA5.onclick=function(){
  questionNum.push("1")
  simple.push("1")
  ChangeForm(Q6)
  }

  btnB5.onclick=function(){
  questionNum.push("1")
  color.push("1")
  ChangeForm(Q6)
  }

  btnC5.onclick=function(){
  questionNum.push("1")
  pink.push("1")
  ChangeForm(Q6)
  }

  btnD5.onclick=function(){
  questionNum.push("1")
  black.push("1")
  ChangeForm(Q6)
  }
  
hmb5.onclick=function(s){
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
    case 'Shop':
      ChangeForm(Shop)
      break
    case 'Social':
      ChangeForm(Social)
      break
  }
}
