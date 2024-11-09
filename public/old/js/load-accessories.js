
// ---------------- View Box --------------------------

// Получение всех кук в виде строки
const allCookies = document.cookie;

// Функция для получения значения куки по имени
function getCookie(name) {
    const value = "; " + allCookies;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

function checkCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split('=');
      if (cookie[0] === name) {
          return true; // Куки с указанным именем найдено
      }
  }
  return false; // Куки с указанным именем не найдено
}

const currentBoxId = getCookie("idboxes");
if(!currentBoxId) {
  location.href = 'index.html';
}

let arrayAccessories, arrayAccessoriesSize;
let arrayAccessoriesPrice = [];
if(checkCookie('addedAccessories')) {
  arrayAccessories = JSON.parse(getCookie('addedAccessories'));
  arrayAccessoriesSize = JSON.parse(getCookie('addedAccessoriesSizes'));
  arrayAccessoriesPrice = JSON.parse(getCookie('addedAccessoriesPrice'));
}

document.querySelector('.result__total-item span').textContent = '1';
document.querySelector('.choose-accessories__drawers-price-quantity span').textContent = '1';

const currentBoxData = boxes.find(box => box.id == currentBoxId);

const currentBoxViewName = document.querySelector('.box-selected__item');
const currentBoxViewPrice = document.querySelector('.box-selected__price span');
const totalSummInDrawersTabsElement = document.querySelector('.choose-accessories__drawers-price-summ span');
const totalSummInDropdownElement = document.querySelector('.result-dropdown__total span');

totalSummInDrawersTabsElement.textContent = currentBoxData.price.toLocaleString().replace(',','.');
totalSummInDropdownElement.textContent = currentBoxData.price.toLocaleString().replace(',','.');
currentBoxViewName.textContent = currentBoxData.name;
currentBoxViewPrice.textContent = currentBoxData.price.toLocaleString().replace(',','.');


// ------------------- Tabs content ----------------------------

const tabContent = document.querySelectorAll('.choose-accessories__select .tab-content .tab-pane');
const tabList = document.querySelector('.choose-accessories__select .nav-pills');
let loadSizeAccessories;
if (!currentBoxData.hasMediumLargeDrawer) {
  loadSizeAccessories = accessories.filter(i => i.id != 8900);
} else {
  loadSizeAccessories = accessories;
}
const oneSizeAccessories = accessories.filter(item => item.size == 1);
const twoSizeAccessories = accessories.filter(item => item.size == 2);
const threeSizeAccessories = loadSizeAccessories.filter(item => item.size == 3);
let itemsContent;

function createElement(elements) {
  elements.forEach(item => {
    const accessoryElement = document.createElement('div');
    accessoryElement.className = 'accessory-cards__item d-flex flex-column';

    const firstPartHTML = `
        <div class="accessory-cards__item_first">
          <div class="accessory-cards__img">
            <div class="accessory-cards__img-wrapper">
              <img src="${item.image}" alt="Accessory" class="d-none d-sm-inline">
              <img src="img/accessory-1-small.png" alt="Accessory" class="d-inline d-sm-none">
            </div>
          </div>
          <div class="accessory-cards__content d-flex flex-column justify-content-between">
            <div class="accessory-cards__title">${item.name}</div>
            <div class="accessory-cards__main">
              <div class="accessory-cards__id-accessory d-flex justify-content-between">
                <p class="accessory-cards__id-subtitle">Item number:</p>
                <p class="accessory-cards__id">${item.id}</p>
              </div>
              <div class="accessory-cards__size-accessory d-flex justify-content-between">
                <p class="accessory-cards__size-subtitle">Size `;

    const secondPartHTML = item.size == 1 ? `<span>${item.size}</span>/3</p>
                            <p class="accessory-cards__size"><img src="img/icon/accessory-size-1.svg" class="accessory-cards__size-img" alt="size" data-size="1">` : 
                            item.size == 2 ? `<span>${item.size}</span>/3</p>
                            <p class="accessory-cards__size"><img src="img/icon/accessory-size-2.svg" class="accessory-cards__size-img" alt="size" data-size="2">` : 
                            item.size == 3 ? `<span>${item.size}</span>/3</p>
                            <p class="accessory-cards__size"><img src="img/icon/accessory-size-3.svg" class="accessory-cards__size-img" alt="size" data-size="3">` : 
                            `<span></span></p><p class="accessory-cards__size"><span class="accessory-cards__size-img" data-size="0"></span>`;

    const thirdPartHTML = `</p>
                        </div>
                        <div class="accessory-cards__footer d-flex justify-content-between align-items-center">
                          <button type="button" class="d-flex align-items-center justify-content-center"><img src="img/icon/plus-black.svg" alt="plus"class="accessory-cards__plus"><img src="img/icon/plus.svg" alt="plus" class="accessory-cards__plus-hover"></button>
                          <p class="accessory-cards__price"><span>${item.price}</span>,00 EUR</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accessory-cards__item_second">
                  </div>
                `;


    const oneAccessory = firstPartHTML + secondPartHTML + thirdPartHTML;
    accessoryElement.innerHTML = oneAccessory;

    itemsContent.appendChild(accessoryElement);
  });
}

