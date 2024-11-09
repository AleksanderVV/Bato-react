
// Получение элементов фильтров и контейнера для товаров
const drawersFilter = document.querySelector('.filter-drawers__down');
const colorFilter = document.querySelector('.filter-color__down');
const wheelsCheckbox = document.querySelector('.filter-boxes__wheels input');
const productsContainer = document.querySelector('.main-boxes__items');

// Получение всех кук в виде строки
const allCookies = document.cookie;

function checkCookie(name) {
    const cookies = document.cookie.split("; ");
    
    for (let i = 0; i < cookies.length; i++) {
        const cookieParts = cookies[i].split("=");
        if (cookieParts[0] === name) {
            return true; // Куки с указанным именем найдено
        }
    }
    
    return false; // Куки с указанным именем не найдено
}

function getCookie(name) {
    const value = "; " + allCookies;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

// Функция для применения всех фильтров
function applyFilters() {
  const selectedDrawers = drawersFilter.querySelector('.selected');
  
  const selectedColor = colorFilter.querySelector('.selected');
  const showWheels = wheelsCheckbox.checked;

  return boxes.filter(box => {
    const selectedDrawersValue = parseInt(selectedDrawers.querySelector('.filter-drawers__number').textContent);
    const selectedColorText = selectedColor.querySelector('.filter-color__text').textContent.toLowerCase();
    let drawersMatch, colorMatch;

    if (selectedDrawers.querySelector('.filter-drawers__number').textContent === 'All') {
      drawersMatch = selectedDrawers.classList.contains('selected') || selectedDrawersValue === box.numberDrawers;
    } else {
      drawersMatch = selectedDrawersValue === box.numberDrawers;
    }

     if (selectedColorText === 'all') {
      colorMatch = selectedColor.classList.contains('selected') || selectedColorText === box.color[0];
     } else {
      colorMatch = selectedColorText === box.color[0];
     }
   
    const wheelsMatch = showWheels ? box.wheels : true;

    return drawersMatch && colorMatch && wheelsMatch;
  });
}

// Функция для обновления отображения товаров
function updateProductsDisplay(filteredBoxes) {
  productsContainer.innerHTML = '';

  filteredBoxes.forEach(box => {
    const productElement = document.createElement('div');
    productElement.className = 'main-boxes__item box-item d-flex flex-column';

    const firstPartHTML = `
      <div class="main-boxes__item_first">
        <div class="box-item__img">
          <img src="${box.image}" alt="Box">
        </div>
        <div class="box-item__content d-flex flex-column">
          <div class="box-item__title">${box.name}</div>
          <div class="box-item__id-box d-flex justify-content-between pb-2">
            <p class="box-item__id-subtitle">Item number:</p>
            <p class="box-item__id">${box.id}</p>
          </div>
          <div class="box-item__drawers-box d-flex justify-content-between pb-2">
            <p class="box-item__drawers-subtitle">Number of drawers:</p>
            <p class="box-item__drawers">${box.numberDrawers}</p>
          </div>
          <div class="box-item__color-box d-flex justify-content-between pb-2">
            <p class="box-item__color-subtitle">Color:</p>
            <div class="box-item__color" style="background-color: ${box.color[1]};"></div>
          </div>
          <div class="box-item__wheel-box d-flex justify-content-between pb-2">
            <p class="box-item__wheel-subtitle">Wheels:</p>
            <p class="box-item__wheel">${box.wheels ? '<img src="img/icon/check.svg" alt="Open">' : '&mdash;'}</p>
          </div>
          <div class="box-item__size-box d-flex justify-content-between pb-4 pb-sm-5">
            <p class="box-size-subtitle">Size H<img src="img/icon/x-icon.svg" alt="x">L<img src="img/icon/x-icon.svg" alt="x">W:</p>
            <p class="box-item__size">
    `;

    const sizePartHTML = box.size.length > 0 ?
      `<span class="box-height">${box.size[0]}</span>
      <img src="img/icon/x-icon.svg" alt="x">
      <span class="box-length">${box.size[1]}</span>
      <img src="img/icon/x-icon.svg" alt="x">
      <span class="box-width">${box.size[2]} mm</span>` :
      '';

    const lastPartHTML = `
            </p>
          </div>
          <div class="box-item__footer d-flex justify-content-between align-items-center">
            <button type="button">Select</button>
            <p class="box-item__price"><span>${box.price}</span>,00 EUR</p>
          </div>
        </div>
      </div>
      <div class="main-boxes__item_second">
      </div>
    `;

    productElement.innerHTML = firstPartHTML + sizePartHTML + lastPartHTML;

    productsContainer.appendChild(productElement);
  });

  document.querySelectorAll('.box-item').forEach((button) => {
    button.addEventListener('click', () => {
      let idBoxes = button.querySelector('.box-item__id').textContent;
      const currentDate = new Date();
      const expirationDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); 

      if(checkCookie('idboxes')) {
        const currentBoxId = getCookie("idboxes");

        if(currentBoxId == idBoxes) {
          document.cookie = `idboxes=${idBoxes}; expires=${expirationDate.toUTCString()}; path=/;`;
          location.href = 'step2.html';

        } else if (currentBoxId != idBoxes) {
          
          document.cookie = "addedAccessoriesPrice =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie = "addedAccessoriesSizes =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie = "addedAccessories =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

          document.cookie = `idboxes=${idBoxes}; expires=${expirationDate.toUTCString()}; path=/;`;
          location.href = 'step2.html';
        }
      } else {
        document.cookie = `idboxes=${idBoxes}; expires=${expirationDate.toUTCString()}; path=/;`;
        location.href = 'step2.html';
      }

    })
  });
}

// Обработчики изменения фильтров
drawersFilter.addEventListener('click', function(event) {
  const clickedItem = event.target.closest('.filter-drawers__item');

  if (clickedItem) {
    drawersFilter.querySelector('.selected').classList.remove('selected');
    clickedItem.classList.add('selected');
    
    const filteredBoxes = applyFilters();
    updateProductsDisplay(filteredBoxes);
  }
});

colorFilter.addEventListener('click', function(event) {
  const clickedItem = event.target.closest('.filter-color__item');
  if (clickedItem) {
    colorFilter.querySelector('.selected').classList.remove('selected');
    clickedItem.classList.add('selected');
    
    const filteredBoxes = applyFilters();
    updateProductsDisplay(filteredBoxes);
  }
});

wheelsCheckbox.addEventListener('change', function() {
  const filteredBoxes = applyFilters();
  updateProductsDisplay(filteredBoxes);
});

// Инициализация при загрузке страницы
window.addEventListener('load', function() {
  const filteredBoxes = applyFilters();
  updateProductsDisplay(filteredBoxes);

});