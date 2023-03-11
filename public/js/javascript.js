let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');
// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
// }

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  // searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');    
}

var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay:{
    delay: 7500,
    disabeOnInteraction: false,
  },
  centeredSides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
      
    },
  },
});



var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay:{
    delay: 7500,
    disabeOnInteraction: false,
  },
  centeredSides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
      
    },
  },
});


  document.querySelectorAll('.btn1').addEventListener('click', (e)=>{
    e.preventDefault();
    const product1 = document.getElementById('p1').innerHTML   
    console.log(product1); 
    alert(product1)
  })
  
  const btntoogle = document.getElementById('btn');

  if(5>1){
    btntoogle.addEventListener('click' , (e) => {
    e.preventDefault();
    // let readmore1 = document.querySelector('#readmore');
    let readmore = document.getElementById('readmore')
    // readmore.classList.toggle('active');
    // readmore.style.toggle="active"
    readmore.style.display = 'block'
  })
}
  
  

// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     shoppingCart.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }
// let shoppingCart = document.querySelector('.shopping-cart');

// document.querySelector('#cart-btn').onclick = () =>{
//     shoppingCart.classList.toggle('active');
//     searchForm.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }
// let loginForm = document.querySelector('.login-form');

// document.querySelector('#login-btn').onclick = () =>{
//     loginForm.classList.toggle('active');
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     navbar.classList.remove('active');
// }
    
// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     loginForm.classList.remove('active');
   
// }
// window.onscroll = () =>{
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
    
// }

// var swiper = new Swiper(".product-slider", {
//     loop:true,
//     spaceBetween: 20,
//     autoplay:{
//       delay: 7500,
//       disabeOnInteraction: false,
//     },
//     centeredSides: true,
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
       
//       },
//       768: {
//         slidesPerView: 2,
        
//       },
//       1020: {
//         slidesPerView: 3,
        
//       },
//     },
//   });

 
  
//   var swiper = new Swiper(".review-slider", {
//     loop:true,
//     spaceBetween: 20,
//     autoplay:{
//       delay: 7500,
//       disabeOnInteraction: false,
//     },
//     centeredSides: true,
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
       
//       },
//       768: {
//         slidesPerView: 2,
        
//       },
//       1020: {
//         slidesPerView: 3,
        
//       },
//     },
//   });