function createAccessoriesDisplay() {

  tabContent.forEach((item) => {
    itemsContent = item.querySelector('.choose-accessories__cards');
    itemsContent.innerHTML = '';

    if(item.id == 'pills-all'){
      createElement(loadSizeAccessories);
    }
    if(item.id == 'pills-home'){
      createElement(oneSizeAccessories);
    }
    if(item.id == 'pills-profile'){
      createElement(twoSizeAccessories);
    }
    if(item.id == 'pills-contact'){
      createElement(threeSizeAccessories);
    }
  });

}

// ---------------------- Attaching accessories --------------------------------

function viewAttachingAcccessories() {
  const attachingAccessoriesList = currentBoxData.accessories;
  itemsContent = document.querySelector('.choose-accessories__cards-attaching');
  const titleAttachingAccessories = document.querySelector('.choose-accessories__cards-attaching-title');
  let filteredAccessories = [];
  itemsContent.innerHTML = '';

  if (attachingAccessoriesList.length > 0) {

    filteredAccessories = attachingAccessories.filter(item => attachingAccessoriesList.includes(item.id));
    createElement(filteredAccessories);

  } else {
    titleAttachingAccessories.classList.add('display-none');
    // containerAttaching.innerHTML = '<p>Box not have attaching accessories</p>';
  }
  
}

// ------------------------ Search -----------------------------

function searchAccessories() {
  const input = document.querySelector('#search-accessories');
  const tabs = document.querySelectorAll('.choose-accessories__select .nav-link');
  const tabsContent = document.querySelectorAll('.choose-accessories__select .tab-pane');

  input.addEventListener('focus', function() {
  
    tabs.forEach((item) => {
      item.classList.remove('active');
    });
    tabsContent.forEach(item => {
      item.classList.remove('show');
      item.classList.remove('active');
    });

    document.querySelector('#pills-all-tab').classList.add('active');
    document.querySelector('#pills-all').classList.add('show');
    document.querySelector('#pills-all').classList.add('active');

    document.querySelector('.nav-link__second').style.borderRight = '1px solid #e7e7e8';
    document.querySelector('.nav-link__first').style.borderRight = '1px solid #e7e7e8';

  });

  input.addEventListener('input', function() {
    let val = this.value.trim();
    let elem = document.querySelectorAll('#pills-all .choose-accessories__cards .accessory-cards__item');

    if (val != '') {
          elem.forEach(function(item){
            const itemName = item.querySelector('.accessory-cards__title').innerText;
            const itemId = item.querySelector('.accessory-cards__id').innerText;

            if (itemName.search(val) == -1 && itemId.search(val) == -1) {
              item.classList.add('hide');
            } else {
              item.classList.remove('hide');
            }
          });
    } else {
      elem.forEach(function(item){
          item.classList.remove('hide');
      });
    }

  });

  tabs.forEach(item => {
    item.addEventListener('click', () => {
      let elem = document.querySelectorAll('#pills-all .choose-accessories__cards .accessory-cards__item');
      input.value = '';
      elem.forEach(x => x.classList.remove('hide'));
    })
  })
}
searchAccessories();

// ---------------------- Loading Cabinete`s Drawers -----------------------------

