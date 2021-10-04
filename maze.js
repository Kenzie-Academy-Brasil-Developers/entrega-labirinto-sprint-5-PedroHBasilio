const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWW W WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const img = '<img id=\'window\' src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/4643a98bcb00972.png"></img>'

const canva = document.getElementById('canva__maze')
const player = document.createElement('div')
const message = document.getElementById("msg")

player.setAttribute('id', 'player')

const track = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u']

const maze = (array) => {

    for(let i = 0; i < array.length; i ++){
        const line = document.createElement('section')
        line.classList.add('maze__line')
        canva.appendChild(line)


        for(let j = 0; j < array[i].length; j ++){
            const cell = document.createElement('div')
            if(array[i][j] == 'W'){
                cell.setAttribute('id', `${track[i]}${track[j]}`)
                cell.classList.add('cell')
                cell.classList.add('wall')
            }
            else if(array[i][j] == 'S'){     
                cell.appendChild(player)         
                cell.setAttribute('id', `${track[i]}${track[j]}`)
                cell.classList.add('cell')
                cell.classList.add('way')
            }
            else if(array[i][j] == 'F'){    
                cell.classList.add('cell')
                cell.classList.add('way')
                cell.classList.add('final')
            }
            else{
                cell.setAttribute('id', `${track[i]}${track[j]}`)
                cell.classList.add('cell')
                cell.classList.add('way')
            }
            
            line.appendChild(cell)
        }
    }
}

maze(map)
player.innerHTML = img
const caminho = document.getElementsByClassName('cell')

//console.log(caminho)


const mapaTela = () => {
    let arrayCelulas = [
        [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
    ]

        for (let i = 0; i < caminho.length; i ++){
            if(i < 21){
                arrayCelulas[0].push(caminho[i])
            }
            else if(i < 42){
                arrayCelulas[1].push(caminho[i])
            }
            else if(i < 63){
                arrayCelulas[2].push(caminho[i])
            }
            else if(i < 84){
                arrayCelulas[3].push(caminho[i])
            }
            else if(i < 105){
                arrayCelulas[4].push(caminho[i])
            }
            else if(i < 126){
                arrayCelulas[5].push(caminho[i])
            }
            else if(i < 147){
                arrayCelulas[6].push(caminho[i])
            }
            else if(i < 168){
                arrayCelulas[7].push(caminho[i])
            }
            else if(i < 189){
                arrayCelulas[8].push(caminho[i])
            }
            else if(i < 210){
                arrayCelulas[9].push(caminho[i])
            }
            else if(i < 231){
                arrayCelulas[10].push(caminho[i])
            }
            else if(i < 252){
                arrayCelulas[11].push(caminho[i])
            }
            else if(i < 273){
                arrayCelulas[12].push(caminho[i])
            }
            else if(i < 294){
                arrayCelulas[13].push(caminho[i])
            }
            else if(i <= 314){
                arrayCelulas[14].push(caminho[i])
            }
        }
    return arrayCelulas
}
console.log(mapaTela())


const imagem = document.getElementById("window");
console.log(imagem)

const move = () => {
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;

        let celulaAtual
        let secaoAtual = 0
        let linhaAtual = 0
        
        for(let i = 0; i < mapaTela().length; i ++){
            for(let j = 0; j < mapaTela()[i].length; j++){
                if(mapaTela()[i][j].id == player.parentElement.id){
                    celulaAtual = mapaTela()[i][j]
                    secaoAtual = i
                    linhaAtual = j
                }
            }
        }
        
        if (keyName === "ArrowDown"){
            secaoAtual ++
            if(mapaTela()[secaoAtual][linhaAtual].classList.contains("way")){
                celulaAtual = mapaTela()[secaoAtual][linhaAtual]
                celulaAtual.appendChild(player)
                imagem.style.bottom = '84px'
            }
        }
        if(keyName === "ArrowUp"){
            secaoAtual --
            if(mapaTela()[secaoAtual][linhaAtual].classList.contains("way")){
                celulaAtual = mapaTela()[secaoAtual][linhaAtual]
                celulaAtual.appendChild(player)
                imagem.style.bottom = '56px'
            }
        }
        if (keyName === "ArrowRight"){
            linhaAtual ++
            if(mapaTela()[secaoAtual][linhaAtual].classList.contains("way")){
                celulaAtual = mapaTela()[secaoAtual][linhaAtual]
                celulaAtual.appendChild(player)
                imagem.style.bottom = '28px'
            }
        }
        if(keyName === "ArrowLeft"){
            linhaAtual --
            if(mapaTela()[secaoAtual][linhaAtual].classList.contains("way")){
                celulaAtual = mapaTela()[secaoAtual][linhaAtual]
                celulaAtual.appendChild(player)
                imagem.style.bottom = '0px'
            }
        }  
        if(celulaAtual.classList.contains("final")){
            victory()
        }
    });
}
move()



const victory = () => {
    let msg = "Você ganhou"
    message.innerHTML = msg


}



