// элементы формы
const squareInput=document.getElementById("square-input");
const squareRange=document.getElementById("square-range");

// радиокнопки
const typeReconstractionElements=document.querySelectorAll("input[name='type']");
const typeBuildingElements=document.querySelectorAll("input[name='building']");
const roomsElements=document.querySelectorAll("input[name='rooms']");
                    // console.log(typeReconstractionElements);
                    // console.log(typeBuildingElements);
                    // console.log(roomsElements);

// чекбоксы
const ceilings=document.querySelector("input[name='ceiling']");
const walls=document.querySelector("input[name='walls']");
const floor=document.querySelector("input[name='floor']");
                    // console.log(ceilings);
                    // console.log(walls);
                    // console.log(floor);

// базовая цена и элемент для вывода стоимости
const basePricePerMeter=6000;
const tottalPriceElement=document.getElementById('total-price');

const inputs=document.querySelectorAll("input")

// связка  range с текстовыи полем
squareRange.addEventListener("input", function(){
    squareInput.value=squareRange.value;
})
// связка  текстового поля с range
squareInput.addEventListener("input", function(){
    squareRange.value=squareInput.value;
})

// обходим все инпуты, и если какой-то был измененб запускаем пересчет стоимости
inputs.forEach(function(item){
    item.addEventListener("input",calculate);
});
calculate();
// функция для пересчета стоимости
function calculate(){

    // площадь кватриры
    const square=parseInt(squareInput.value);
    console.log(square);

    // тип ремонта
    let typeReconstructionCost;
    typeReconstractionElements.forEach(function(item){
        if(item.checked){
            typeReconstructionCost=parseFloat(item.value);

        }
    });
                            // console.log(typeReconstructionCost);

    // тип дома
    let typeBuildingCost;
    typeBuildingElements.forEach(function(item){
        if(item.checked){
            typeBuildingCost=parseFloat(item.value);

        }
    });
                          // console.log(typeBuildingCost);

    // количество комнат
    let roomsCost;
    roomsElements.forEach(function(item){
        if(item.checked){
            roomsCost=parseFloat(item.value);

        }
    });
                          // console.log(roomsCost);

    // дополнительные опции
    const ceilingCost=ceilings.checked? parseFloat(ceilings.value):1;
    const wallsCost=walls.checked? parseFloat(walls.value):1;
    const floorCost=floor.checked? parseFloat(floor.value):1;
                        // console.log( ceilingCost);
                        // console.log( wallsCost);
                        // console.log( floorCost);
    
    // подсчитать общую стоимость
    const totalPrice=basePricePerMeter*square*typeReconstructionCost*typeBuildingCost*roomsCost*ceilingCost*wallsCost;
                        // console.log( totalPrice);
    const formatter=new Intl.NumberFormat("ru");
                         // console.log(formatter.format(totalPrice));

    tottalPriceElement.innerText=formatter.format(totalPrice);
}

