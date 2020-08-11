
//Sets the current date at the top of the page.
$(document).ready(function() {

    $("#currentDay").text( moment().format('dddd, MMM Do, YYYY'));

});
// here I am trying to build the function to fill the
// background colors for the textarea future - green, current - red, past - gray
// 
function update() {

    var currentDate = new Date();

    $('.hour-block').each(function () {
 
        var thisHours = $(this).data('hours');
        var difference = currentDate.getHours() - thisHours;
    

        if(difference < 0) {
            $(this).find('textarea').addClass('future');
        } else if(difference === 0) {
            $(this).find('textarea').addClass('current');
        } else {
            $(this).find('textarea').addClass('past');
        }
      $(this).find('textarea').val(localStorage.getItem(thisHours));
 
    });
}

$('.save-button').on('click', function () {
    var textValue = $(this).siblings('textarea').val();
    var parentHour = $(this).parent().data('hours');


    localStorage.setItem(parentHour, textValue);
})

update();





