// Sorteador
function draw()  {
    let amount = parseInt(document.getElementById('quantidade').value);
    let min = parseInt(document.getElementById('de').value);
    let max = parseInt(document.getElementById('ate').value);   

    let draws = [];
    let number;

    for (let i = 0; i < amount; i++) {
        number = createRandomNumber(min, max);

        while (draws.includes(number))  {
            number = createRandomNumber(min, max);
        }

        draws.push(number);
    }
    
    let drawsOnPage = document.getElementById('resultado');
    drawsOnPage.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${draws}</label>`;
    changeStatusBtn()
}

function createRandomNumber(min, max)   {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeStatusBtn() {
    let restartBtn = document.getElementById('btn-reiniciar');
    
    if (restartBtn.classList.contains('container__botao-desabilitado')) {
        restartBtn.classList.remove('container__botao-desabilitado');
        restartBtn.classList.add('container__botao');
    } else {
        restartBtn.classList.remove('container__botao');
        restartBtn.classList.add('container__botao-desabilitado');
    }
}

function restart()  {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';   
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'; 
    changeStatusBtn()  
}