
  btnA6.onclick=function(){
  questionNum.push("1")
  simple.push("1")
  ChangeForm(Q7)
  }

  btnB6.onclick=function(){
  questionNum.push("1")
  color.push("1")
  ChangeForm(Q7)
  }

  btnC6.onclick=function(){
  questionNum.push("1")
  pink.push("1")
  ChangeForm(Q7)
  }

  btnD6.onclick=function(){
  questionNum.push("1")
  black.push("1")
  ChangeForm(Q7)
  }
  
hmb6.onclick=function(s){
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
