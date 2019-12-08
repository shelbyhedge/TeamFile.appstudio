let pic11 = ""
let pic21 = ""
let pic31 = ""
let pic41 = ""
let title11 = ""
let title21 = ""
let title31 = ""
let title41 = ""
let price11 = ""
let price21 = ""
let price31 = ""
let price41 = ""
let description11 = ""
let description21 = ""
let description31 = ""
let description41 = ""
let userData111 = ''
let userData21 = ''
let userData31 = ''
let userData41 = ''
let listing_id11 = ''
let listing_id21 = ''
let listing_id31 = ''
let listing_id41 = ''


Shop1.onshow=function(){
    // hard-coded netID for testing
    // this code assumes one picture per netID
    let querya = "SELECT * FROM listing WHERE display_id = '5'"
    let reqa = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=sah52299&pass=gojays2019&database=sah52299&query=" + querya)
    if  (reqa.status == 200) { //trip worked. 
        userData111 = JSON.parse(reqa.responseText)  
        //userData is a 2D array, with [row][colum]
        // format:
        //               0            1       2    
        //Columns go:  social_id  earring  photo  
        
        //let user = userData[0][0] + ", " + userData[0][1] + "\n"
        //console.log(user)
        // get the picture from the database. It is base64 format.
        listing_id11 = userData111[0][1]
        title11 = userData111[0][2] 
        description11 = userData111[0][3]
        price11 = userData111[0][4]
        pic11 = userData111[0][5]
        
        pic11 = pic11.replace(/\s/gi, '+') 
        let pic11Array = pic11.split(".")
        i11.firstChild.src = pic11Array[0]
        l11.value = title11
      } else   // bad trip 
        alert("Error: " + req.status)

    let query2a = "SELECT * FROM listing WHERE display_id = '6'"
    let req2a = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=sah52299&pass=gojays2019&database=sah52299&query=" + query2a)
    if  (req2a.status == 200) { //trip worked. 
        userData21 = JSON.parse(req2a.responseText)  
        pic21 = userData21[0][5] + '.'
            
        pic21 = pic21.replace(/\s/gi, '+') 
        let pic21Array = pic21.split(".")
        title21 = userData21[0][2]
        price21 = userData21[0][4]
        description21 = userData2[0][3]
        listing_id21 = userData21[0][1]
        i21.firstChild.src = pic21Array[0]
        l21.value = title21
      } else   // bad trip 
        alert("Error Request 2: " + req.status)
        
        
    let query3a = "SELECT * FROM listing WHERE display_id = '7'"
    let req3a = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=sah52299&pass=gojays2019&database=sah52299&query=" + query3a)
    if  (req3a.status == 200) { //trip worked. 
        userData31 = JSON.parse(req3a.responseText)  
        pic31 = userData31[0][5] + '.'
        pic31 = pic31.replace(/\s/gi, '+') 
        let pic31Array = pic31.split(".")
        title31 = userData31[0][2]
        price31 = userData31[0][4]
        description31 = userData31[0][3]
        listing_id31 = userData31[0][1]
        i31.firstChild.src = pic31Array[0]
        l31.value = title31
      } else   // bad trip 
        alert("Error Request 3: " + req.status)
    
    let query4a = "SELECT * FROM listing WHERE display_id = '8'"
    let req4a = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=sah52299&pass=gojays2019&database=sah52299&query=" + query4a)
    if  (req4a.status == 200) { //trip worked. 
        userData41 = JSON.parse(req4a.responseText)  
        pic41 = userData41[0][5] + '.'
        title41 = userData41[0][2]
        price41 = userData41[0][4]
        description41 = userData41[0][3]
        listing_id41 = userData41[0][1]     
        pic41 = pic41.replace(/\s/gi, '+') 
        let pic41Array = pic41.split(".")
        i41.firstChild.src = pic41Array[0]
        l41.value = title41
      } else   // bad trip 
        alert("Error: " + req.status)

}

i11.onclick=function(){
  listing = listing_id11
  title = title11
  price = price11
  description = description11
  ChangeForm(Display)
} 
i21.onclick=function(){
  listing = listing_id21
  title = title21
  price = price21
  description = description21
  ChangeForm(Display)
}

i31.onclick=function(){
  listing = listing_id31
  title = title31
  price = price31
  description = description31
  ChangeForm(Display)
}

i41.onclick=function(){
  listing = listing_id41
  title = title41
  price = price41
  description = description41
  ChangeForm(Display)
}

l11.onclick=function(){
  listing = listing_id11
  title = title11
  price = price11
  description = description11
  ChangeForm(Display)
}

l21.onclick=function(){
  listing = listing_id21
  title = title21
  price = price21
  description = description21
  ChangeForm(Display)
}

l31.onclick=function(){
  listing = listing_id31
  title = title31
  price = price31
  description = description31
  ChangeForm(Display)
}

l41.onclick=function(){
  listing = listing_id41
  title = title41
  price = price41
  description = description41
  ChangeForm(Display)
}

lNext1.onclick=function(){
  ChangeForm(Shop2)
}

hmbShop1.onclick=function(s){
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
    case 'Social':
      ChangeForm(Social)
      break
  }
}


lBack.onclick=function(){
  ChangeForm(Shop)
}
