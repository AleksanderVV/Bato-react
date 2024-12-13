window.addEventListener("load", (event) => {


  // -------------------------------- Sticky block Result ----------------------------
  window.addEventListener('scroll', function() {
    console.log(1);
    if(this.window.scrollY > 78 && this.window.screen.width > 768) {

      
      this.document.querySelector('.result').classList.add('result_sticky');

      if (document.querySelector('#main')) {
        this.document.querySelector('.main-header').classList.add('margin-top');
      }
      if (document.querySelector('#accessories')) {
        this.document.querySelector('.result-dropdown').classList.add('result_sticky');
        this.document.querySelector('.total-main').classList.add('margin-top');
      }
      if (document.querySelector('#total')) {
        this.document.querySelector('.result-dropdown').classList.add('result_sticky');
        this.document.querySelector('.total-main').classList.add('margin-top');
      }
    } else if(this.window.scrollY >= 1 && this.window.screen.width < 768) {

        this.document.querySelector('header').classList.add('result_sticky');
        if(this.document.querySelector('.result-dropdown')) {
          this.document.querySelector('.result-dropdown').classList.add('result_sticky');
        }
        this.document.querySelector('.result').style.marginTop = '70px';

    }
    else {
      document.querySelector('.result').classList.remove('result_sticky');
      document.querySelector('header').classList.remove('result_sticky');
      this.document.querySelector('.result').style.marginTop = '0px';

      if (document.querySelector('#main')) {
        this.document.querySelector('.main-header').classList.remove('margin-top');
        this.document.querySelector('.main-header').classList.remove('margin-top-40');
      }
      if (document.querySelector('#accessories')) {
        this.document.querySelector('.result-dropdown').classList.remove('result_sticky');
        this.document.querySelector('.total-main').classList.remove('margin-top');
        this.document.querySelector('.total-main').classList.remove('margin-top-40');
      }
      if (document.querySelector('#total')) {
        this.document.querySelector('.result-dropdown').classList.remove('result_sticky');
        this.document.querySelector('.total-main').classList.remove('margin-top');
        this.document.querySelector('.total-main').classList.remove('margin-top-40');
      }
    }

  // +++----------------------------- Sticky block 
    if (document.querySelector('#accessories')) {
      if (this.window.scrollY > 1060) {
        this.document.querySelector('.choose-accessories__drawers').classList.add('box-sticky');
      } else {
        this.document.querySelector('.choose-accessories__drawers').classList.remove('box-sticky');
      }
    }
  })

  // ------------------ Change text in block Result when display < 992px --------------------------
  
  function changeTextResultHeader() {
    let titleFirst = document.querySelector('.result__item_first');
    let titleSecond = document.querySelector('.result__item_second');

    if (window.screen.width < 992) {
      titleFirst.textContent = '01. Toolbox';
      titleSecond.textContent = '02. Accessories';
      document.querySelector('.result__items').style.opacity = 1;
    }
  }
  changeTextResultHeader();

  // ---------------------------- First Page ---------------------------------------------

  if(document.querySelector('#main')) {

    if (window.screen.width < 992) {
      document.querySelector('.filter-drawers__top .filter-drawers__text').textContent = 'Drawers:';
    }

// ------------------ Open Menu Color -----------------------------------

    function selectCloseOpen(select) {
      document.querySelector('.filter-' + select + '__down').classList.toggle('open');
      document.querySelector('.filter-' + select + '__down').classList.toggle('close');
    }

    document.querySelector('.filter-color__top').addEventListener('click', (e) => {
      selectCloseOpen('color');
    }); 
    document.addEventListener('click', (e) => {
      let target = e.target;
      let its_color = target == document.querySelector('.filter-color__down') || document.querySelector('.filter-color__down').contains(target);
      let its_colorTop = target == document.querySelector('.filter-color__top') || document.querySelector('.filter-color__top').contains(target);
      let menu_is_active = document.querySelector('.filter-color__down').classList.contains('open');

      let its_drawers = target == document.querySelector('.filter-wrawers__down') || document.querySelector('.filter-drawers__down').contains(target);
      let its_drawersTop = target == document.querySelector('.filter-drawers__top') || document.querySelector('.filter-drawers__top').contains(target);
      let menuDrawers_is_active = document.querySelector('.filter-drawers__down').classList.contains('open');

      if(!its_color && !its_colorTop && menu_is_active) {
        selectCloseOpen('color');
      }
      if(!its_drawers && !its_drawersTop && menuDrawers_is_active) {
        selectCloseOpen('drawers');
      }
    })

    document.querySelectorAll('.filter-color__item').forEach((item) => {
      item.addEventListener('click', function() {
        selectCloseOpen('color');

        let classNameColor = item.querySelector('.filter-color__view').classList.item(1);
        let filterTopElement = document.querySelector('.filter-color__top .filter-color__view');
        let classNameColorTop = filterTopElement.classList.item(1);

        document.querySelector('.filter-color__top .filter-color__view').classList.remove(classNameColorTop);
        document.querySelector('.filter-color__top .filter-color__view').classList.add(classNameColor);

        // document.querySelectorAll('.filter-color__item').forEach((item) => {
        //   item.classList.remove('selected');
        // });
        // this.classList.add('selected');
      });
    });

// ------------------ Open Menu Drawers -----------------------------------

    document.querySelector('.filter-drawers__top').addEventListener('click', () => {
      selectCloseOpen('drawers');
    });
    document.querySelectorAll('.filter-drawers__item').forEach((item) => {
      item.addEventListener('click', function() {
        selectCloseOpen('drawers');

        let itemNumber = item.textContent;
        document.querySelector('.filter-drawers__top .filter-drawers__number').textContent = itemNumber;

        // document.querySelectorAll('.filter-drawers__item').forEach((item) => {
        //   item.classList.remove('selected');
        // });
        // this.classList.add('selected');
      });
    });

  }

  // -------------------- change drawers number text ------------------

  if(document.querySelector('#accessories')) {
    if (window.screen.width < 992 && window.screen.width > 768) {
      document.querySelectorAll('.accessory-selected__drawer-number').forEach((item) => {
        let content = item.textContent.trim();
        item.textContent = content.split(' ')[1];
      });
    }

// --------------------------- Desktop open dropdown ---------------------------------

    function closeDropdown() {
      document.querySelector('.result-dropdown').classList.toggle('open-dropdown');

      document.querySelector('.result__img_close').classList.toggle('close');
      document.querySelector('.result__img_open').classList.toggle('close');
    }

    document.querySelector('.result__total-item').addEventListener('click', () => {
      closeDropdown();
    });

    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('overlay') || event.target.classList.contains('result-dropdown__close')) {
        closeDropdown();
      }
    });

