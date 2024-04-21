// const tbody = document.querySelector("tbody");
// const comingBasketData = JSON.parse(localStorage.getItem("basket"));

// let tr = "";

// comingBasketData.forEach((i, index) => {
//     tr += `
//         <tr>
//             <th scope="row">${index + 1}</th>
//             <td><img width="70" src="${i.image}" alt="product image" /></td>
//             <td>${i.title}</td>
//             <td>${i.price}$</td>
          
//         </tr>
//     `;
// });
// function clearBasket(){
//     localStorage.removeItem('basket');
//     location.reload();
//     localStorage.removeItem('basket');
//     localStorage.setItem('basketcount', 0);
//     document.querySelector('#basket-counter').innerHTML = 0;
//     alert('Clear your cart?')
// }
// tbody.innerHTML = tr;






const tbody = document.querySelector("tbody");
let comingBasketData = JSON.parse(localStorage.getItem("basket"));

let tr = "";

comingBasketData.forEach((i, index) => {
    tr += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td><img width="70" src="${i.image}" alt="product image" /></td>
            <td>${i.title}</td>
            <td>${i.price}$</td>
            <td><button class="silDugmesi" onclick="removeItem(${index})"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    `;
});

function removeItem(index) {
    comingBasketData.splice(index, 1); 
    localStorage.setItem("basket", JSON.stringify(comingBasketData)); 
    renderBasket(); 
    alert('Remove the product from the cart?')
}

function renderBasket() {
    tr = ""; 
    comingBasketData.forEach((i, index) => {
        tr += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td><img width="70" src="${i.image}" alt="product image" /></td>
                <td>${i.title}</td>
                <td>${i.price}$</td>
                <td><button class="silDugmesi" onclick="removeItem(${index})"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
        `;
    });
    tbody.innerHTML = tr; 
}

renderBasket();

