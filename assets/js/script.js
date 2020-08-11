
//Buttons will save user inputs to local store. Additionally if there is saved inputs, they will display in the textarea.
//Sets the current date at the top of the page.
$(document).ready(function() {

    $("#currentDate").text( moment().format('ddd MMM Do, YYYY'));

});
// here I am trying to build the function to fill the
// background colors for the textarea future - green, current - red, past - gray
function update() {
    var currentDate = new Date();

    $(".hour-block").each(function () {
        console.log($(this).attr("data-hours"));
    
            $(this).find('textarea').addClass("current");
        });
}

update();
// each one of the button clicks are being used to save
// the textare for each hour that has been saved with the button click
// from 9am - 5pm




