// Executando uma Função após a tela ser carregada.
// stage = Palco
// context = Contexto
window.onload = function (){

    var stage = document.getElementById('stage');  // Selecionando o elemento do HTML que tiver o id = 'stage'. 
    var context = stage.getContext("2d");          // Guardando em uma variável o resultado do elemento 'stage' pegando seu contexto em 2d. 

    document.addEventListener('keydown', keyPush)


    setInterval(game, 80); // O setInterval() chama uma função em intervalos especificados (em milissegundos) até clearInterval() ser chamado ou a janela ser fechada.


    const velocity = 1;    // Definindo a velocidade que neste caso é o número de 'casas' que o 'snake' irá se movimentar.

    let velocityX = velocityY = 0;     // Definindo a velocidade 'vx = Vertical' no ínicio = 0 .

    let positionX = 10;    // Definfindo o posicionamento 'px = Ponto de Partida' que será inicializado.
    let positionY = 15;    // Definfindo o posicionamento 'py = Pontp de Termino' que será inicializado.

    let blocks = 30;       // Definindo o tamanho em altura e largura das casas em que o 'snake' irá se movimentar por vez.
    let valueBlocks = 20;  // Qauntidade de casas que deverpa ter em toda a minha 'caixa preta'.

    let appleX = appleY = 15;       // Definindo o posicionamento da 'appleX' Horizontalmente.

    let trail = [];        // Definido o restro da 'snake'.
    tail = 5;          // Definindo o tamanho da calda.
    
    function game() {      // Definindo a função que será executada a cada 60 milissegundos ou 6 segundos.

        positionX += velocityX;  // Definindo que a posição X é exatamente igual ou recebe velocityX, ou seja, a 'snake' ficará parada até iniciarmos o jogo.
        positionY += velocityY;  // Definindo que a posição Y é exatamente igual ou recebe velocityY, ou seja, a 'snake' ficará parada até iniciarmos o jogo.

        if (positionX < 0) {                // Indica que a 'snake' chegou na borda do meu 'context' pela left. ou seja, ele presisa começar do ponto 1.
            positionX = valueBlocks - 1;    // Inicializando do ponto zero caso a condição a cima seja 'true'.
        };

        if (positionX > valueBlocks - 1) {  // Também indica que a 'snake' chegou na borda do meu 'context' pela right. ou seja, ele presisa começar do ponto 1.
            positionX = 0                   // Inicializando do ponto zero caso a condição a cima seja 'true'.
        }

        if (positionY < 0) {                // Também indica que a 'snake' chegou na borda do meu 'context' em top. ou seja, ele presisa começar do ponto 1.
            positionY = valueBlocks - 1;    // Inicializando do ponto zero caso a condição a cima seja 'true'.
        }

        if (positionY > valueBlocks - 1) {  // Também indica que a 'snake' chegou na borda do meu 'context' em bottom. ou seja, ele presisa começar do ponto 1.
            positionY = 0                   // Inicializando do ponto zero caso a condição a cima seja 'true'. 
        }




        context.fillStyle = 'black';                        // Definindo a cor de estilo de preenchimento do 'context'.
        context.fillRect(0, 0, stage.width, stage.height); // O método fillRect() desenha um retângulo "preenchido". Os valores pré-estabelecidos são para começar no ponto 0 e terminar o ponto 0 pintando a altura e largura.

        context.fillStyle = 'red';                      // Definindo a cor de estilo de preenchimento da 'maçã'.
        context.fillRect(appleX * blocks, appleY * blocks, blocks, blocks); // O método fillRect() desenha um retângulo "preenchido". Os valores pré-estabelecidos são para começar no ponto 0 e terminar o ponto 0 pintando a altura e largura.

        context.fillStyle = 'gray';
        for (let i = 0; i < trail.length; i++){ // Acessando o indice de rastro para realizar validações...
            context.fillRect(trail[i].x * blocks, trail[i].y * blocks, blocks - 1, blocks - 1); // O método fillRect() desenha um retângulo "preenchido". Os valores pré-estabelecidos são para começar no ponto 0 e terminar o ponto 0 pintando a altura e largura.

            if (tail[i].x == positionX && tail[i].y == positionY) { // Validação para verificar se a 'snake' bateu nela mesma.
                velocityX = 0;
                velocityY = 0;

                tail = 5;
            };

        };

        trail.push( { x: positionX, y: positionY} ); // Adicionando no array a posição dos elementos caso eles não estejam na mesma 'posição', não bateu.

        while(trail.length > tail) {  // Estrutura para verificar se a largura do meu rastro é maior que o tamanho da calda.
            trail.shift();             // Excluindo o primeiro elemento do array caso a condiçaõ a cima seja true.
        }

        if (appleX == positionX && appleY == positionY) {  // Validação que verifica se a posição da 'Cabeça' é a mesma posição da 'Maçã'.
            tail++;                                        // Caso a condição a cima seja true a 'tail' fica maior.

            appleX = Math.floor(Math.random() * valueBlocks);
            appleY = Math.floor(Math.random() * valueBlocks);
        };
    };

    function keyPush(event) {
        switch (event.keyCode) {
            case 37:
                velocityX = -velocity
                velocityY = 0
                break;
            case 38:
                velocityX = 0
                velocityY = -velocity
                break;
            case 39:
                velocityX = velocity
                velocityY = 0
                break;
            case 40:
                velocityX = 0
                velocityY = velocity
                break; 
            default:
                break;
        };
    };
};