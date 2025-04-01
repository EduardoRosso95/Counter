
//Dichiarazione variabili, tramite i selettori
const displaycounter_container = document.querySelector("#displaycounter-container");
const bodycounter_container = document.querySelector("#bodycounter-container");
const footer = document.querySelector("footer");

//CREAZIONE ELEMENTI HTML
//Creo elementi html attraverso la manipolazione del DOM
//Contatore
const displaycounter = document.createElement("p");
const decrementbutton = document.createElement("button");
const incrementbutton = document.createElement("button");
const decrementbutton_image = document.createElement("img");
const incrementbutton_image = document.createElement("img");
//Personaggio
const personagesnail = document.createElement("img");


//POSIZIONAMENTO DEGLI ELEMENTI CREATI
//Posiziono all'interno del display del contatore
displaycounter_container.appendChild(displaycounter);
//Posiziono all'interno del corpo del contatore
bodycounter_container.appendChild(decrementbutton);
bodycounter_container.appendChild(incrementbutton);
decrementbutton.appendChild(decrementbutton_image);
incrementbutton.appendChild(incrementbutton_image);
//Posiziono il personaggio all'interno del footer
footer.appendChild(personagesnail);

//MODIFICHE DEGLI ELEMENTI CREATI
//display del contatore
displaycounter.classList.add("display-1", "fw-bold");
displaycounter.textContent = 0;
//corpo del contatore
//Bottone decremento
decrementbutton.classList.add("btn", "btn-lg", "px-2");
decrementbutton_image.src = "./assets/img/btn_decrement_counter.gif";
decrementbutton_image.classList.add("img-btn-counter");
decrementbutton_image.alt = "Decrement button";
decrementbutton_image.width = 100;
decrementbutton_image.height = 100;
//Bottone incremento
incrementbutton.classList.add("btn", "btn-lg", "px-2");
incrementbutton_image.src = "./assets/img/btn_increment_counter.gif";
incrementbutton_image.classList.add("img-btn-counter");
incrementbutton_image.alt = "Increment button";
incrementbutton_image.width = 100;
incrementbutton_image.height = 100;
//Personaggio
personagesnail.classList.add("img-footer", "pb-5");
personagesnail.alt = "Personaggio immagine footer";
personagesnail.src = "./assets/img/snail.gif";

//Definisco le direzione del personaggio caricando due immagini a specchio
personagesnail.src = "./assets/img/snail_rotate.gif";
const pathreverse = personagesnail.src;
//Riporto il personaggio alla posizione iniziale
personagesnail.src = "./assets/img/snail.gif";
const path1 = personagesnail.src; 

//Variabile attraverso il quale tengo il conteggio del contatore
let i = 0;
 
//INIZIO FUNZIONI

//eventLister 'click' sul btnincrement per incrementare il contatore ed attivare l'animazione del personaggio e dello sfondo del footer
incrementbutton.addEventListener("click", ((e) => { 
  
  //Richiamo la funzione animationFooter() che serve a spostare lo sfondo dietro al personaggio
  animationFooter("+"); 

  //Questo controllo mi permette di creare un'interazione dinamica sul personaggio.
  if (personagesnail.src == path1){
      personagesnail.src = "./assets/img/snail_alt.gif";
  }else {
      personagesnail.src = "./assets/img/snail.gif";
  };

 //Incremento il contatore e lo visualizzo a schermo
 i++;
 displaycounter.textContent = i ;

}));

//eventLister 'click' sul btndecrement per decrementare il contatore ed attivare l'animazione del personaggio e dello sfondo del footer a specchio
decrementbutton.addEventListener("click", ((e) => { 
  
  animationFooter("-"); //Richiamo la funzione animationFooter() passando '-' come valore  
  
  if (personagesnail.src == pathreverse){
    personagesnail.src = "./assets/img/snail_rotate_alt.gif";
  }else {
    personagesnail.src = "./assets/img/snail_rotate.gif";
  };

  //Decremento il contatore e lo visualizzo a schermo
  i--;
  displaycounter.textContent = i ;

}));



//Funzione che permette di spostare lo sfondo del footer in base alla direzione passata come parametro
function animationFooter (direction) {

    //Imposta la quantità di movimento del personaggio.
    const movement = 30; 
 
    //Apprendo le coordinate del background del footer 
    let footer = document.querySelector('footer');
    let coordinateBackground = window.getComputedStyle(footer).getPropertyValue('background-position');
  
    //divido le coordinate e creo un array di posizioni per poterci lavorare
    let coordinateArray = coordinateBackground.split(" ");    
    let x = parseInt(coordinateArray[0]);
    let y = parseInt(coordinateArray[1]);    
 
    // Controllo della direzione: '+' l'asse x si muovera in maniera negativa, '-' al contrario
    if (direction == "+") {
        x -= movement;
    } else {
        x += movement;
    }

    // Imposta la nuova posizione dello sfondo
    footer.style.backgroundPosition = `${x}px ${y}px`;  

};
