$(document).ready(function() {
    $(`.header_burger`).click(function (event) {
      $(`.header_burger, .menu__body`).toggleClass(`active`); 
    });
});
const pEls = document.querySelectorAll('li');
for (let i=0; i<pEls.length; i++) {
    console.log(pEls[i]);
}