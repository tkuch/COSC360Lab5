function setRequiredInput(e) {
    e.target.style.backgroundColor = e.target.value === "" ? "#FFCBCB" : "white";
}

function setRequiredCheckbox(e) {
    e.target.parentElement.style.backgroundColor = e.target.checked ? "#EBF4FB" : "#FFCBCB";
}

window.addEventListener('load', function(){
    var cssSelector = "input[name=title],textarea[name=description],input[name=accept]";
    var requiredFields = document.querySelectorAll(cssSelector); 
    var checkbox = requiredFields[2];
    var checkboxHolder = checkbox.parentElement;
    for (var i=0; i<requiredFields.length-1; i++){
        requiredFields[i].style.backgroundColor = "#FFCBCB";
        checkboxHolder.style.backgroundColor = "#FFCBCB";
        requiredFields[i].addEventListener('keydown', setRequiredInput);
        requiredFields[i].addEventListener('keyup', setRequiredInput);
        checkbox.addEventListener('click', setRequiredCheckbox);
    }
    var submitButton = document.querySelector("input[type=submit]");
    submitButton.addEventListener('click', function(e) {
        if(!checkbox.checked || requiredFields[0].value === "" || requiredFields[1].value === ""){
            e.preventDefault();
        }
    });
});
