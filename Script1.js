

var textBox = null;
var button = null;

var textBox_Change = function (e) {
    
    button_SetVisibility();
};

var button_SetVisibility = function () {
    
    if ((button.style.visibility === 'visible') && (textBox.value === '')) {
        button.style.visibility = 'hidden';
    } else {
        
        button.style.visibility = 'visible';
    }
};

var button_Click = function (e) {
    textBox.value = '';
    button_SetVisibility();
};


(function () {
    // references for the textbox and button 
    textBox = document.getElementById("YourTextBox");
    button = document.getElementById("YourButton");
  
    if ('' === button.style.visibility) { button.style.visibility = 'visible'; }
    // assign event handlers 
    textBox.onchange = textBox_Change;
    button.onclick = button_Click;
    //  callingfunction 
    button_SetVisibility();
})();
