/********************************
*********************************
Set focus on the first text field
*********************************
********************************/


// Making actions on page load (when the document is ready)
$(document).ready(() => {
    // setting the focus on the name input field
    $('form fieldset #name').focus();
})


/********************************
*********************************
      ”Job Role” section
*********************************
********************************/


// Hide the textarea until the (other) option is selected from
// the job role options
$('#other-title').hide();

    // add (change) event listener on clicking the select object
$('#title').change(e => {
    // assure that the target is the (other) option
    if(e.target.value === 'other'){
        $('#other-title').show();
    }
})


/********************************
*********************************
      ”T-Shirt Info” section
*********************************
********************************/


// Hide color until design is selected
$('#colors-js-puns').hide();

$('#design').change(e => {
    const tshirt = e.target.value;
    const jsPuns = /^\w+ (\w+ )?(\w+ )?[(]JS Puns shirt only[)]$/;
    const loveJs = /^\w+ (\w+ )?(\w+ )?[(]I . JS shirt only[)]$/;
    const jsPunsReplace = /[(]JS Puns shirt only[)]/;
    const loveJsReplace = /[(]I . JS shirt only[)]/;

    // hide the default selection option
    $('#design').children().eq(0).hide();

    // match the color with the design
    function show(design){
        $('#color').children().each((index, tshirtColor) => {
            $(tshirtColor).attr("selected",false);
            let colorName = $(tshirtColor).text();
            if (design === 'js puns'){
                !jsPuns.test(colorName) ? $(tshirtColor).hide() : $(tshirtColor).show();
            } else {
                jsPuns.test(colorName) ? $(tshirtColor).hide() : $(tshirtColor).show();
            }
        })
    }

    if (tshirt === 'js puns') {
        show('js puns');
        $('option[value="cornflowerblue"]').attr("selected",true);
    } else {
        show('loveJs');
        $('option[value="tomato"]').attr("selected",true);
    }

    // Bring the colors div back to the screen
    $('#colors-js-puns').show();
})


/********************************
*********************************
”Register for Activities” section
*********************************
********************************/


// Activities total cost
let cost = "Total: $";
let totalCost, costMatch, timeMatch, timeCompare;
let busy = [];
const costRegex = /\d{3}/;
const timeRegex = /\w+ \d\d?\wm-\d\d?\wm/;
let costChild = '<p>' + cost + totalCost + '</p>';
$('.activities label input').on('click', (e) => {

    // Delete the previous cost Node
    if($('.activities p')){
        $('.activities p').remove();
    }

    totalCost = 0;
    $('.activities label input').each((index, element) => {
        // Calculating the total cost
        elementText = element.parentNode.textContent;
        if (element.checked){
            costMatch = costRegex.exec(elementText);
            totalCost += parseInt(costMatch);
        }
    })
    // Appending the cost to the activities fieldset
    costChild = '<p>' + cost + totalCost + '</p>';
    $('.activities').append(costChild);
})


// Prevent user from scheduling two workshops at the same time
$(".activities label input").change( function(e){
    let ischecked= $(this).is(':checked');
    if(e.target.parentNode.textContent !== " Main Conference — $200"){
        // extracting the time of the workshop
        timeMatch = timeRegex.exec($(e.target).parent().text())[0];
        if(ischecked){
            // add the time to the user's scheduled workshop array "busy"
            busy.push(timeMatch);
            // loop over other workshops to hide the competing activities
            $('.activities label input').each((index, element) => {
                elementText = element.parentNode.textContent;
                if(!element.checked && index >= 1){
                    timeCompare = timeRegex.exec($(element).parent().text())[0];
                    if(busy.indexOf(timeCompare) > -1){
                        $(element).prop('disabled', true);
                        $(element).parent().css("text-decoration", "line-through");
                        $(element).parent().css("color", "gray");
                    }
                }
            })
        } else {
            // if the user uncheck a workshop remove its time from "busy" array
            busy.splice($.inArray(timeMatch, busy),1);
            // loop over other workshops to reshow the competing activities
            $('.activities label input').each((index, element) => {
                if (index >= 1){
                    timeCompare = timeRegex.exec($(element).parent().text())[0];
                    if (busy.indexOf(timeCompare) === -1){
                        $(element).prop('disabled', false);
                        $(element).parent().css("text-decoration", "none");
                        $(element).parent().css("color", "black");
                    }
                }
            })
        }
    }
});
