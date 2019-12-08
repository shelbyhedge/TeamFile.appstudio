let arrayListingImageId = []
let arrayListingId = []
let arrayRank = []
let arrayUrl = []

Display.onshow=function(){
Title.value = title
Desc.value = description
Price.value = "$"+price

let myurl2 = "https://cors-anywhere.herokuapp.com/https://openapi.etsy.com/v2/listings/" + listing + "/images?api_key=t8irr6envb1ao3ff53j9qsdy";
          $.ajax({
           url: myurl2,
            headers: {
            'Authorization':'Bearer t8irr6envb1ao3ff53j9qsdy',         },
            method: 'GET',
            dataType: 'json',
            success: function(data){ 
                let total = data.count
                console.log('success', data)
                if (total > 0){
                    $.each(data.results, function(i, item) { 
                        arrayListingImageId.push(item.listing_image_id)
                        arrayListingId.push(item.listing_id)
                        arrayRank.push(item.rank)
                        arrayUrl.push(item.url_fullxfull)
    
                  }); 
                 im1.src = arrayUrl[0]
                 im2.src = arrayUrl[1]
                 im3.src = arrayUrl[2]
                 im4.src = arrayUrl[3]
                 im5.src = arrayUrl[4]
          
                } //close if results not = 0
                else 
                    console.log("No listing found")
            } // close success funct
         });   // close ajax call

} //close onclick

PriceCopy.onclick=function(){
ChangeForm(Shop)
}
