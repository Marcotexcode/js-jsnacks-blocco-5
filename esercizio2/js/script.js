


// Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

var zucchine = [
    {
        varieta: 1,
        peso: 12,
        lunghezza: 20
    },

    {
        varieta: 1,
        peso: 12,
        lunghezza: 20
    },

    {
        varieta: 1,
        peso: 12,
        lunghezza: 20
    },

    {
        varieta: 1,
        peso: 12,
        lunghezza: 20
    },

    {
        varieta: 1,
        peso: 12,
        lunghezza: 20
    },

    {
        varieta: 1,
        peso: 12,
        lunghezza: 20
    },

    {
        varieta: 1,
        peso: 12,
        lunghezza: 20
    },

    {
        varieta: 1,
        peso: 12,
        lunghezza: 20
    },

    {
        varieta: 1,
        peso: 12,
        lunghezza: 20
    },

    {
        varieta: 1,
        peso: 12,
        lunghezza: 20
    }
]



// sommare il peso totale di ogni zucchina ogetto

var pesoTot = 0;

for( var i = 0; i < zucchine.length; i++) {
    
    pesoTot = pesoTot + zucchine[i].peso;
  
}

console.log('Il peso totale e: ' + pesoTot);