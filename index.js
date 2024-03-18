// console.log(chanson);
// Structure de Chanson:
// - auteur: string
// - titre: string
// - paroles : [Couplet, Couplet, ...]

// Structure de Couplet:
// id : string
// type : string
// chanteur : string
// contenu: tableau contenant les lignes du couplet

// 1.
console.log(chanson);
 // Sélectionner l'élément h1 du document HTML
    let titre = document.createElement("h1");
    // Modifier son contenu avec le titre et l'auteur de la chanson
    titre.innerHTML = `<small>${chanson.auteur} -</small> ${chanson.titre}`;
    document.body.appendChild(titre);

    // Créez une case à cocher 1
const checkbox1 = document.createElement('input');
checkbox1.type = 'checkbox';
checkbox1.id = 'checkbox1'; // Définissez un ID pour la première case à cocher

// Créez une étiquette pour la première case à cocher
const label1 = document.createElement('label');
label1.htmlFor = 'checkbox1';
label1.textContent = 'Masquer les refrains';

// Ajoutez la première case à cocher et son étiquette au corps du document
document.body.appendChild(checkbox1);
document.body.appendChild(label1);

// Créez une case à cocher 2 (similaire au processus ci-dessus)
const checkbox2 = document.createElement('input');
checkbox2.type = 'checkbox';
checkbox2.id = 'checkbox2';

const label2 = document.createElement('label');
label2.htmlFor = 'checkbox2';
label2.textContent = 'Masquer les paroles';

document.body.appendChild(checkbox2);
document.body.appendChild(label2);

// Ajoutez une ligne horizontale (hr) en dessous des cases à cocher
const hr = document.createElement('hr');
document.body.appendChild(hr);
// const checkboxRefrains = document.getElementById('masquer-refrains');
// const refrains = document.querySelectorAll('.refrain:not(:first-of-type)');
// 2.
 // Créer une div avec la classe paroles
 let paroles = document.createElement("div");
 paroles.className = "paroles";
 // Ajouter les couplets
 chanson.paroles.forEach(couplet => {
    
   // Créer un élément p
   let p = document.createElement("p");
   p.classList = couplet.type
   const span1 = document.createElement('span');
   const span2 = document.createElement('span');
   span2.classList = 'contenu'
   if (couplet.type === 'verset') {
    span1.classList = "verset1 hidden"
    span1.innerHTML = "[Verset] <br />"
   } else if(couplet.type === 'choeur') {
    
   } else {
    span1.classList = couplet.type
    // span1.innerText = couplet.type
    span1.classList = "definition hidden spanchoeur"
    span1.innerHTML = "[choeur] <br />"
   }
   // Ajouter les lignes du couplet avec des sauts de ligne
   span2.innerHTML = couplet.contenu.join("<br>");
   p.prepend(span1)
   p.append(span2)
   // Ajouter l'élément p à la div
   paroles.appendChild(p);
 });
 // Ajouter la div à l'élément body
 document.body.appendChild(paroles);
 // 3.
// Créer un élément footer
let footer = document.createElement("footer");
// Ajouter le texte du droit d'auteur
footer.textContent = "©️ Copyright 2023 - Codeloccol";
// Ajouter le footer à l'élément body
document.body.appendChild(footer);

// 4.
// Masquer les paroles
const check2 = document.getElementById('checkbox2');
check2.addEventListener('click', function (event) {
  if (event.target.checked) {
    paroles.style.display = "none";
    hr.style.display = "none";
    label2.textContent = "Afficher les paroles"
  } else {
    paroles.style.display = "block"
    hr.style.display = "block"
    label2.textContent = "Masquer les paroles"
  }
})
check2.addEventListener('change', () => {
  if (check1.checked) {
    check1.checked = false;
  }
})

// Masquer les refrains
const contenu = document.querySelector(".contenu")
const verset = document.querySelector(".verset")
const refrain = document.querySelectorAll(".choeur")
const definition = document.querySelectorAll(".definition")
const check1 = document.getElementById('checkbox1');

