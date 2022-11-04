let validation = document.getElementById('boutonEnvoi');

 let nom = document.getElementById('nom');
 let nomM = document.getElementById('nomManquant');
 let nomV = /^[a-zA-ZéèîïeÉÈÎï][a-zéèêàçîï]+([-'\s[a-zA-ZéèîïeÉÈÎï][a-zéèêàçîï]+)?/;
 validation.addEventListener('click', fValid1);
 
 function fValid1(e){
    if (nom.value === "") {
        e.preventDefault();
        nomM.textContent = "Nom manquant";
        nomM.style.color = "red";
    }else if (nomV.test(nom.value) == false) {
        e.preventDefault();
        nomM.textContent = "Nom incorrect";
        nomM.style.color = "orange";
    } else {

    }
 }

let prenom = document.getElementById('prenom');
let prenomM = document.getElementById('prenomManquant');
let prenomV = /^[a-zA-ZéèîïeÉÈÎï][a-zéèêàçîï]+([-'\s[a-zA-ZéèîïeÉÈÎï][a-zéèêàçîï]+)?/;
validation.addEventListener('click', fValid2);

function fValid2(e){
    if (prenom.value === "") {
        e.preventDefault();
        prenomM.textContent = "Prénom manquant";
        prenomM.style.color = "red";
    }else if (prenomV.test(prenom.value) == false) {
        e.preventDefault();
        prenomM.textContent = "Prénom incorrect";
        prenomM.style.color = "orange";
    } else {

    }
}

let date = document.getElementById('date');
let dateM = document.getElementById('dateManquant');
validation.addEventListener('click', fValid3);

function fValid3(e){
    if (date.value === "") {
        e.preventDefault();
        dateM.textContent = "Date manquante";
        dateM.style.color = "red";
    }
     else {

    }
}

let codep = document.getElementById('codep');
let codepM = document.getElementById('codepManquant');
let codepV = /^([0-9]{5})$/;
validation.addEventListener('click', fValid4);

function fValid4(e){
    if (codep.value === "") {
        e.preventDefault();
        codepM.textContent = "Code postale manquant";
        codepM.style.color = "red";
    }else if (codepV.test(codep.value) == false) {
        e.preventDefault();
        codepM.textContent = "Code postale incorrect";
        codepM.style.color = "orange";
    } else {

    }
}

let mail = document.getElementById('mail');
let mailM = document.getElementById('mailManquant');
let mailV = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
validation.addEventListener('click', fValid5);

function fValid5(e){
    if (mail.value === "") {
        e.preventDefault();
        mailM.textContent = "Éléments de l'adresse mail manquant";
        mailM.style.color = "red";
    }else if (mailV.test(mail.value) == false) {
        e.preventDefault();
        mailM.textContent = "Mail incorrect";
        mailM.style.color = "orange";
    } else {

    }
}





