let chosenIndex  
let arrayListingID = []
let arrayTitle = []
let arrayDescription = []
let arrayPrice = []

Display.onshow=function(){
let myurl = "https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/shops/graceandgood/listings/active?api_key=t8irr6envb1ao3ff53j9qsdy";

    $.ajax({
      url: myurl,
          headers: {
          'Authorization':'Bearer t8irr6envb1ao3ff53j9qsdy',         },
            method: 'GET',
            dataType: 'json',
            success: function(data){   
                let totalresults = data.count  
                if (totalresults > 0){
               
                $.each(data.results, function(i, item) { 
                   arrayListingID.push(item.listing_id)
                    arrayTitle.push(item.title)
                    arrayDescription.push(item.description)
                    arrayPrice.push(item.price)
              
               }); 
            console.log(arrayListingID)
            console.log(arrayTitle)
            console.log(arrayDescription)
            console.log(arrayPrice)

                   
                    
        } //close if results not = 0
          else 
        console.log("No businesses found")
        } // close success function
        });   // close ajax call

} //close onclick




