// element references

const $skillList = $('#skillList');
const $addSkill = $('#addSkill');

$('#addSkill').click(function(evt){
    evt.preventDefault();
    const userInput = $('#userInput').val();
    console.log(userInput)
    $skillList.append(`<li><button class="removeSkill"> X </button> ${userInput}</li>`);
    

    $('.removeSkill').click(function(){
        $(this).closest('li').remove()
    })
})


