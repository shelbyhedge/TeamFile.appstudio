// These are global variables that will be used in other forms

//let arrayName, arrayPhone, arrayRating, arrayAddress, arrayCity, arrayZipcode, arrayCountry, arrayImage, arrayPrice, arrayLat, arrayLong
let chosenIndex  // will hold index of business chosen by user - will send to another form
let arrayListingID = []
let arrayTitle = []
let arrayDescription = []
let arrayPrice = []

Listing.onshow=function(){
// this is the API url call to Yelp 'Search' service from the documentation
// this url 
//      https://cors-anywhere.herokuapp.com/
//          cors allows cross-origin requests to anywhere - put it ahead of your API url

let myurl = "https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/shops/graceandgood/listings/active?api_key=t8irr6envb1ao3ff53j9qsdy";
// make the ajax call to Yelp - build up all the information you need for the AJAX
// call requires in the format required (in the Yelp documentation)
         $.ajax({
            url: myurl,
            headers: {
            'Authorization':'Bearer t8irr6envb1ao3ff53j9qsdy',         },
            method: 'GET',
            dataType: 'json',
            success: function(data){   // this function runs with the returned data if trip is successful
                // Grab the results from the API JSON results returned
                let totalresults = data.count  // number of results returned
                // If returned results are greater than 0, continue
                if (totalresults > 0){
                   // Iterate through the JSON array of 'businesses' which was returned by the API
                   // Go through each business object one at a time, 
                   // and each time run a function that gets the data for the 
                   // business. Do for each business.
                   
            // We'll use a special loop we haven't used before - 
            // Explanation of this loop: 
               // 1) It iterates over objects one at a time
               // and executes/runs a function for each time for the 
               // current business object (calls it the item). 
               // 2) The 'data.businesses' part refers to the businesses object.
               // 3) 'i' is the current index (of the business being examined)
               // 3) The 'item' is the current business object being examined.
               // 4) The $ means this is jquery code. If you want to read more
               // about the jquery API go here: https://api.jquery.com/each/
               
                    $.each(data.results, function(i, item) { 
                        // now inside the function 
                    
                        // Push each piece of the business' information 
                        // onto the appropriate array (that you created earlier)
                        arrayListingID.push(item.listing_id)
                        arrayTitle.push(item.title)
                        arrayDescription.push(item.description)
                        arrayPrice.push(item.price)
                        
                  }); // close the loop and loop function. Repeat the loop
                  
                  // At this point, the loop is done. All business information is
                  // in the arrays. 
                 // Now load the name Select control with a loop (use arrayName contents) 
            
                 // for debugging to make sure arrayName has what you intended, take a look
                 console.log(arrayListingID)
                 console.log(arrayTitle)
                 console.log(arrayDescription)
                 console.log(arrayPrice)

                  
                 // OK - now loop through the array of business names and put them in a control
                // for (i = 0; i <= arrayName.length - 1; i++) 
                   // selResults.addItem(arrayName[i])  
                    
                } //close if results not = 0
                else 
                    // If our results are 0; no businesses were returned by the call therefore we display on the page no results were found
                    console.log("No businesses found")
            } // close success funct
         });   // close ajax call
//let query = "INSERT INTO LISTING (listing_id,title,description,price) VALUES ('" + arrayListingID + "', '" + arrayTitle + "', '" + arrayDescription + "', '" + arrayPrice + "')"
//req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=sah52299&pass=gojays2019&database=sah52299&query=" + query)
} //close onclick


//selResults.onclick=function(){
// this takes you to another form that shows some of the details of the selected business
  //  chosenIndex = selResults.item  // holds index of chosen business
   // ChangeForm(YelpResults)
//}
