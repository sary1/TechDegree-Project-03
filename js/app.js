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


/********************************
*********************************
    "Payment Info" section
*********************************
********************************/


function hidePayments(){
    $('#credit-card').hide();
    $('#paypal').hide();
    $('#bitcoin').hide();
}

hidePayments();

$('#payment').on('change', (e) => {
    hidePayments();
    $('option[value="select_method"]').hide();
    if(e.target.value === 'credit card') $('#credit-card').show();
    if(e.target.value === 'paypal') $('#paypal').show();
    if(e.target.value === 'bitcoin') $('#bitcoin').show();
})


/********************************
*********************************
        Form validation
*********************************
********************************/


// Check the name input validation
function validNameInput(){
    let inputValue = $('#name').val();
    const nameError = "<p class='nameWarning'>Name is required</p>";
    if(!inputValue && $('.nameWarning').length === 0){
        $('#name').css('border', '2px solid red');
        $('#name').after(nameError);
    }
    if(inputValue && $('.nameWarning').length > 0) {
        $('#name').css('border', 'none');
        $('.nameWarning').remove();
    }
}

// Check the email input validation
function validMailInput(){
    if($('#mail').val()){
        if($('.initMailWarning')) $('.initMailWarning').remove();
        const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i
        const mailVal = emailRegex.test($('#mail').val());
        const secMailError = "<p class='mailWarning'>Email is not valid</p>";
        if(!mailVal && $('.mailWarning').length === 0){
            $('#mail').css('border', '2px solid red');
            $('#mail').after(secMailError);
        }
        if(mailVal && $('.mailWarning').length > 0) {
            $('#mail').css('border', 'none');
            $('.mailWarning').remove();
        }
    } else {
        const mailError = "<p class='initMailWarning'>Please enter an Email</p>";
        if($('mailWarning')) $('.mailWarning').remove();
        if($('.initMailWarning').length === 0){
            $('#mail').css('border', '2px solid red');
            $('#mail').after(mailError);
        }
    };
}

// Check the activity inputs validation
function validActivityInput(){
    let activity = [];
    const activityError = "<p class='activityWarning'>At least one activity must be selected</p>";
    $('.activities label input').each((index, element) => {
        activity.push(element.checked);
    })
    if (activity.indexOf(true) === -1 && $('.activityWarning').length === 0){
        $('.activities').after(activityError);
    }
    if (activity.indexOf(true) !== -1 && $('.activityWarning').length > 0){
        $('.activityWarning').remove();
    }
}

// Check the credit card number input validation
function validCardNum(numRegex, creditCardNumError){
    if(!numRegex.test($('#cc-num').val()) && $('.creditCardNumWarning').length === 0){
        $('#cc-num').css('border', '2px solid red');
        $('#credit-card').after(creditCardNumError);
    }
    if(numRegex.test($('#cc-num').val()) && $('.creditCardNumWarning').length > 0){
        $('#cc-num').css('border', 'none');
        $('.creditCardNumWarning').remove();
    }
}

// Check the credit card zip number input validation
function validCardZip(zipRegex, creditCardZipError){
    if(!zipRegex.test($('#zip').val()) && $('.creditCardZipWarning').length === 0){
        $('#zip').css('border', '2px solid red');
        $('#credit-card').after(creditCardZipError);
    }
    if(zipRegex.test($('#zip').val()) && $('.creditCardZipWarning').length > 0){
        $('#zip').css('border', 'none');
        $('.creditCardZipWarning').remove();
    }
}

// Check the credit card cvv number input validation
function validCardCvv(cvvRegex, creditCardcvvError){
    if(!cvvRegex.test($('#cvv').val()) && $('.creditCardCvvWarning').length === 0){
        $('#cvv').css('border', '2px solid red');
        $('#credit-card').after(creditCardcvvError);
    }
    if(cvvRegex.test($('#cvv').val()) && $('.creditCardCvvWarning').length > 0){
        $('#cvv').css('border', 'none');
        $('.creditCardCvvWarning').remove();
    }
}

// Check the credit card all inputs validation on Register
const numRegex = /^\d{13,16}$/;
const zipRegex = /^\d{5}$/;
const cvvRegex = /^\d{3}$/;
const creditCardNumError = "<p class='creditCardNumWarning'>Credit Card number must be 13 - 16 digits</p>";
const creditCardZipError = "<p class='creditCardZipWarning'>Credit Card Zip number must be 5 digits</p>";
const creditCardCvvError = "<p class='creditCardCvvWarning'>Credit Card CVV number must be 3 digits</p>";

function validCreditCard(){
    validCardCvv(cvvRegex, creditCardCvvError);
    validCardZip(zipRegex, creditCardZipError);
    validCardNum(numRegex, creditCardNumError);
    if(validCardCvv(cvvRegex, creditCardCvvError) &&
        validCardZip(zipRegex, creditCardZipError) &&
        validCardNum(numRegex, creditCardNumError)){
    }
}

$('button[type="submit"]').on('click', (e) => {

    // prevent the default page reload
    e.preventDefault();

    // getting input value
    validNameInput();

    // assure the email is a valid one
    validMailInput();

    // user must check at least one checkbox activity
    validActivityInput();

    // Payment verification
    if($('#payment').val() === "credit card"){
        validCreditCard();
    }

    // reload page if no errors exist
    if(!$('.nameWarning').length &&
        !$('.mailWarning').length &&
        !$('.activityWarning').length &&
        !$('.creditCardNumWarning').length &&
        !$('.creditCardZipWarning').length &&
        !$('.creditCardCvvWarning').length &&
        !$('.initMailWarning').length){
        location.reload();
    }

    // go back to top if there are errors
    window.scrollTo(0, 0);
})


/********************************
*********************************
    Real-time Error Messages
*********************************
********************************/


$('#name').on('input', () => {validNameInput();})
$('#name').on('focusout', () => {validNameInput();})

// $('#mail').on('keydown', () => {validMailInput();})
$('#mail').on('input', () => {validMailInput();})

$('#cc-num').on('input', () => {validCardNum(numRegex, creditCardNumError);})
$('#cc-num').on('keydown', () => {validCardNum(numRegex, creditCardNumError);})

$('#zip').on('input', () => {validCardZip(zipRegex, creditCardZipError);})
$('#zip').on('keydown', () => {validCardZip(zipRegex, creditCardZipError);})

$('#cvv').on('input', () => {validCardCvv(cvvRegex, creditCardCvvError);})
$('#cvv').on('keydown', () => {validCardCvv(cvvRegex, creditCardCvvError);})

$('.activities label input').on('change', () => {$('.activityWarning').remove();});
