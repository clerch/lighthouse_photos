$(document).ready(function() {









$('#new_photo').on('click', function(e){
    e.preventDefault();
    
//this is where the action to the server actually happens
    $.post('/contact-add.json', {
      contact: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone      
      }
//this is the on success callback
    }, function(data) {

      //Note: we have to do this because we didn't specify the dataType to jQuery.
      //Better approach is to just do that so we don't have to parse ourselves. Not
      // a big deal but worth noting the difference between this callback and the getJSON callback.
      // this is assuming that result.success will return true.
      var result = JSON.parse(data);
      if (result.success){
        insertContact(result.contact);
      } else {
        alert(result.message);
      }
    });
  });





































});