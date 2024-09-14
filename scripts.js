const buttonShowAll = document.querySelector(".show-all")
const list = document.querySelector("ul")
const buttonMap = document.querySelector(".map-desc")
const buttonSumAll = document.querySelector(".sum-all")
const buttonFilterAll=document.querySelector(".filter-all")


let myLi = ''

function showAll(arraynew){
     myLi = ''
    arraynew.forEach(product => {
  
    myLi = myLi + `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p  class="item-price">${formatCurrent(product.price)}</p> 

        </li> 
    `
});

    list.innerHTML = myLi
    console.log(showAll)

}

function descMap(){
  
   const newPrice=menuOptions.map(desc=>({
    ...desc,
    price:desc.price * 0.9,
    

   }))
    
   console.log(newPrice)
   showAll(newPrice)
  
}
function sumAll() {
    const sumTotal=menuOptions.reduce((acc,curr)=>acc+curr.price,0)
    list.innerHTML =
    `
    <li>  
        <p  class="item-price">O valor total dos itens é de: ${formatCurrent(sumTotal)}</p> 

    </li> 
`

    console.log(sumTotal)
}
function formatCurrent(value){
    const newValue=value.toLocaleString('pt-br',{
        style: 'currency',
        currency: 'BRL'
    });

   return newValue
}

function filterAll(){
    const productVegan=menuOptions.filter(product=>product.vegan)
    showAll(productVegan)
}


buttonShowAll.addEventListener("click", () =>showAll(menuOptions))
buttonMap.addEventListener("click", descMap)
buttonSumAll.addEventListener("click",sumAll)
buttonFilterAll.addEventListener("click",filterAll)