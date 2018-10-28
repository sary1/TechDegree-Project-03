// Creating a textarea and appending it directly to the DOM
// with required attributes using jQuery for practice
/*
const $textArea = $("<textarea></textarea>");
$textArea.attr('id', 'other-title');
$textArea.attr('placeholder', 'Your Job Role');
    // pushing the text area to a new line by adding (break line)
$('#title').parent().append("<br>");
$('#title').parent().append($textArea);
    // hiding the textarea until the user selects (other) option
    $textArea.hide();
*/


// colorName = colorName.replace(jsPunsReplace, '');
// $(tshirtColor).text(colorName);
// colorName = colorName.replace(loveJsReplace, '');
// $(tshirtColor).text(colorName);
/*
if (tshirt === 'js puns') {
        $('#color').children().each((index, tshirtColor) => {
            $(tshirtColor).attr("selected",false);
            let colorName = $(tshirtColor).text();
            if(!jsPuns.test(colorName)){
                $(tshirtColor).hide();
            } else {
                $(tshirtColor).show();
            }
        })
        $('option[value="cornflowerblue"]').attr("selected",true);
    } else {
        $('#color').children().each((index, tshirtColor) => {
            $(tshirtColor).attr("selected",false);
            colorName = $(tshirtColor).text();
            if (jsPuns.test(colorName)) {
                $(tshirtColor).hide();
            } else {
                $(tshirtColor).show();
            }
        })
        $('option[value="tomato"]').attr("selected",true);
    }
*/

/*
function replaceText(){
    let colorNameReplace;
    $('#color').children().each((index, tshirtColor) => {
        colorNameReplace = $(tshirtColor).text();
        if (jsPuns.test(colorNameReplace)){
            colorNameReplace = colorNameReplace.replace(jsPunsReplace, '');
            $(tshirtColor).text(colorNameReplace);
        }
        if (loveJs.test(colorNameReplace)){
            colorNameReplace = colorNameReplace.replace(loveJsReplace, '');
            $(tshirtColor).text(colorNameReplace);
        }
    })
}

replaceText();
*/

