
//dichiarazione variabili, tramite i selettori

const decrementbutton = document.querySelector("#btndecrement");
const incrementbutton = document.querySelector("#btnincrement");
const personagesnail = document.querySelector("#personagesnail");
const displaycounter = document.querySelector("#displaycounter");


//Definisco le direzione del personaggio caricando due immagini a specchio*/
personagesnail.src = "./assets/img/snail_rotate.gif";
const pathreverse = personagesnail.src;

personagesnail.src = "./assets/img/snail.gif";
const path1 = personagesnail.src; 

//Variabile attraverso il quale tengo il conteggio del contatore
let i = 0;
 



//Inizio funzioni eventListener

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
    
 
    // Controllo della direzione: '+' l'asse x si muovera in maniera negativa, '-'
    if (direction === "+") {
        x -= movement;
    } else {
        x += movement;
    }

    // Imposta la nuova posizione dello sfondo
    footer.style.backgroundPosition = `${x}px ${y}px`;

};
