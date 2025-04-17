
//VARIABILI E SELETTORI
//Dichiarazione variabili, tramite i selettori
const displaycounter_container = document.querySelector("#displaycounter-container");
const bodycounter_container = document.querySelector("#bodycounter-container");
const footer = document.querySelector("footer");

//Variabile attraverso il quale tengo il conteggio del contatore
let i = 0;



//CREAZIONE E MODIFICA ELEMENTI HTML
//Creo e modifico elementi html attraverso la manipolazione del DOM
//Display delContatore
const displaycounter = createAndModifyElement("p","display-1 fw-bold",null,"Contatore");
displaycounter.textContent = 0;
//Corpo del contatore
//bottone decremento
const decrementbutton = createAndModifyElement("button","btn btn-lg px-2",null,"Decrement button");
const decrementbutton_image = createAndModifyElement("img","img-btn-counter","./assets/img/btn_decrement_counter.gif","Decrement button",100,100, "decrement");
//bottone incremento
const incrementbutton = createAndModifyElement("button","btn btn-lg px-2",null,"Increment button");
const incrementbutton_image = createAndModifyElement("img","img-btn-counter","./assets/img/btn_increment_counter.gif","Increment button",100,100, "increment");
//Personaggio
const personagesnail = createAndModifyElement("img","img-footer pb-5" ,"./assets/img/snail.gif","Personaggio immagine footer");


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


//Definisco le direzione del personaggio caricando due immagini a specchio per il DOM
personagesnail.src = "./assets/img/snail_rotate.gif";
const pathreverse = personagesnail.src;

//Riporto il personaggio alla posizione iniziale
personagesnail.src = "./assets/img/snail.gif";
const path1 = personagesnail.src; 


 
//INIZIO FUNZIONI

//Funzione che mi permette di creare e modificare gli elementi della pagina
function createAndModifyElement(tag,classes,src,alt,width,height,data_action) {
  
  const element = document.createElement(tag); //creo l'elemento html
  
  const classArray = classes.split(" ");
  element.classList.add(...classArray); //uso lo spread operator per dividere e aggiungere le classi nel modo corretto
  if(src)
    element.src = src;
  if(alt)
    element.alt = alt;

  //Controllo se sono stati passati i parametri width e height così facendo non sono costretto a passarli sempre
  if (width) {
    element.width = width;
  }
  if (height) {
    element.height = height; 
  }
  

  if (data_action) {
    element.setAttribute("data-action", data_action); //aggiungo l'attributo data-action se passato come parametro
  }

  return element; //restituisco l'elemento creato
}


//Uso un event delegation per gestire il click su entrambi i bottoni di incremento e decremento
bodycounter_container.addEventListener("click", (e) => {


  //Controllo se l'elemento cliccato è il bottone di decremento o incremento
  if (e.target.dataset.action === "increment") {

    playsound(); //Riproduco l'audio al click  

    //Richiamo la funzione animationFooter() che serve a spostare lo sfondo dietro al personaggio
    animationFooter("+"); 

    //Questo controllo mi permette di creare un'interazione dinamica sul personaggio.
    if (personagesnail.src == path1){
      personagesnail.src = "./assets/img/snail_alt.gif";
    }else {
      personagesnail.src = path1;
    };

    //Incremento il contatore e lo visualizzo a schermo
    i++;
    displaycounter.textContent = i ;

    
  }else if (e.target.dataset.action === "decrement") {

    
    playsound(); 
    animationFooter("-"); 
  
    if (personagesnail.src == pathreverse){
      personagesnail.src = "./assets/img/snail_rotate_alt.gif";
    }else {
      personagesnail.src = pathreverse;
    };

    
    i--;
    displaycounter.textContent = i ;
  
    }

});



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

//Funzione che riproduce l'audio del bottone
function playsound() {
  const audio = new Audio("./assets/audio/button-click.mp3");
  audio.volume = 0.1; // volume da 0 a 1  
  audio.play(); //Riproduco l'audio al click
}