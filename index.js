let nomeHeroi = ["Link", "Mario", "Donkey Kong", "Diddy Kong", "Samus", "Batman", "Sonic", "Cloud","Lich King"];
let xpValor = [521, 1852, 4369, 6669, 7800, 8561, 9999, 15014, 5600];
let nivel = ""

for(let contador = 0; contador < nomeHeroi.length; contador++){
        if (xpValor[contador] < 1000){
                nivel = "Ferro" 
        } else if (xpValor[contador] >= 1001 && xpValor[contador] <= 2000 ){
                nivel = "Bronze"
        }else if (xpValor[contador] >= 2001 && xpValor[contador] <= 5000){
                nivel = "Prata"
        }else if (xpValor[contador] >= 6001 && xpValor[contador] <= 7000){                
                nivel = "Ouro"
        }else if(xpValor[contador] >= 7001 && xpValor[contador] <= 8000){
                nivel = "Platina"
        } else if(xpValor[contador] >= 8001 && xpValor[contador] <= 9000){
                nivel = "Ascendente"
        }else if (xpValor[contador] >= 9001 && xpValor[contador] <= 10000){
                nivel = "Imortal"
        }else if (xpValor[contador] >=10001){
                nivel = "Radiante"
        }else {nivel = "*Seu herói não tem nível*"}
        
        console.log(`O Herói de nome ${nomeHeroi[contador]} está no nível de ${nivel}`)
}