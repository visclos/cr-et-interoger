// console.log (window.location.href);

// //lier le .json
// fetch("moovie.json") //envoie le .json dans notre serveur 
//     .then(res => res.json()) // fais une promesse a besoin d'une réponse
//     .then(reponse => console.table(reponse.identite.amis[0])); // donne la réponse

// on a retrouver l'image de notre json quand on appuie sur le boutton
// const bouttonClick = () =>
// {
//     fetch("moovie.json")
//     .then(promesse => promesse.json())
//     .then(reponse => {
//         const moovie1Elt = document.querySelector(".Moovie1");
//         const addImg = document.createElement("img");
//         addImg.src = reponse.Avatar.images.img ;
//         moovie1Elt.append(addImg);
//     });
// }
//    const buttonElt = document.querySelector("#recherche");
//    buttonElt.addEventListener("click",bouttonClick)

// mètres nos info json dans le tableaux 

 fetch("moovie.json")// qu'est ce que on envoie dans le serveurs
    .then(promesse => promesse.json())// je lui fais une prommesse qui auras besoin d'une réponse 
    .then(reponse =>{
        // on a ciblé nos élément html
        const tableauElt = document.querySelector("#tableau");
        const tbodyElt = document.querySelector("#tBody");
        const tfootElt = document.querySelector("#tFoot");
        console.log (tbodyElt);
        const trImageElt = tbodyElt.childNodes[1];
        const trTitreElt = tbodyElt.childNodes[3];
        const trRealElt = tbodyElt.childNodes[5];
        const trSortieElt = tbodyElt.childNodes[7];
        const trDureElt =tbodyElt.childNodes[9];
        const trActeurElt = tfootElt.childNodes[1];
        // on crée des élément html 
        const addTdImage = document.createElement("td");
        const addImage = document.createElement("img");
        const addTdTitre = document.createElement("td");
        const addTdReal = document.createElement("td");
        const addTdSortie = document.createElement("td");
        const addTdDure = document.createElement("td");
        const addTdActeur = document.createElement("td");
        
        addTdImage.rowSpan = "5" ;
        addTdActeur.colSpan = "2" ;
        addImage.src = (reponse.Avatar.images.img);
        addImage.classList.add("teste");
        // on insére les ellements dans notre html
        trImageElt.append(addTdImage);
        trTitreElt.append(addTdTitre);
        trRealElt.append(addTdReal);
        trSortieElt.append(addTdSortie);
        trDureElt.append(addTdDure);
        trActeurElt.append(addTdActeur);
        addTdImage.append(addImage);
        //mètres les valeurs de notre json dans nos td
        // addImage.append((reponse.Avatar.images.img))
        addTdTitre.textContent = (reponse.Avatar.infos.titre);
        addTdReal.textContent = (reponse.Avatar.infos.realisateur);
        addTdSortie.textContent = (reponse.Avatar.infos.sortie);
        addTdDure.textContent = (reponse.Avatar.infos.duree);
         addTdActeur.innerText = (reponse.Avatar.infos.acteur);
         console.log( addTdActeur.append = (reponse.Avatar.infos.acteur));
        
    })


    // let th = document.createElement('th');
    //     th.id = 'content';
    //     th.innerHTML = "CreateElement example";
    //     tableau.appendChild(th);