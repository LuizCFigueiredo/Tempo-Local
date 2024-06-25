let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarnaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity+"%"
}

async function buscarCidade(cidade){
    const dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cidade +"&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then( reposta => reposta.json())
    
    if (dados.cod === '404') {
        alert("Cidade não encontrada. Por favor, verifique o nome e tente novamente.");
        return;
    };
    
    colocarnaTela(dados)
}

function cliqueinobotao(){
    const cidade=document.querySelector(".input-cidade").value

    if (cidade === "") {
        alert("Por favor, digite o nome de uma cidade.");
        return;
    };

    buscarCidade(cidade)
}