function loadDrawers() {

  // -------------- load tabs navigation ---

  let tabsDrawers = document.querySelector('.choose-accessories__drawers-wrapper .nav');
  const tabsQuantity = currentBoxData.drawers.length;
  const tabsItems = currentBoxData.drawers;

  tabsDrawers.innerHTML = '';

  const firstItem = `<p class="d-none d-sm-block">Drawer</p>`;

  let secondItem = ``;

  tabsItems.forEach((item,i)=> {
    let numberDrawer = String(i + 1);
    if(numberDrawer.length == 1) {numberDrawer = '0' + numberDrawer}

    secondItem += `<button class="nav-link d-flex align-items-center" id="v-pills-${i+1}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${i+1}" type="button" role="tab" aria-controls="v-pills-${i+1}" aria-selected="false">
              <div class="choose-accessories__nav-img nav-img d-flex">`;
        for (let i = 0; i < item; i++) {
          secondItem += `<div class="nav-img__item"></div>`;
        }
              
    secondItem += `</div><span class="button-number">${numberDrawer}</span>
              <span class="d-sm-none me-1">Drawer</span>
            </button>`;
  });
  const thirdItem = `
                    <div class="nav-list_top d-sm-none d-flex justify-content-center align-items-center"></div>
                    <div class="nav-list_bottom d-sm-none d-flex justify-content-center align-items-center"></div>
                    <div class="d-sm-none">
                      <select id="mobileTabsSelect">
                      </select>
                    </div>
                    `;
  
  tabsDrawers.innerHTML = firstItem + secondItem + thirdItem;
  tabsDrawers.querySelectorAll('.nav-link')[0].classList.add('active');

  tabsDrawers.querySelectorAll('.nav-link').forEach(item => {
    const buttonImg = item.querySelector('.nav-img');

    if(buttonImg.childElementCount == 4) {
      buttonImg.children[2].style.marginRight = '4px';
      buttonImg.children[3].style.marginRight = '7px';
      // buttonImg.children[2].classList.add('nav-img__item-3');
    }
  });

  // -------------- Load Tabs Content ---

  const tabsContent = document.querySelector('.choose-accessories__drawers-tabs .tab-content');
  tabsContent.innerHTML = '';

  let firstItemContent = '';
  let secondItemContent = '';
  let thirdItemContent = '';
  let drawersContent = '';

  tabsItems.forEach((item,i) => {
    firstItemContent = `
          <div class="tab-pane" id="v-pills-${i+1}" role="tabpanel" aria-labelledby="v-pills-${i+1}-tab" tabindex="0"><div class="choose-accessories__drawers-content drawers-content"></div>`;
    if (item == 3) {
      secondItemContent = `<img src="img/drawer3.webp" alt="Shelf">`;
    } else if(item == 4) {
      secondItemContent = `<img src="img/drawer4.webp" alt="Shelf">`;
    } else {
      secondItemContent = `<img src="img/drawer5.webp" alt="Shelf">`;
    }
    thirdItemContent = `<p class="d-flex align-items-center not-active"><img src="img/icon/reset.svg" alt="">Reset</p>
          </div>`;

    drawersContent += firstItemContent + secondItemContent + thirdItemContent;
  });

  tabsContent.innerHTML = drawersContent;
  tabsContent.querySelectorAll('.tab-pane')[0].classList.add('active');
  tabsContent.querySelectorAll('.tab-pane')[0].classList.add('show');
}

// ---------------------- MobileTabsSelect --------------------------------------

function loadMobileTabsSelect() {
  const mobileTabsSelect = document.querySelector('#mobileTabsSelect');
  const currentBoxDrawers = currentBoxData.drawers.length;
  let itemOptions = ``;

  for (let i = 0; i < currentBoxDrawers; i++) {
    itemOptions += `<option value="${i+1}">Drawer ${i+1}</option>`
  }

  mobileTabsSelect.innerHTML = itemOptions;

}


// Инициализация при загрузке страницы
window.addEventListener('DOMContentLoaded', function() {
  createAccessoriesDisplay();
  viewAttachingAcccessories();
  loadDrawers();
  loadMobileTabsSelect();
});