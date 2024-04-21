// const tbody = document.querySelector("tbody");
// let comingWishlistData = JSON.parse(localStorage.getItem("wishlist"));

//     let tr = "";

//     comingWishlistData.forEach((i, index) => {
//         tr += `
//             <tr>
//                 <th scope="row">${index + 1}</th>
//                 <td><img width="70" src="${i.image}" alt="product image" /></td>
//                 <td>${i.title}</td>
//                 <td>${i.price}$</td>
//             </tr>
//         `;
//     });

// function clearWishlist(){
//     localStorage.removeItem('wishlist');
//     location.reload();
//     alert('Clean the product?');
// }
// tbody.innerHTML = tr;




const tbody = document.querySelector("tbody");
let comingWishlistData = JSON.parse(localStorage.getItem("wishlist"));

let tr = "";

comingWishlistData.forEach((i, index) => {
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
    comingWishlistData.splice(index, 1); 
    localStorage.setItem("wishlist", JSON.stringify(comingWishlistData)); 
    renderWislist(); 
    alert('Remove the product from the wishlist?')
}

function renderWislist() {
    tr = ""; 
    comingWishlistData.forEach((i, index) => {
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

renderWislist();







