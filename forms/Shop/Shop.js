let pic1 = ""
let pic2 = ""
let pic3 = ""
let pic4 = ""
let title1 = ""
let title2 = ""
let title3 = ""
let title4 = ""
let price1 = ""
let price2 = ""
let price3 = ""
let price4 = ""
let description1 = ""
let description2 = ""
let description3 = ""
let description4 = ""
let userData = ''
let userData2 = ''
let userData3 = ''
let userData4 = ''
let listing_id1 = ''
let listing_id2 = ''
let listing_id3 = ''
let listing_id4 = ''

let listing = ''
let description = ''
let price = ''
let title = ''


Shop.onshow=function(){
    // hard-coded netID for testing
    // this code assumes one picture per netID
    let query = "SELECT * FROM listing WHERE display_id = '1'"
    let req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=sah52299&pass=gojays2019&database=sah52299&query=" + query)
    if  (req.status == 200) { //trip worked. 
        userData = JSON.parse(req.responseText)  
        //userData is a 2D array, with [row][colum]
        // format:
        //               0            1       2    
        //Columns go:  social_id  earring  photo  
        
        //let user = userData[0][0] + ", " + userData[0][1] + "\n"
        //console.log(user)
        // get the picture from the database. It is base64 format.
        listing_id1 = userData[0][1]
        title1 = userData[0][2] 
        description1 = userData[0][3]
        price1 = userData[0][4]
        pic1 = userData[0][5]
        
        pic1 = pic1.replace(/\s/gi, '+') 
        let pic1Array = pic1.split(".")
        i1.firstChild.src = pic1Array[0]
        l1.value = title1
      } else   // bad trip 
        alert("Error: " + req.status)

    let query2 = "SELECT * FROM listing WHERE display_id = '2'"
    let req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=sah52299&pass=gojays2019&database=sah52299&query=" + query2)
    if  (req2.status == 200) { //trip worked. 
        userData2 = JSON.parse(req2.responseText)  
        //userData is a 2D array, with [row][colum]
        // format:
        //               0            1       2    
        //Columns go:  social_id  earring  photo  
        
        //let user = userData[0][0] + ", " + userData[0][1] + "\n"
        //console.log(user)
        // get the picture from the database. It is base64 format.
        pic2 = userData2[0][5] + '.'
        
        // convert base64 database picture back to regular format picture
        // First replace all spaces with + (multiple spaces will be treated as multiple characters)        
        pic2 = pic2.replace(/\s/gi, '+') 
        // then split out the picture
        let pic2Array = pic2.split(".")
        title2 = userData2[0][2]
        price2 = userData2[0][4]
        description2 = userData2[0][3]
        listing_id2 = userData2[0][1]
        //put picture into the Image control
        i2.firstChild.src = pic2Array[0]
        l2.value = title2
      } else   // bad trip 
        alert("Error Request 2: " + req.status)
        
        
    let query3 = "SELECT * FROM listing WHERE display_id = '3'"
    let req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=sah52299&pass=gojays2019&database=sah52299&query=" + query3)
    if  (req3.status == 200) { //trip worked. 
        userData3 = JSON.parse(req3.responseText)  
        //userData is a 2D array, with [row][colum]
        // format:
        //               0            1       2    
        //Columns go:  social_id  earring  photo  
        
        //let user = userData[0][0] + ", " + userData[0][1] + "\n"
        //console.log(user)
        // get the picture from the database. It is base64 format.
        pic3 = userData3[0][5] + '.'
        
        // convert base64 database picture back to regular format picture
        // First replace all spaces with + (multiple spaces will be treated as multiple characters)        
        pic3 = pic3.replace(/\s/gi, '+') 
        // then split out the picture
        let pic3Array = pic3.split(".")
        title3 = userData3[0][2]
        price3 = userData3[0][4]
        description3 = userData3[0][3]
        listing_id3 = userData3[0][1]
        //put picture into the Image control
        i3.firstChild.src = pic3Array[0]
        l3.value = title3
      } else   // bad trip 
        alert("Error Request 3: " + req.status)
    
    let query4 = "SELECT * FROM listing WHERE display_id = '4'"
    let req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=sah52299&pass=gojays2019&database=sah52299&query=" + query4)
    if  (req4.status == 200) { //trip worked. 
        userData4 = JSON.parse(req4.responseText)  
        //userData is a 2D array, with [row][colum]
        // format:
        //               0            1       2    
        //Columns go:  social_id  earring  photo  
        
        //let user = userData[0][0] + ", " + userData[0][1] + "\n"
        //console.log(user)
        // get the picture from the database. It is base64 format.
        pic4 = userData4[0][5] + '.'
        title4 = userData4[0][2]
        price4 = userData4[0][4]
        description4 = userData4[0][3]
        listing_id4 = userData4[0][1]
        // convert base64 database picture back to regular format picture
        // First replace all spaces with + (multiple spaces will be treated as multiple characters)        
        pic4 = pic4.replace(/\s/gi, '+') 
        // then split out the picture
        let pic4Array = pic4.split(".")
        
        
        
        //put picture into the Image control
        i4.firstChild.src = pic4Array[0]
        l4.value = title4
      } else   // bad trip 
        alert("Error: " + req.status)

}

i1.onclick=function(){
  listing = listing_id1
  title = title1
  price = price1
  description = description1
  ChangeForm(Display)
} 
i2.onclick=function(){
  listing = listing_id2
  title = title2
  price = price2
  description = description2
  ChangeForm(Display)
}

i3.onclick=function(){
  listing = listing_id3
  title = title3
  price = price3
  description = description3
  ChangeForm(Display)
}

i4.onclick=function(){
  listing = listing_id4
  title = title4
  price = price4
  description = description4
  ChangeForm(Display)
}

l1.onclick=function(){
  listing = listing_id1
  title = title1
  price = price1
  description = description1
  ChangeForm(Display)
}

l2.onclick=function(){
  listing = listing_id2
  title = title2
  price = price2
  description = description2
  ChangeForm(Display)
}

l3.onclick=function(){
  listing = listing_id3
  title = title3
  price = price3
  description = description3
  ChangeForm(Display)
}

l4.onclick=function(){
  listing = listing_id4
  title = title4
  price = price4
  description = description4
  ChangeForm(Display)
}

lNext.onclick=function(){
  ChangeForm(Shop1)
}

hmbShop.onclick=function(s){
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