// --------------------------- Mobile open dropdown --------------------------------

    document.querySelector('.header__total-item').addEventListener('click', () => {
      document.querySelector('.result-dropdown').classList.toggle('open-dropdown');
      // document.querySelector('.result').classList.toggle('open-dropdown');

      document.querySelector('.header__img_close').classList.toggle('close');
      document.querySelector('.header__img_open').classList.toggle('close');
    })

  }

// ----------------------------- Second Screen --------------------------

if(document.querySelector('#accessories')) {
  document.querySelector('.result-dropdown__submit button').addEventListener('click', () => {
    location.href = 'step3.html';
  });
  document.querySelector('.choose-accessories__drawers-price-button').addEventListener('click', () => {
    location.href = 'step3.html';
  });
  document.querySelector('.choose-accessories__drawers-price-button2').addEventListener('click', () => {
    location.href = 'step3.html';
  });

  document.querySelector('.choose-accessories__drawers-price-show').addEventListener('click', () => {
    document.querySelector('.result-dropdown').classList.toggle('open-dropdown');

    document.querySelector('.result__img_close').classList.toggle('close');
    document.querySelector('.result__img_open').classList.toggle('close');
  })

  document.querySelector('.nav-item_all').addEventListener('click', () => {
    document.querySelector('.nav-link__second').style.borderRight = '1px solid #e7e7e8';
    document.querySelector('.nav-link__first').style.borderRight = '1px solid #e7e7e8';
  });
  document.querySelector('.nav-item_first').addEventListener('click', () => {
    document.querySelector('.nav-link__second').style.borderRight = '1px solid #e7e7e8';
  });
  document.querySelector('.nav-item_second').addEventListener('click', () => {
    document.querySelector('.nav-link__all').style.borderRight = '1px solid #e7e7e8';
    document.querySelector('.nav-link__first').style.borderRight = '1px solid #fff';
    document.querySelector('.nav-link__second').style.borderRight = '1px solid #1D2939';
  });
  document.querySelector('.nav-item_third').addEventListener('click', () => {
    document.querySelector('.nav-link__all').style.borderRight = '1px solid #e7e7e8';
    document.querySelector('.nav-link__first').style.borderRight = '1px solid #e7e7e8';
    document.querySelector('.nav-link__second').style.borderRight = '1px solid #fff';
  });

  // ------------------------ Change Search plaseholder ----------------------------

  if(window.innerWidth < 576) {
    document.querySelector('#search-accessories').setAttribute('placeholder', 'Input item number or name');
    // window.addEventListener('scroll', () => {
    //   if (window.scrollY > 660) {
    //     document.querySelector('.choose-accessories__drawers-price-button2').style.display = 'flex';
    //     document.querySelector('footer').style.marginBottom = '60px';
    //     // document.querySelector('.choose-accessories__filter-top').style.display = 'flex';
    //   } else {
    //     document.querySelector('.choose-accessories__drawers-price-button2').style.display = 'none';
    //     document.querySelector('footer').style.marginBottom = '0px';
    //     // document.querySelector('.choose-accessories__filter-top').style.display = 'none';
    //   }
    // })

    // document.querySelector('.result-dropdown__accessory').addEventListener('scroll', () => {
    //   let scroll = document.querySelector('.result-dropdown__accessory');
    //   let topTitle = document.querySelector('.result-dropdown.open-dropdown');

    //   if (scroll.scrollTop >= 1) {
    //     topTitle.style.marginTop = (0 - scroll.scrollTop) + 'px';
    //     if(topTitle.style.marginTop.slice(0,-2) < -125) {
    //       topTitle.style.marginTop = '-125px'
    //     }
    //   } 
    // });

    function popupWork() {
      let openPopupButton = document.querySelector('.choose-accessories__filter-top');
      let closePopupButton = document.querySelector('.choose-accessories__close-popup');
      let popup = document.querySelector('.choose-accessories__drawers');
  
      openPopupButton.addEventListener('click', () => {
        popup.style.display = 'block';
        document.querySelector('body').classList.add('open-popup');
      });
      closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
        document.querySelector('body').classList.remove('open-popup');
      })
    }
    popupWork(); 

    function viewButtonOpenPopup() {
      const buttons = document.querySelectorAll('.accessory-cards__item');
      // console.log(buttons);
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          document.querySelector('.choose-accessories__drawers-price-button2').style.display = 'flex';
          document.querySelector('.choose-accessories__filter-top').style.display = 'flex';
        });
      });

    }
    viewButtonOpenPopup();

      // ----------------------- Change Drawers buttons mobile -----------------------------------
  let firstActive = 0;

  function chooseDrawers() {
    let nav = document.querySelector('.nav');
    let button = nav.querySelectorAll('.nav button.nav-link');
    let tabContent = document.querySelector('#v-pills-tabContent');

    document.querySelector('.nav-list_top').classList.add('non-active');

    document.querySelector('.nav-list_bottom').addEventListener('touchstart', () => {
      document.querySelector('.nav-list_bottom').style.backgroundColor = "#f1f1f1";
    });
    document.querySelector('.nav-list_bottom').addEventListener('touchend', () => {
      document.querySelector('.nav-list_bottom').style.backgroundColor = "#fff";
    });

    document.querySelector('.nav-list_bottom').addEventListener('click', () => {
      console.log(firstActive);
      if (firstActive >=0 && firstActive < button.length-1) {
        document.querySelector('.nav-list_bottom').classList.remove('non-active');
        firstActive++;
        
        button[firstActive-1].classList.remove('active');
        button[firstActive].classList.add('active');

        tabContent.querySelectorAll('.tab-pane')[firstActive-1].classList.remove('active','show');
        tabContent.querySelectorAll('.tab-pane')[firstActive].classList.add('active','show');
      }
      if(firstActive == button.length - 1) {
        document.querySelector('.nav-list_bottom').classList.add('non-active');
      }

      document.querySelector('.nav-list_top').classList.remove('non-active');
    })

    document.querySelector('.nav-list_top').addEventListener('touchstart', () => {
      document.querySelector('.nav-list_top').style.backgroundColor = "#f1f1f1";
    });
    document.querySelector('.nav-list_top').addEventListener('touchend', () => {
      document.querySelector('.nav-list_top').style.backgroundColor = "#fff";
    });
    document.querySelector('.nav-list_top').addEventListener('click', () => {
      console.log(firstActive);
      if (firstActive < button.length && firstActive > 0) {
        firstActive--;
        button[firstActive+1].classList.remove('active');
        button[firstActive].classList.add('active');

        tabContent.querySelectorAll('.tab-pane')[firstActive+1].classList.remove('active','show');
        tabContent.querySelectorAll('.tab-pane')[firstActive].classList.add('active','show');
      }
      if(firstActive == 0) {
        document.querySelector('.nav-list_top').classList.add('non-active');
      }
      document.querySelector('.nav-list_bottom').classList.remove('non-active');


    });
  }
  chooseDrawers();

  function selectDrawers() {
    const tabsSelect = document.getElementById('mobileTabsSelect');
    let nav = document.querySelector('.nav');
    let buttons = nav.querySelectorAll('.nav button.nav-link');
    let tabContent = document.querySelector('#v-pills-tabContent');

    buttons.forEach(button => {
      button.addEventListener('click',() => {
          tabsSelect.focus(); // Симулируем клик
          tabsSelect.size = tabsSelect.options.length;
          tabsSelect.style.opacity = 1;
      });

      tabsSelect.addEventListener('blur', () => {
        tabsSelect.size = 1 // тут сбрасываем обратно
        tabsSelect.style.opacity = 0;
      })
    })

    tabsSelect.addEventListener('change', function () {
      tabsSelect.size = 1;
      tabsSelect.style.opacity = 0;
      const selectedTabId = tabsSelect.value;

      firstActive = selectedTabId - 1;
      
      buttons.forEach((button,i) => {
        button.classList.remove('active');

        if (i == parseInt(selectedTabId) - 1) {
          button.classList.add('active');
        }

      });

      tabContent.querySelectorAll('.tab-pane').forEach((tab,i) => {
        tab.classList.remove('active','show');

        if (i == parseInt(selectedTabId) - 1) {
          tab.classList.add('active','show');
        }
      })

      if (selectedTabId == 1) {
        document.querySelector('.nav-list_top').classList.add('non-active');
        document.querySelector('.nav-list_bottom').classList.remove('non-active');
      } else if (selectedTabId == tabsSelect.options.length) {
        document.querySelector('.nav-list_top').classList.remove('non-active');
        document.querySelector('.nav-list_bottom').classList.add('non-active');
      } else {
        document.querySelector('.nav-list_top').classList.remove('non-active');
        document.querySelector('.nav-list_bottom').classList.remove('non-active');
      }

    });
  }
  selectDrawers();
  }

  // ------------------------ change left block fixed -----------------------------

  const drawers = document.querySelector('.choose-accessories__drawers');

  function handleWindowResize() {
    const windowWidth = window.innerWidth;
    const containerWidth = 1600; // Ширина контейнера, после которой будет фиксированное положение

    if (windowWidth > containerWidth) {
        const offset = (windowWidth - containerWidth) / 2; // Рассчитываем смещение
        drawers.style.left = `${150 + offset}px`;
    }
  }

  window.addEventListener('resize', handleWindowResize);
  handleWindowResize(); // Вызываем функцию при загрузке страницы


}


