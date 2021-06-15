


// Crea un array di 10 oggetti che rappresentano una zucchina. 
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
// Infine stampa separatamente quanto pesano i due gruppi di zucchine


// CREARE UN ARRAY DI 10 OGGETTI CHE RAPPRESENTANO UNA ZUCCHINA

var zucchine = [
   
    {
        tipo: 1,
        peso: 0.2,
        lunghezza: 10
    },

    {
        tipo: 1,
        peso: 0.2,
        lunghezza: 12
    },

    {
        tipo: 1,
        peso: 0.2,
        lunghezza: 23
    },

    {
        tipo: 1,
        peso: 0.2,
        lunghezza: 14
    },

    {
        tipo: 1,
        peso: 0.2,
        lunghezza: 17
    },

    {
        tipo: 1,
        peso: 0.2,
        lunghezza: 19
    },

    {
        tipo: 1,
        peso: 0.2,
        lunghezza: 5
    },

    {
        tipo: 1,
        peso: 0.2,
        lunghezza: 13
    },

]




// DIVIDERE IN DUE ARRAY LE ZUCCHINE CHE MISURANO MENO O PIU DI 15

var zucchine1 = [];
var zucchine2 = [];


for ( var i = 0; i < zucchine.length; i++) {

        if (zucchine[i].lunghezza < 15) {

            zucchine1.push(zucchine[i]);
        } else {
            zucchine2.push(zucchine[i]);
        }
}



// SE SCRIVO console.log('Gruppo zucchine1 ' + zucchine1); mi restituisce: Gruppo zucchine1 [object Object],[object Object],[object Object],[object Object],[object Object]

console.log(zucchine1);
console.log(zucchine2);




// STAMPARE SEPARATAMENTE QUANDO PESANO IL PRIMO GRUPPO DI ZUCCHINE

var pesoTot1 = 0;

for( var i = 0; i < zucchine1.length; i++) {
    
    pesoTot1 = pesoTot1 + zucchine1[i].lunghezza;
  
}

console.log('Peso totale primo gruppo di zucchine: ' + pesoTot1);



// STAMPARE SEPARATAMENTE QUANDO PESANO IL SECONDO GRUPPO DI ZUCCHINE

var pesoTot2 = 0;

for( var i = 0; i < zucchine2.length; i++) {
    
    pesoTot2 = pesoTot2 + zucchine2[i].lunghezza;
  
}

console.log('Peso totale secondo gruppo di zucchine: ' + pesoTot2);



// FUNZIONE (object non mi funziona ???????????)

function sommaObject(arr, object, pesoTot) {
    var pesoTot = 0;

    for( var i = 0; i < arr.length; i++) {
        
        pesoTot = pesoTot + arr[i].object;
    
    }
    return pesoTot
}
