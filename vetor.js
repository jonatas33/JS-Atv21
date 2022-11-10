
let valores = [8,1,2,7,6,3,9]

console.log(valores)
/*
for (let pos=0; pos<valores.length; pos++){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}
*/
/* O jeito mais simples de ser utilizado :
Primeiro coloca-se o indice dentro do for, e ao lado do in , basta colocar a variavel composta. 
        for (____in_____){
          console.log(____)  
        }
        ex:

        for(let pos in num){
            console.log(num[pos])
        }
        Para cada posicao na variavel composta, eu vou mostrar o num [pos]*/ 

        

    for(let pos in valores){
        console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
        }