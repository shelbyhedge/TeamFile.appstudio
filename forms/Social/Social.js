let picBase2 = ""
let id = '' 

// this sets up a variable to read the picture file
let reader2 = new FileReader()

inptListing.onchange=function(){
     //user has selected a picture 
     // ** NOTE on phone, get the smallest size (you
     // can choose the size on the phone)
     //This function reads it in using the 
     //Javascript reader. 
     //The reader _onload function will be automatically
     // called when the reader has read in the picture chosen
     reader2.readAsDataURL(inptListing.files[0])
}

reader2.onload = function(e) {
     //this loads the read-in picture 
     //into the image control.
     //It also converts the picture into base64
     //for storage into the database
  Image11.firstChild.src = e.target.result 
  picBase64 = e.target.result
  console.log(picBase64)
  return
}
  
btnInptListing.onclick=function(){
     //hard-coding netID just for testing purposes
    id = 24
    let query = "UPDATE listing SET image =" + '"' + picBase64 + '"' + " WHERE display_id = " + '"' + id + '"' 
    let req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=sah52299&pass=gojays2019&database=sah52299&query=" + query)
    if (req.status == 200) { //everything worked. :)
        if (req.responseText == 500)
          alert("Picture saved to database") 
    } else 
        alert("Error picture not saved: error code " + req.status)
}

ham.onclick=function(s){
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
      ChangeForm(Twitter)
      break
  }
}