var sizeGetirelim = document.getElementById('sizegetirelimTab');
var magazadanAlin = document.getElementById('magazadanAlinTab');
var selectionText = document.getElementById('selection');

sizeGetirelim.addEventListener('click',function(){
    magazadanAlin.style.backgroundColor="#E5E5E5";
    sizeGetirelim.style.backgroundColor = "white";
    selectionText.textContent = "Adresime Gelsin"
})


magazadanAlin.addEventListener('click',function(){
    magazadanAlin.style.backgroundColor="white";
    sizeGetirelim.style.backgroundColor = "#E5E5E5";
    selectionText.textContent = "Mağazadan Alacağım"

})