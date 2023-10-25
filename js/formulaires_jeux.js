function creationObjet(event) {
    /*
    event.preventDefault();
    const myFormData = new FormData(event.target);
    console.log(myFormData);*/
    event.preventDefault();
    const myFormData = new FormData(event.target);

    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
    $("#detailsClient").html(`<div class="alert alert-success" role="alert">
    Inscription réussie  
  </div> <br> Voici les informations enregistrées: <br> Nom : ${formDataObj.nom}<br> Prenom : ${formDataObj.prenom} <br> Email : ${formDataObj.email} <br> age : ${formDataObj.age} <br> instrument : ${formDataObj.instrument}`);
}



$(document).ready(function(){
    $("#nom").bind('keyup change paste', (function(){
        const valeur = $("#nom").val();
        const nom = valeur.charAt(0).toUpperCase() + valeur.slice(1);
        $("#nom").val(nom)
    })),

    $("#prenom").bind('keyup change paste', (function(){
        const valeur = $("#prenom").val();
        const nom = valeur.charAt(0).toUpperCase() + valeur.slice(1);
        $("#prenom").val(nom)
    })),
    $("#formInscription").submit(function(event){
        alert("Success");
        creationObjet(event);
    })
})

