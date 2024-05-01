console.log("Digite o nome do seu herói");

let nickname = "Felipe";

console.log("Agora vamos descobrir o nível do seu herói!");

// Array de experiências para verificar
let experiencias = [500, 1500, 2500, 3500, 4500, 5500, 6500, 7500];

for (let i = 0; i < experiencias.length; i++) {
    let XP = experiencias[i];
    if (XP < 1001) {
        console.log("O Herói de nome " + nickname + " está no nível de Ferro");
    } else if (XP < 2001) {
        console.log("O Herói de nome " + nickname + " está no nível de Bronze");
    } else if (XP < 3001) {
        console.log("O Herói de nome " + nickname + " está no nível de Prata");
    } else if (XP < 4001) {
        console.log("O Herói de nome " + nickname + " está no nível de Ouro");
    } else if (XP < 5001) {
        console.log("O Herói de nome " + nickname + " está no nível de Platina");
    } else if (XP < 6001) {
        console.log("O Herói de nome " + nickname + " está no nível de Ascendente");
    } else if (XP < 7001) {
        console.log("O Herói de nome " + nickname + " está no nível de Imortal");
    } else {
        console.log("O Herói de nome " + nickname + " está no nível de Radiante");
    }
}

console.log("Obrigado por checar o nível do seu herói!");
