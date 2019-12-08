nav.onclick=function(s){
if(typeof(s) == "object") {
    return
  } 
  switch(s) {
    case 0:
      ChangeForm(Shop)
      break
    case 1:
      ChangeForm(Style)
      break
    case 2:
      ChangeForm(Social)
      break
    case 3: 
    ChangeForm(Twitter)
    break
  }
}

