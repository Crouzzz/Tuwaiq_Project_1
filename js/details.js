clothesDetails =[
    {name:"Style1",
     description: "mix between  blue and brouwn",
     img1: "../img/img01jeans1.jpg",
     img2:"../img/img01watsh01.jpg",
     img3:"../img/img01shoes01.jpg"
    
     
    }, 
    
    {
        name:"Style2",
        description: "the blacke king of the clores with whait shoes",
        img1: "../img/img02-cap.jpg",
        img2:"../img/img02-geans2.jpg",
        img3:"../img/img02shose2.jpg"
        
    
     

      } ,
     { 
        name:"Style3",
        description: "good shoes mix between black and selver jacket",
        img1: "../img/img03-jacket.jpg",
        img2:"../img/img03-jeans.jpg",
        img3:"../img/img03-shoes.jpeg"
         

    },
     { 
        name:"Style4",
        description: "whait shoes with green shirt you will be fantastic",
        img1: "../img/img04-jeans.png",
        img2:"../img/img04-shirt.jpg",
        img3:"../img/img04glasses.jpg"
     },
     {
        name:"Style5",
        description: "black jeans with dark blue of jacket",
        img1: "../img/img05-jacket.jpg",
        img2:"../img/img05-jeanse.jpg",
        img3:"../img/img05-shose.jpg"
     },
     {
        name:"Style6",
        description: "jeans whit whait shirt and blue shose",
        img1: "../img/img06-jeanse.jpg",
        img2:"../img/img06-shirt.png",
        img3:"../img/img06-shose.jpg"
     },
     {
        name:"Style7",
        description: "the green clore of the shirt will be good with black jeanse",
        img1: "../img/img07-jeans.jpg",
        img2:"../img/img07-shirt.jpg",
        img3:"../img/img07-shirt.jpg" 
     },
     {
        name:"Style8",
        description: "pink jacket with black jeanse and black shose",
        img1: "../img/img08-shirt.jpg",
        img2:"../img/img08-shose.jpg",
        img3:"../img/img08jeanse.jpg" 
     },
     {
        name:"Style9",
        description: "mix between red and black",
        img1: "../img/img09-jeans.jpg",
        img2:"../img/img09-shirt.jpg",
        img3:"../img/img09-shose.jpg" 
     }


     
]

$('#loginn').click(function(){
    window.location.href='loginPag.html';
    
    });

    $('#signUp').click(function(){
        window.location.href='sinup.html';
    })
    
    
    $('#firstOne').on('click',()=>{
        window.localStorage.setItem('name', JSON.stringify(clothesDetails[0]));
        window.location.href='details.html';
    });
    
    $('#secondeBtn').on('click',()=>{
        window.localStorage.setItem('name', JSON.stringify(clothesDetails[1]));
        window.location.href='details.html';
    });
    $('#thirdBtn').on('click',()=>{
        window.localStorage.setItem('name', JSON.stringify(clothesDetails[2]));
        window.location.href='details.html';
    });
    $('#4thBtn').on('click',()=>{
        window.localStorage.setItem('name', JSON.stringify(clothesDetails[3]));
        window.location.href='details.html';
    });
    $('#5thBtn').on('click',()=>{
        window.localStorage.setItem('name', JSON.stringify(clothesDetails[4]));
        window.location.href='details.html';
    });
    $('#6thBtn').on('click',()=>{
        window.localStorage.setItem('name', JSON.stringify(clothesDetails[5]));
        window.location.href='details.html';
    });
    $('#7thBtn').on('click',()=>{
        window.localStorage.setItem('name', JSON.stringify(clothesDetails[6]));
        window.location.href='details.html';
    });
    $('#8thBtn').on('click',()=>{
        window.localStorage.setItem('name', JSON.stringify(clothesDetails[7]));
        window.location.href='details.html';
    });
    $('#9thBtn').on('click',()=>{
        window.localStorage.setItem('name', JSON.stringify(clothesDetails[8]));
        window.location.href='details.html';
    });

/*

    $('#secondeBtn').click(function(){
        sessionStorage.setItem('name', 'name1');
        window.location.href='details.html';
    
    });
    $('#thirdBtn').click(function(){
        sessionStorage.setItem('name', 'name1');
        window.location.href='details.html';
    });
    $('#4thBtn').click(function(){
        sessionStorage.setItem('name', 'name1');
        window.location.href='details.html';
    });
    $('#5thBtn').click(function(){
        sessionStorage.setItem('name', 'name1');
        window.location.href='details.html';
    });
    $('#6thBtn').click(function(){
        sessionStorage.setItem('name', 'name1');
        window.location.href='details.html';
    });
    $('#7thBtn').click(function(){
        sessionStorage.setItem('name', 'name1');
        window.location.href='details.html';
    });
    $('#8thBtn').click(function(){
        sessionStorage.setItem('name', 'name1');
        window.location.href='details.html';
    });
    $('#9thBtn').click(function(){
        sessionStorage.setItem('name', 'name1');
        window.location.href='details.html';
    });
    
    
    
    */
    
    

