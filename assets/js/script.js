// L'input nom doit comporter au moins 1 caractère.
let form = document.getElementById("form");
console.log(form.nom)
form.nom.addEventListener("change", function ()
{
    valideNom(this);
});

const valideNom = function (inputNom)
{
    let nomregx = new RegExp('^[a-zA-Z ]+$');
    let testsnom = nomregx.test(inputNom.value);
    if (testsnom === false)
    {
        alert("Entrez un nom valide s.v.p");
    }
    console.log(testsnom);
}
valideNom();

// // L'input contact doit comporter au moins 1 caractère.
// form.contact.addEventListener("change", function ()
// {
//     valideContact(this);
// });
// const valideContact = function (inputContact)
// {
//     let contactregx = new RegExp('^[a-zA-Z ]+$');
//     let testcontact = contactregx.test(inputContact.value);
//     if (testcontact === false)
//     {
//         alert("Entrez le nom de la personne a contacter s.v.p !");
//     }
//     console.log(testcontact);
// }
// L'input codep doit comporter 5 caractères numériques.
form.codep.addEventListener("change", function ()
{
    valideCodep(this);
});
const valideCodep = function (inputCodep)
{
    let codepregx = new RegExp('^([0-9]{5})$');
    let testcodep = codepregx.test(inputCodep.value);
    if (testcodep === false)
{
    alert("Entrez le code postal sur 5 chiffres s.v.p !");
}
    console.log(testcodep);
}
valideCodep();
// // L'input ville doit comporter au moins 1 caractère.
// form.ville.addEventListener("change", function ()
// {
//     valideVille(this);
// });
// const valideVille = function (inputVille)
// {
//     let villeregx = new RegExp('^[a-zA-Z ]+$');
//     let testville = villeregx.test(inputVille.value);
//     console.log(testville);
// }