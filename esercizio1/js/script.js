


// Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var biciclette = [

    {
        nome: 'mountain-bike',
        peso: 45
    },

    {
        nome: 'bmx',
        peso: 32
    },

    {
        nome: 'bmx',
        peso: 1
    }
];


// trovare peso minore in OGGETTI se sono uguali ti stampa la prima che trova

var pesoMinore = biciclette[0];

for(var i = 1; i < biciclette.length; i++) {
    if(biciclette[i].peso < pesoMinore.peso){
        pesoMinore = biciclette[i];
    }
}

console.log(pesoMinore);