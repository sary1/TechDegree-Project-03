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

/*
$('.activities label input').on('click', (e) => {
    if($('.activities p')){
        $('.activities p').remove();
    }
    totalCost = 0;
    $('.activities label input').each((index, element) => {
        if (element.checked){
            elementText = element.parentNode.textContent;
            costMatch = costRegex.exec(elementText);
            totalCost += parseInt(costMatch);
        }
    })
    costChild = '<p>' + cost + totalCost + '</p>';
    $('.activities').append(costChild);
})
*/



/*
    if(".activities :unchecked"){
        timeMatch = timeRegex.exec($(e.target).parent().text())[0];
        console.log(timeMatch)
        $('.activities label input').each((index, element) => {
            if(index >= 1){
                if(timeRegex.exec($(element).parent().text())[0] === timeMatch){
                    $(element).prop('disabled', false);
                    $(element).parent().css("text-decoration", "none");
                }
            }
        })
        // console.log($(e.target).parent().text());
    }
*/

/*
    if(".activities :unchecked"){
        console.log("111", busy);
        timeMatch = timeRegex.exec($(e.target).parent().text())[0];
        busy.splice($.inArray(timeMatch, busy),1);
        // $('.activities label input').each((index, element) => {

        // })
        console.log("000", busy);
    }
*/

/*
   // if( $(this).is(':checked') ){
   //      timeMatch = timeRegex.exec($(e.target).parent().text())[0];
   //      busy.push(timeMatch);
   //      // console.log(e.target, 'checked');
   //      console.log(timeMatch)
   // }
*/
