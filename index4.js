function getloc(){
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position){
    console.log(position);
    let x = document.getElementById("loc");
    x.innerHTML = `Latitude:${position.coords.latitude} Longitude:${position.coords.longitude}`;
}

getloc();


// KEY-VALUE ARRAYS
let user = {
    cartlist: [
        {
            id: 1,
            img: 'https://i0.wp.com/www.the-pixels.com/wp-content/uploads/2016/12/kiki-pos_1440449334.png?resize=500%2C750&ssl=1',
            product: "Kiki's Delivery Service", 
            price: 2100.47
        
            
        }, 
        {   
            id: 2,
            img:'https://flxt.tmsimg.com/assets/p160146_v_v8_ac.jpg',
            product: "My Neighbor Totoro",
            price: 2300.53
        },
        {
            id: 3,
            img: 'https://m.media-amazon.com/images/M/MV5BZDY3ZGI0ZDAtMThlNy00MzAxLTg4YjAtNjkwYTkxNmQ4MjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            product: "The Secret World of Arriety",
            price: 2600.96
        },
        {
            id: 4,
            img: 'https://www.kenworthy.org/wp-content/uploads/Howls_Moving_Castle_2700x4000-scaled.jpg',
            product: "Howl's Moving Castle",
            price: 2200.34
        },
        {
            id: 5,
            img: 'https://m.media-amazon.com/images/S/pv-target-images/8b95d2f4fe7f5302ec110c07bd60f50f01b2cb62f2ab7cbeefe63fd3aec2e74a.jpg',
            product: "Ponyo",
            price: 2200.21
        },
        {
            id: 6,
            img: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
            product: "Spirited Away",
            price: 2700.58
        },
        {
            id: 7,
            img: 'https://m.media-amazon.com/images/M/MV5BNDFhZmY2NTgtMzljYy00MTlhLTgyMjItNTEwZWJkYThhYzkyXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg',
            product: "Castle In The Sky",
            price: 2300.64
        },
        {
            id: 8,
            img: 'https://flxt.tmsimg.com/assets/p158931_p_v8_aa.jpg',
            product: "Grave of the Fireflies",
            price: 2100.33
        },
        {
            id: 9,
            img: 'https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_.jpg',
            product: "The Wind Rises",
            price: 2300.55
        },
        {
            id: 10,
            img: 'https://play-lh.googleusercontent.com/NkUdfmDfUBHXhwowxqaG-ejsIcYOnWg-QdzhjqTEelikBqVYKIeuI05Q45mcJfiJDNV8s7NxnGDW3Ks9thcl',
            product: "Princess Mononoke",
            price: 2500.94
        },
        {
            id: 11,
            img: 'https://flxt.tmsimg.com/assets/p160148_p_v8_ab.jpg',
            product: "Whisper of the Heart",
            price: 2000.82
        },
        {   
            id: 12,
            img:'https://m.media-amazon.com/images/S/pv-target-images/6410d0a9aeb1ef18c7d54d6251ee275d37c07ad73727caf4ec2b0e219c23b797.jpg',
            product: "The Tale of The Princess Kaguya",
            price: 2200.65

        }],
  
    orderlist: [], 
    
    showproducts(){
        let cart = document.getElementById("cart"); 
        // cart.classList.add("content");
        let cartList = "";
        this.cartlist.forEach( 
  
        function(iteminthelist){
            
            cartList += 
          
            `<div class="card d-inline-block mx-2 my-2 p-2" style="width:12rem; text-align: center;">
                <img id="img${iteminthelist.img}" src="${iteminthelist.img}" class="rounded-2 card-img-bottom" height="200px" width="100px" >
                <div class="content card-body card-img-overlay" style="color: #FA8A6B;">
                    <p id="ids${iteminthelist.id}" hidden${iteminthelist.id}</p>
                    <h5 class="card-title" id="product${iteminthelist.id}">${iteminthelist.product}</h5>
                    <p class="card-text" id="price${iteminthelist.id}"> ${iteminthelist.price}</p>
                    <button class="btn btn1 mt-2" style="background-color: rgb(235, 235, 235);" role="button"  onclick="add(${iteminthelist.id});">Add to cart</a>
                </div>
            </div> `;
  
          
        
        })
        
        cart.innerHTML = cartList;
        
        
    }
  

  }
  
 
  
// DISPLAY ORDER
  function add(id){

    let array = JSON.parse(localStorage.getItem("new"));
    
    if (array == null){ // if empty, then empty it will set
    user.orderlist = [];
    
    // let id = document.getElementById("ids"+id).innerText;
    let order = document.getElementById("product"+id).innerHTML;
    let price = document.getElementById("price"+id).innerHTML;
        
    user.orderlist.push({id: id, product: order, price: price}); 
    showOrder(); 
    localStorage.setItem("new", JSON.stringify(user.orderlist));
    showOrder();
    }else{
    user.orderlist = JSON.parse(localStorage.getItem("new"));

    
    let order = document.getElementById("product"+id).innerHTML;
    let price = document.getElementById("price"+id).innerHTML;
    
    user.orderlist.push({id: id, product: order, price: price}); 
    localStorage.setItem("new", JSON.stringify(user.orderlist));
    showOrder();

    }
        
  }
  

function showOrder(){
    let order = document.getElementById("ordersum"); 
    let orderList = "";
    let totalCost = 0;
    let cartNum = document.getElementById("cartnum");
    let ords = JSON.parse(localStorage.getItem("new"));
    

    if (ords == null || ords == ""){ 
        order.innerHTML = "";
        cartNum.innerHTML = "";
        document.getElementById("total-input").innerText = `Total: ₱ ${totalCost}`;
        // document.getElementById("cartnum").innerHTML = `Items: ${user.orderlist.length}`;
        

    }else{
        
        ords.forEach( 
            function(iteminthelist){
                    orderList += 
            
                    `<div class="col-6">
                      <p class="left item-input"> ${iteminthelist.product}</p>
                    </div>
                    
                    <div class="col-6">
                      <p class="right price-input"> ₱ ${iteminthelist.price}</p>
                    </div>`;
                     
                    totalCost += Number(iteminthelist.price); 
                    
            
            });
                    order.innerHTML = orderList;
                    document.getElementById("total-input").innerText = `Total: ₱ ${totalCost}`;
                    // document.getElementById("cartnum").innerHTML = `Items: ${user.orderlist.length}`;
                    
                   
                    

    }
    
}


// DELETE ORDER
  function del(){
    let ords = JSON.parse(localStorage.getItem("new"));
    // user.showproducts();
    // user.orderlist.pop();
    // user.showOrder();
   
    ords.pop(); // we will remove the recent item in array
    localStorage.setItem("new", JSON.stringify(ords)); 
    // console.log(ords);
    showOrder();
    
  }

showOrder();
user.showproducts();


//  MODAL
var modal = document.getElementById("myModal");
var btn = document.getElementById("place-order");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
  var orderSummary = document.getElementById("orderSummary");
  var orderSummaryNew = orderSummary.innerHTML;
  var modalSummary = document.getElementById("modal-summary");
  modalSummary.innerHTML = orderSummaryNew;
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


