let bagItemsObjects;
onLoad()
function onLoad (){

    loadBagItemObjects()
    bagsItemsDisplay()
    // console.log(bagItemsObjects)
}

function loadBagItemObjects() {
    bagItemsObjects = bagItems.map((itemId)=>{
        // console.log(itemId,"itemid")
        for(let i = 0; i < items.length;i++){
            if (itemId == items[i].id){
                return items[i]
            }
        }
    })
  }



function bagsItemsDisplay(){
    let bagsItemsElement = document.querySelector(".bag-items-container")
    let innerHTML = '';
    // console.log(bagItemsObjects,"fdgsdgs")
    bagItemsObjects.forEach(item => {
        innerHTML += generateItemHTML(item)
    });
    bagsItemsElement.innerHTML = innerHTML
}

function removeFromBag(item_id){
  console.log(bagItems)
  bagItems = bagItems.filter(item => item !== item_id);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  onLoad ()
  
}


function generateItemHTML(item) {
    return `<div class="bag-item-container">
      <div class="item-left-part">
        <img class="bag-item-img" src="../${item.image}">
      </div>
      <div class="item-right-part">
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
        </div>
        <div class="return-period">
          <span class="return-period-days">${item.return_period} days</span> return available
        </div>
        <div class="delivery-details">
          Delivery by
          <span class="delivery-details-days">${item.delivery_date}</span>
        </div>
      </div>
  
      <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
    </div>`;
  }