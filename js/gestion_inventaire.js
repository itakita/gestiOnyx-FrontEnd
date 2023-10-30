const jeux = [
    {
        id: "1",
      nom: "Mario",
      type: "images/mario.jpg",
      prix: "$19.99",
      dateDeSortie: "Mario",
      description: "images/mario.jpg",
      image: "$19.99",

    },
    {
        id: "2",
      nom: "Mario",
      type: "images/mario.jpg",
      prix: "$19.99",
      dateDeSortie: "Mario",
      description: "images/mario.jpg",
      image: "$19.99",
    },
    {
        id: "3",
      nom: "Mario",
      type: "images/mario.jpg",
      prix: "$19.99",
      dateDeSortie: "Mario",
      description: "images/mario.jpg",
      image: "$19.99",
      },
      {
        id: "4",
      nom: "Mario",
      type: "images/mario.jpg",
      prix: "$19.99",
      dateDeSortie: "Mario",
      description: "images/mario.jpg",
      image: "$19.99",
      },
      {
        id: "5",
      nom: "Mario",
      type: "images/mario.jpg",
      prix: "$19.99",
      dateDeSortie: "Mario",
      description: "images/mario.jpg",
      image: "$19.99",
      },
      {
        id: "6",
      nom: "Mario",
      type: "images/mario.jpg",
      prix: "$19.99",
      dateDeSortie: "Mario",
      description: "images/mario.jpg",
      image: "$19.99",
      }
    ];


    function remplirTableauInventaire(){
        const tableau = document.getElementById('tableau-inventaire');
        const entete = document.getElementById('tableau-inventaire-entete-entete');
    
        jeux.forEach(function(jeu){
            const tdIdDeProduit= document.createElement('td');
            const tdNom = document.createElement('td');
            const tdType= document.createElement('td');
            const tdPrix = document.createElement('td');
            const tdDateDeSortie= document.createElement('td');
            const tdDescription = document.createElement('td');
            const tdUrlImage = document.createElement('td');
            const tdActions = document.createElement('td');
            const tr = document.createElement('tr');
            tr.append(tdIdDeProduit, tdNom,tdType,tdPrix,tdDateDeSortie,tdDescription,tdUrlImage, tdActions);
    
            tdIdDeProduit.innerText = jeu.id;
            tdNom.innerText = jeu.nom;
            tdType.innerText = jeu.type;
            tdPrix.innerText = jeu.prix;
            tdDateDeSortie.innerText = jeu.dateDeSortie;
            tdDescription.innerText = jeu.description;
            tdUrlImage.innerHTML = jeu.image;
            tdActions.innerHTML = `<button class="btn btn-large btn-success">Modifier</button>
                                    <button class="btn btn-large btn-success">Supprimer</button>`
            tableau.append(tr);
            tableau.style.color = "black";
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        remplirTableauInventaire();
      });