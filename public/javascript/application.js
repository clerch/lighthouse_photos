
$(document).ready(function () {

  $photoList = $('#photos');

  function insertPhoto(photo){
    var $row = 'https://farm'+ photo.farm +'.staticflickr.com/'+ photo.server +'/'+ photo.id + '_'+photo.secret+'.jpg';
    $photoList.attr("src",$row);
  }





 
  $("#srch").submit(function (event) {
    event.preventDefault();
    
    var searchTerm = $("#search-box").val();
    var Flickurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=eacfd2f2d41ccd0425b70dfcdfba8053&format=json&jsoncallback=?&tags=" + searchTerm;
       
    $.ajax({
      url: Flickurl,
      // jsonp: "callback",
      dataType: "jsonp",
      // data: {
      //   format: "json",
      //   jsoncallback: "?",
      //   api_key: "eacfd2f2d41ccd0425b70dfcdfba8053",
      //   method: 'flickr.photos.search',
      //   tags: searchTerm
      // },
      success: function (data) {
        console.log(data);
        //Populate the images with the data
        if (data.stat == "ok"){
          var photo = data.photos.photo[0];
          insertPhoto(photo);
        } else {
          alert(data.message);
        }
      }
    });
  });


});