// ----------------------------- Third Screen --------------------------------------  
  if(document.querySelector('#total')) {

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

    function clearAllCookies() {
      const cookies = document.cookie.split("; ");
      
      for (let i = 0; i < cookies.length; i++) {
          const cookieParts = cookies[i].split("=");
          const cookieName = cookieParts[0];
          
          // Устанавливаем срок действия куки в прошлое
          document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      }
    }

    const currentBoxId = getCookie("idboxes");
    if(!currentBoxId) {
      location.href = 'index.html';
    }

    // ------------------------ Load dataCookies ------------------------------------

    const addedAccessoriesPrice = JSON.parse(getCookie('addedAccessoriesPrice'));
    const addedAccessories = JSON.parse(getCookie('addedAccessories'));
    const addedAccessoriesArray = addedAccessories.flat();

    const currentBoxData = boxes.find(box => box.id == currentBoxId);
    const drawerName = document.querySelector('.total-items-box__name');
    const drawerPrice = document.querySelector('.total-items-box__header .total-items-box__price span');
    const containerAccessories = document.querySelector('.total-items-box__items');
    const totalPriceContainer = document.querySelector('.total-items-box__total .total-items-box__price span');
    const quantityAccessories = addedAccessoriesPrice.length;

    drawerName.textContent = currentBoxData.name;
    drawerPrice.textContent = currentBoxData.price;
    let addedAccessoriesData = '';

    for(let i = 0; i < quantityAccessories; i++) {
      let currentAccessoryID = addedAccessoriesArray[i];
      let currentAccessoryData;
      if (accessories.filter(item => item.id == currentAccessoryID).length > 0) {
        currentAccessoryData = accessories.filter(item => item.id == currentAccessoryID)[0];
      } else {
        currentAccessoryData = attachingAccessories.filter(item => item.id == currentAccessoryID)[0];
      }

      addedAccessoriesData += `
        <div class="total-items-box_item">
          <div class="total-items-box__name d-flex justify-content-between">
            <p>${currentAccessoryData.name} EVA ${currentAccessoryData.size}/3.</p>
          </div>
          <div class="total-items-box__price d-flex">
            <span>${currentAccessoryData.price}</span>,00 EUR
          </div>
        </div>
      `;
    }

    containerAccessories.innerHTML = addedAccessoriesData;
    totalPriceContainer.textContent = addedAccessoriesPrice.reduce((cur,acc) => parseInt(cur) + parseInt(acc), 0) + currentBoxData.price;


    document.querySelector('.total-result__submit button').addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.total-result__form-box').style.display = 'none';
      document.querySelector('.total-result__after-send').style.display = 'block';
      document.querySelector('.total-items-box').classList.add('after-send');
      // document.querySelector('.total-main__link').classList.add('total-main__link-dark');

      clearAllCookies();
    });
  
    // let deleteButtons = document.querySelectorAll('.delete_item');
    //   deleteButtons.forEach((button) => {
    //     button.addEventListener('click', function() {
    //       const parentItem = this.closest('.total-items-box_item');
    //       if(parentItem) {
    //         parentItem.remove();
    //       }
    //   });
    // });

  }


});

