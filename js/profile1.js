var tombolpopup =
document.getElementById('tombolpopup');
var popup = 
document.getElementById('popup');
var tutuppopup =
document.getElementById('tutuppopup');


tombolpopup.addEventListener('click', function(){
    popup.style.display ='block';
});

tutuppopup.addEventListener('click', function(){
    popup.style.display ='none';
});