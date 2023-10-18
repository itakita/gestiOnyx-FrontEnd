function changerArrierePlan(){
    document.getElementsByClassName("mainFlex")[0].style.backgroundColor = "blue"
}

function changerImage(){
    document.getElementsByClassName("mainFlex")[0].style.backgroundImage = "url('https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')";
    document.getElementById("nomEcole").style.backgroundColor = "blue";
}

function afficherAccord(){
    let accord = $("#noteEntree").val();
    
    switch(accord){
        case "a":
            $("#accordAffiche").attr("src", "images/a.png")
            break;
        case "b":
            $("#accordAffiche").attr("src", "images/b.png")
            break;
        case "c":
            $("#accordAffiche").attr("src", "images/c.png")
            break;
        case "d":
            $("#accordAffiche").attr("src", "images/d.png")
            break;
        case "e":
            $("#accordAffiche").attr("src", "images/e.png")
            break;
         case "f":
            $("#accordAffiche").attr("src", "images/f.png")
            break;
        case "g":
            $("#accordAffiche").attr("src", "images/g.png")
            break;
        default:
            alert("out of range");
    }
    //alert(accord);
}


function validerReponse(){
    if($("#choix").val() != 6)
    {
        alert("Mauvaise réponse");
        alert("Entrez une réponse, f/");
    }
    else
        alert("Bonne réponse");
}
const maDate = new Date();

let day = maDate.getDate();
let month = maDate.getMonth() + 1;
let year = maDate.getFullYear();

let currentDate = `${day}-${month}-${year}`;
//console.log(currentDate); // "17-6-2022"
$(document).ready(
    alert(`Bienvenu(e) en ce :${currentDate }`),
    $("#bienvenu").mouseover(
        changerImage
    ), 

    $("#noteEntree").keypress(function(e){
        if(e.which == 13){
            alert("Enter detected")
            afficherAccord()
        }
    }),
    $("#valider").click(function(){
        validerReponse();
        // let a = $("#choix").val()
        // alert("Clicked" + a)
    }),
);
