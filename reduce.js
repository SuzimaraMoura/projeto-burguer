// const itens=[
//     {description:"pen", quantity:2 , price:3},
//     {description:"pencil", quantity:4 , price:5.5},
//     {description:"rubber", quantity:3 , price:2.5}
// ]

// const total= itens.reduce((soma,item)=>soma + item.quantity*item.price,0)
 

    

//  console.log(total)

const names=["Maria","Niciomara","Marta","Suzi","Nadia","Sergio","Cauane","Sara"]

const namesCount = names.reduce((count,nameAtual)=>{
    const firstletter = nameAtual[0].toLocaleUpperCase()
    if (count[firstletter]) {
        count[firstletter]++
    }else{
        count[firstletter]=1
    }
    return count
},{})
console.log(namesCount)