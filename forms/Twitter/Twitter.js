hmbSocial.onclick=function(s){
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
    case 'Twitter':
      ChangeForm(Social)
      break
  }
}