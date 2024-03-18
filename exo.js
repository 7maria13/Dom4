// 1.
console.log(chanson);

// Sélectionner l'élément h1 du document HTML
let titre = document.createElement("h1");

// Modifier son contenu avec le titre et l'auteur de la chanson
titre.innerHTML = `<small>${chanson.auteur} -</small> ${chanson.titre}`;
document.body.appendChild(titre);

// Créer une case à cocher 1
const checkbox1 = document.createElement('input');
checkbox1.type = 'checkbox';
checkbox1.id = 'checkbox1'; // Définissez un ID pour la première case à cocher

// Créer une étiquette pour la première case à cocher
const label1 = document.createElement('label');
label1.htmlFor = 'checkbox1';
label1.textContent = 'Masquer les refrains';

// Ajoutez la première case à cocher et son étiquette au corps du document
document.body.appendChild(checkbox1);
document.body.appendChild(label1);

// Créer une case à cocher 2 (similaire au processus ci-dessus)
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

// 2.
// Créer une div avec la classe paroles
let paroles = document.createElement("div");
paroles.className = "paroles";

// Ajouter les couplets
chanson.paroles.forEach(couplet => {

  // Créer un élément p
  let p = document.createElement("p");
  p.classList = couplet.type;

  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  span2.classList = 'contenu';

  if (couplet.type === 'verset') {
    span1.classList = "verset1 hidden";
    span1.innerHTML = "[Verset] <br />";
  } else if (couplet.type === 'choeur') {
    refrain.classList = "choeur";
    refrain.style.backgroundColor = "#f0f0f0";

    // Survol du refrain
    refrain.addEventListener('mouseover', () => {
      refrain.style.backgroundColor = "#c0c0c0";
    });
    refrain.addEventListener('mouseout', () => {
      refrain.style.backgroundColor = "#f0f0f0";
    });
  } else {
    span1.classList = couplet.type;
    span1.classList = "definition hidden";
    span1.innerHTML = "[Pont] <br />";
  }

  // Ajouter les lignes du couplet avec des sauts de ligne
  span2.innerHTML = couplet.contenu.join("<br>");
  p.prepend(span1);
  p.append(span2);

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
    label2.textContent = "Afficher les paroles";
  } else {
    paroles.style.display = "block";
    hr.style.display = "block";
    label2.textContent = "Masquer les paroles";
  }
});

// Masquer les refrains
const contenu = document.querySelector(".contenu")
const verset =document.querySelector(".verset")
const refrain =document.querySelectorAll(".choeur")
const definition =document.querySelectorAll(".definition")
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