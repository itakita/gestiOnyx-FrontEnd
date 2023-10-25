const jeux = [
    {
      titre: "Mario",
      image: "images/mario.jpg",
      prix: "$19.99"
    },
    {
      titre: "Minecraft",
      image: "images/minecraft.jpg",
      prix: "$29.99"
    },
    {
        titre: "The Legend of Zelda: Breath of the Wild",
        image: "images/ZeldaBOTW.jpg",
        prix: "$59.99"
      },
      {
        titre: "Grand Theft Auto V",
        image: "images/GTA5.jpg",
        prix: "$49.99"
      },
      {
        titre: "Red Dead Redemption 2",
        image: "images/RDR2.jpg",
        prix: "$39.99"
      },
      {
        titre: "Call of Duty: Warzone",
        image: "images/CODWZ.jpg",
        prix: "Gratuit"
      },
      {
        titre: "Cyberpunk 2077",
        image: "chemin-vers-l-image.jpg",
        prix: "$49.99"
      },
      {
        titre: "Animal Crossing: New Horizons",
        image: "chemin-vers-l-image.jpg",
        prix: "$49.99"
      },
      {
        titre: "Overwatch",
        image: "chemin-vers-l-image.jpg",
        prix: "$39.99"
      },
      {
        titre: "Halo Infinite",
        image: "chemin-vers-l-image.jpg",
        prix: "$59.99"
      },
      {
        titre: "Assassin's Creed Valhalla",
        image: "chemin-vers-l-image.jpg",
        prix: "$49.99"
      },
      {
        titre: "Super Mario Odyssey",
        image: "chemin-vers-l-image.jpg",
        prix: "$49.99"
      }
    ];

  function afficherJeux() {
    const container = document.getElementById("jeux-container");

    jeux.forEach((jeu) => {
      const jeuElement = document.createElement("div");
      jeuElement.classList.add("jeu");
  
      jeuElement.innerHTML = `
        <div class="nom">${jeu.titre}</div>
        <hr>
        <div class="image"><img src="${jeu.image}" height="200" width="200"></div>
        <div class="descriptionEtButton">
          <div class="prix">${jeu.prix}</div>
          <div><button>Acheter</button></div>
        </div>
      `;
  
      container.appendChild(jeuElement);
    });
  }
  
 
  document.addEventListener("DOMContentLoaded", function () {
    afficherJeux();
  });