
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
/* Below I am trying to get the saved items from localstorage that are saved
    and show them on the correct hour */        
      $(this).find('textarea').val(localStorage.getItem(thisHours));
 
    });
}
/* Below when the user clics on the save button it will write the textarea in out with numbers
    being represented as the time in from 9 - 17 */
$('.save-button').on('click', function () {
    var textValue = $(this).siblings('textarea').val();
    var parentHour = $(this).parent().data('hours');


    localStorage.setItem(parentHour, textValue);
})

update();





