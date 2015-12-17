var form = require('./utils/form');

var nav = document.getElementById('nav').classList;

window.akaCheckMail = () => {
    alert( form.checkMail(document.getElementById('mail').value) );
};

window.akakitNav = () => {
    nav.contains("show") ? nav.remove('show') : nav.add('show');
};

window.akaCheckbox = (name) => {
    alert(form.checkboxArray(name));
};

window.akaRadio = (name) => {
    alert(form.radioValue(name));
};

/*
document.getElementById('footer').onclick = (e) => {
    var target = e.target.classList;
    target.contains('active') ? target.remove('active') : target.add('active');
};*/
