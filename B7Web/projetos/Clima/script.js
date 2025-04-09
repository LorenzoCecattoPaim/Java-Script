document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value

    if(input !== ''){
        clearInfo()
        aviso('Carregando...')

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=28c2efc92f60aba379a2df402a584c0e&units=metric&lang=pt-br`

        let resultados = await fetch(url)
        let json = await resultados.json()



        if(json.cod == 200){
            info({
                name:json.name,
                country :json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                ventoVelo: json.wind.speed,
                ventoAngle: json.wind.deg,
            })

        }else{
            clearInfo()
            aviso('Não encontramos esta localização')
        }
    }
})

function info(json){
    aviso('')

    document.querySelector('.resultado').style.display = 'block'

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`
    document.querySelector('.tempInfo').innerHTML = `${json.temp}<sup>ºC</sup>`
    document.querySelector('.ventoInfo').innerHTML = `${json.ventoVelo}<span>km/h</span>`

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)



    let ventoAngulo = document.querySelector('.ventoPonto')
    ventoAngulo.style.transform = `rotate(${json.ventoAngle}deg)`
}

function clearInfo(){
    aviso ('')
    document.querySelector('.resultado').style.display = 'none'
}


function aviso(msg){
    document.querySelector('.aviso').innerHTML = msg
}