check1.addEventListener('click', function (event) {
  if (event.target.checked) {
    for (let i = 0; i < refrain.length; i++) {
      console.log(refrain[i]);
      refrain[i].style.display = "none"

      definition.forEach(element => {
        element.classList.remove('hidden')
        
      });
      
      label1.textContent = "Afficher les refrains"
    }
    
  } else {
    for (let i = 0; i < refrain.length; i++) {
      console.log(refrain[i]);
      refrain[i].style.display = "block"
      label1.textContent = "Masquer les refrains"
      
    }
    
     
  }
  
})
check1.addEventListener('change', () => {
  if (check2.checked) {
    check2.checked = false;
    paroles.style.display = "block";
     }
  })


  // for (let i = 0; i < refrain.length; i++) {
  //   refrain[i].addEventListener('mouseover', function() {
  //     this.style.display = "none"
  //    // backgroundColor = "#c0c0c0"; 
     
  //   });
  //   refrain[i].addEventListener('mouseout', function() {
  //     this.style.display = "block"
  //    // backgroundColor = ""; 
     
  //   });
  // }
  
  





 const allchoeur = document.querySelectorAll('.spanchoeur')
  console.log(allchoeur);
  allchoeur.forEach((choeur, i) => {
   choeur.addEventListener('mouseenter', function(){
      refrain[i].style.display = "block"
    })

    choeur.addEventListener('mouseout', function(){
      refrain[i].style.display = "none"
    })
  } )
  //l effet du survol
 // for (let i = 0; i < refrain.length; i++) {
  //  refrain[i].addEventListener('mouseenter', function() {
  //    this.style.backgroundColor = "#c0c0c0"; // Couleur de fond au survol
   //   this.style.display = "block"; // Affichage du contenu
      
   // });
   // refrain[i].addEventListener('mouseleave', function() {
     // this.style.backgroundColor = "#f0f0f0"; // Couleur de fond par défaut
    //  this.style.display = "none"; // Disparition du contenu
      
  //  });
 // }
 
  




 
// 4.

// const checkbox2Paroles = document.getElementById('masquer-paroles');
// const divParoles = document.querySelector('.paroles'); // Sélectionnez la div contenant les paroles

// checkbox2Paroles.addEventListener('click', () => {
//   if (checkbox2Paroles.checked) {
//     // Masquer les paroles
//     divParoles.style.display = 'none';
//     label2Paroles.textContent = 'Afficher les paroles'; // Modifiez le texte de l'étiquette
//   } else {
//     // Afficher les paroles
//     divParoles.style.display = 'block'; // Ou 'initial' si vous avez un style différent par défaut
//     label2Paroles.textContent = 'Masquer les paroles'; // Modifiez le texte de l'étiquette
//   }
// });

// const checkbox1Refrains = document.getElementById('masquer-refrains');
// const refrains = document.querySelectorAll('.refrain:not(:first-of-type)'); // Sélectionnez tous les refrains sauf le premier

// checkbox1Refrains.addEventListener('click', () => {
//   if (checkbox1Refrains.checked) {
//     // Remplacez les refrains par "[Refrain]"
//     refrains.forEach(refrain => {
//       refrain.textContent = '[Refrain]';
//     });
//     label1Refrains.textContent = 'Afficher les refrains'; // Modifiez le texte de l'étiquette
//   } else {
//     // Restaurez les refrains d'origine
//     refrains.forEach((refrain, index) => {
//       refrain.textContent = chanson.refrains[index];
//     });
//     label1Refrains.textContent = 'Masquer les refrains'; // Modifiez le texte de l'étiquette
//   }
// });
// refrains.forEach(refrain => {
//   refrain.addEventListener('mouseenter', () => {
//     // Affichez le contenu du refrain (par exemple, dans une info-bulle)
//     // Vous pouvez utiliser un attribut "title" ou créer un élément supplémentaire pour afficher le contenu
//     // Par exemple :
//     const contenuRefrain = chanson.refrains[refrains.indexOf(refrain)];
//     refrain.title = contenuRefrain; // Utilisez l'attribut "title"
//     // Ou créez un élément supplémentaire (par exemple, un <span>) et ajoutez-le au DOM
//   });
// });
