$(document).ready(function(){

    let clothesDetails = JSON.parse(localStorage.getItem('name'));
   /* const result = clothesDetails.find( ({ name }) => name === selectedName );*/
   console.log(clothesDetails);
   $('.card-title').text(clothesDetails.name);
   $('.card-text').text(clothesDetails.description);
   $('#card-img-top').attr('src',clothesDetails.img1);
   $('#card-img-top2').attr('src',clothesDetails.img2);
   $('#card-img-top3').attr('src',clothesDetails.img3);

});
$('#goToFaveorit').click(function(){
    window.location.href='../favorit.html';
})


