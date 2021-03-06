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
    checkbox.parentElement.style.backgroundColor = "#FFCBCB";
    for (var i=0; i<requiredFields.length-1; i++){
        requiredFields[i].style.backgroundColor = "#FFCBCB";
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
    var resetButton = document.querySelector("input[type=reset]");
    resetButton.addEventListener('click', function() {
        requiredFields[0].style.backgroundColor = "#FFCBCB";
        requiredFields[1].style.backgroundColor = "#FFCBCB";
        checkbox.parentElement.style.backgroundColor = "#FFCBCB";
    });
});
