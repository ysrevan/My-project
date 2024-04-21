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
            </tr>
        `;
    });

function clearWishlist(){
    localStorage.removeItem('wishlist');
    location.reload();
    alert('Clean the product?');
}
tbody.innerHTML = tr;
