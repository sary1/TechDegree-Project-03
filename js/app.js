// Making actions on page load (when the document is ready)
$(document).ready(() => {
    // setting the focus on the name input field
    $('form fieldset #name').focus();
})

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


// Activities total cost
let cost = "Total: $";
let totalCost, costMatch, timeMatch;
let tuesday = [];
let wednesday = [];
const costRegex = /\d{3}/;
const timeRegex = /\w+ \d\d?\wm-\d\d?\wm/;
let costChild = '<p>' + cost + totalCost + '</p>';
$('.activities label input').on('click', (e) => {
    // Delete the previous cost Node
    if($('.activities p')){
        $('.activities p').remove();
    }

    // Extract day and time of every workshop
    if(e.target.parentNode.textContent != " Main Conference — $200"){
        timeMatch = timeRegex.exec(e.target.parentNode.textContent)[0];
        timeMatch = timeMatch.split(" ");
        console.log(timeMatch);
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


// timeMatch = timeRegex.exec(elementText);
// console.log(timeMatch);
