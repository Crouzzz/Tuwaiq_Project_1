function FavItem(image, cardTitel,description) {
    this.img = image;
    this.titel=cardTitel;
    this.descrip=description;
}

function addNewItemToFavorities(newItem) {
    let selectedItems = JSON.parse(window.localStorage.getItem('FavoriteItems'));
    console.log(selectedItems);
    if (selectedItems == null) {
        let a = [];
        a.push(newItem);
        console.log(newItem);
        window.localStorage.setItem('FavoriteItems', JSON.stringify(a));
    } else {
        selectedItems.push(newItem);
        window.localStorage.setItem('FavoriteItems', JSON.stringify(selectedItems));
    }
}

$(document).ready(function () {
    let favoriteItems = JSON.parse(window.localStorage.getItem('FavoriteItems'));
    console.log('favorite items: '+ favoriteItems);
    if (favoriteItems != null) {
        for (let i = 0; i < favoriteItems.length; i++) {
            $( "#topRow").append(`<div class="col-md-4 col-6">
            <div class="card" style="width: 18rem;">
                <img src="${favoriteItems[i].img}" id="firstItem" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title" id="firstTitel">${favoriteItems[i].title}</h5>
                    <p class="card-text" id="firstPara"><b>${favoriteItems[i].descrip}</b></p>
                    <a id="firstOne" href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>`
        )}
    }
    $('#fav1').click(function () {
        let img = $('#firstItem').attr('src');
        let titel=$('#firstTitel').text();
        let descrip=$('#firstPara').text();
        let newItem = new FavItem(img,titel,descrip);
        addNewItemToFavorities(newItem);
    })
    $('#fav2').click(function () {
        let img = $('#card2').attr('src');
        let titel=$('#2title').text();
        let descrip=$('#2para').text();
        let newItem = new FavItem(img,titel,descrip);
        addNewItemToFavorities(newItem);
    })
    $('#fav3').click(function () {
        let img = $('#card3').attr('src');
        let titel=$('#3title').text();
        let descrip=$('#3para').text();
        let newItem = new FavItem(img,titel,descrip);
        addNewItemToFavorities(newItem);
    })
    $('#fav4').click(function () {
        let img = $('#card4').attr('src');
        let titel=$('#4title').text();
        let descrip=$('#4para').text();
        let newItem = new FavItem(img,titel,descrip);
        addNewItemToFavorities(newItem);
    })
    $('#fav5').click(function () {
        let img = $('#card5').attr('src');
        let titel=$('#5title').text();
        let descrip=$('#5para').text();
        let newItem = new FavItem(img,titel,descrip);
        addNewItemToFavorities(newItem);
    })

    $('#fav6').click(function () {
        let img = $('#card6').attr('src');
        let titel=$('#6title').text();
        let descrip=$('#6para').text();
        let newItem = new FavItem(img,titel,descrip);
        addNewItemToFavorities(newItem);
    })
    $('#fav7').click(function () {
        let img = $('#card7').attr('src');
        let titel=$('#7title').text();
        let descrip=$('#7para').text();
        let newItem = new FavItem(img,titel,descrip);
        addNewItemToFavorities(newItem);
    })
    $('#fav8').click(function () {
        let img = $('#card8').attr('src');
        let titel=$('#8title').text();
        let descrip=$('#8para').text();
        let newItem = new FavItem(img,titel,descrip);
        addNewItemToFavorities(newItem);
    })
    $('#fav9').click(function () {
        let img = $('#card9').attr('src');
        let titel=$('#9title').text();
        let descrip=$('#9para').text();
        let newItem = new FavItem(img,titel,descrip);
        addNewItemToFavorities(newItem);
    })
})