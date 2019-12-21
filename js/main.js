
function changeBold() {
    var textState = document.getElementById('message').style.fontWeight;
    if (textState != 'bold') {
        document.getElementById('message').style.fontWeight = 'bold';
    } else {
        document.getElementById('message').style.fontWeight = 'normal';
    }
}


function changeItalic() {
    var textState = document.getElementById('message').style.fontStyle;
    if (textState != 'italic') {
        document.getElementById('message').style.fontStyle = 'italic';
    }
    else {
        document.getElementById('message').style.fontStyle = 'normal';
    }
}

// function dounderline() {
//     var textState = document.getElementById5('message').style.textDecoration;
//     if (textState != 'underline' ) {
//         document.getElementById5('message').style.textDecoration = 'underline';
//     }else {
//         document.getElementById5('message').style.textDecoration = 'none';
//     }
// }
function changeunderline(){
    var textdeco=document.getElementById('message').style.textDecoration;
    if (textdeco != 'underline'){
        document.getElementById('message').style.textDecoration = 'underline' ;      
    }else{
        document.getElementById('message').style.textDecoration = 'none' ; 
    }
}


function changeSize(event) {
    document.getElementById('message').style.fontSize = event.value;
}
aler