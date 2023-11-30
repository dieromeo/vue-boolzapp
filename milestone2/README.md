# Milestone 2

Creo una key currentIndex inizializzata a 0 (primo contatto). Tramite una funzione che si scatenerà al click sul contatto, assegno a currentIndex il valore dell'indice corrispondente al contatto selezionato. Creo inoltre un altra funzione che aggiunge anche una classe active alla selezione, per mettere in evidenza il contatto.

Nell'header di destra ciclo tutti i contatti e, se il loro indice corrisponde al currentIndex (contatto selezionato), gli aggiungo una classe active che li mostra a schermo, altrimenti avranno display none.

All'interno del main mostro con un v-for tutti i messaggi del contatto selezionato e, a seconda del loro status, gli andrò ad attribuire una classe che identificherà se sono stati ricevuti o inviati