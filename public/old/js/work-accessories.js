window.addEventListener("load", (event) => {

  const itemAccessory = document.querySelectorAll('.accessory-cards__item');
  const drawersContainer = document.querySelector('.choose-accessories__drawers-tabs');
  const dropdownContainer = document.querySelector('.result-dropdown__accessory');
  const quantityDrawers = currentBoxData.drawers.length;
  const accessoriesContainer = document.querySelector('.choose-accessories__select .tab-content');
  let fullLengthBox = currentBoxData.drawers.reduce((acc, cur) => acc + cur, 0);
  let currentLengthAcc = 0;
  
  let addedAccessory, addedAccessorySize, arrSumAccessories;
  
  if(arrayAccessoriesPrice.length != 0) { // If you choose acc earlier and reboot page
    addedAccessory = arrayAccessories;
    const addedAccessoryArray = addedAccessory.flat();
    addedAccessorySize = arrayAccessoriesSize;
    arrSumAccessories = arrayAccessoriesPrice;

    itemAccessory.forEach((item,index) => {
      const accessoryID = item.querySelector('.accessory-cards__id').textContent;

      addedAccessory.forEach((array,i) => {
        
        if (array.length == 0) {
          drawersContainer.querySelectorAll('.tab-pane')[i].querySelector('p').classList.add('not-active');
        }

        array.forEach(id => {
          if(accessoryID == id) {
            item.classList.add('accessory-cards__item_choose');
            item.classList.add(`accessory-cards__item_choose-${i + 1}`);
          }
        });
      });


    });

    createDropdownContainer();
    changeDrawersTabsImage();
    sumTotal();
    quantityAddedAccessory();
    showAccesoriesOnDrawers();
    insertAccessoriesInDpordown();

  } else {
    addedAccessory = Array.from({length: currentBoxData.drawers.length}, () => []);
    addedAccessorySize = Array.from({length: currentBoxData.drawers.length}, () => []);
    arrSumAccessories = [];

    addedAccessory.forEach((array,i) => {
      if (array.length == 0) {
        drawersContainer.querySelectorAll('.tab-pane')[i].querySelector('p').classList.add('not-active');
      }
    });

    createDropdownContainer();
  }

  for (let i = 0; i < addedAccessorySize.length; i++) {
    for (let j = 0; j < addedAccessorySize[i].length; j++) {
      currentLengthAcc += parseInt(addedAccessorySize[i][j]);
    }
  }

  console.log(fullLengthBox);

  if (currentLengthAcc == fullLengthBox) {
    accessoriesContainer.querySelectorAll('.accessory-cards__item').forEach(item => {
      if(!item.classList.contains('accessory-cards__item_choose')) {
        item.classList.add('not-active');
      }
    })
  } else if(currentLengthAcc < fullLengthBox) {
    accessoriesContainer.querySelectorAll('.accessory-cards__item').forEach(item => {
      if(item.classList.contains('not-active')) {
        item.classList.remove('not-active');
      }
    })
  }

  drawersContainer.querySelectorAll('.nav-link').forEach(item => {
    hideAccessories();
  });


  function countTotalElements(arr) {
    let totalCount = 0;

    arr.forEach(item => {
        if (Array.isArray(item)) {
            totalCount += countTotalElements(item);
        } else {
            totalCount++;
        }
    });

    return totalCount;
  }

  function createDropdownContainer() {
    dropdownContainer.innerHTML = '';
    let itemsDrawers = '';
    let attachingAccessoriesDrawer = '<div class="accessory-selected__drawer-attaching d-flex justify-content-between"></div>';

    currentBoxData.drawers.forEach(() => {
      itemsDrawers += '<div class="accessory-selected__drawer d-flex justify-content-between"></div>';
    });
    dropdownContainer.innerHTML = itemsDrawers + attachingAccessoriesDrawer;
  }
  
  function findArrayIndexWithElement(array, target, currentIndex = -1) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        
        if (Array.isArray(item)) {
            const foundInSubarray = findArrayIndexWithElement(item, target, i);
            
            if (foundInSubarray.found) {
                return foundInSubarray;
            }
        } else if (item === target) {
            return { found: true, index: currentIndex };
        }
    }
    
    return { found: false, index: -1 };
  }
  
  function addAccessories() { // Adding acc to drawer

    let currentLengthAcc = 0;
    let currentDrawer = drawersContainer.querySelector('.active').getAttribute('id').split('-')[2]; //номер полки
    let currentDrawerLength = currentBoxData.drawers[currentDrawer-1]; //длинна выбранной полки
    let currentAccessorySize = this.querySelector('.accessory-cards__size .accessory-cards__size-img').getAttribute('data-size'); //размер акс
    let currentAccessoryId = this.querySelector('.accessory-cards__id').textContent;
    let currentAccessoryPrice = this.querySelector('.accessory-cards__price span').textContent;
    // let currentTabsDrawer = drawersContainer.querySelectorAll('.nav-link')[currentDrawer-1];

    const { found, index } = findArrayIndexWithElement(addedAccessory, currentAccessoryId);

    if(found && currentDrawer != index + 1 && currentAccessorySize != 0) { // отмена нажатия на выбранный акс на другой полке
      event.preventDefault();
      return;
    }
    

    if(currentAccessorySize != 0) { // обычный акс

        if(this.classList.contains('accessory-cards__item_choose')) { // убираем на аксессуар класс и акс, что он выбран

          this.classList.remove('accessory-cards__item_choose');
          this.classList.remove(`accessory-cards__item_choose-${currentDrawer}`);
          arrSumAccessories.splice([arrSumAccessories.indexOf(currentAccessoryPrice)],1);

          accessoriesContainer.querySelectorAll('.accessory-cards__item').forEach(item => {
            let itemID = item.querySelector('.accessory-cards__id').textContent;
            if(currentAccessoryId == itemID && item.classList.contains('accessory-cards__item_choose')) {
              item.classList.remove('accessory-cards__item_choose');
              item.classList.remove(`accessory-cards__item_choose-${currentDrawer}`);
            }
          })

          addedAccessory[currentDrawer-1].splice(addedAccessory[currentDrawer-1].indexOf(this.querySelector('.accessory-cards__id').textContent), 1);
          addedAccessorySize[currentDrawer-1].splice(addedAccessorySize[currentDrawer-1].indexOf(this.querySelector('.accessory-cards__size-subtitle span').textContent), 1);
        } else { // добавляем на аксессуар класс и акс, что он выбран

          let currentAccessorySizeOnDrawer = addedAccessorySize[currentDrawer-1].reduce((acc,current) => parseInt(acc)+parseInt(current), 0); // заполняем полку
            
            if(currentDrawerLength > currentAccessorySizeOnDrawer + parseInt(currentAccessorySize) -1) { //проверка на длинну подмассива
              this.classList.add('accessory-cards__item_choose');
              this.classList.add(`accessory-cards__item_choose-${currentDrawer}`);
              arrSumAccessories.push(currentAccessoryPrice); //добавляем стоимость акс в массив
  
              accessoriesContainer.querySelectorAll('.accessory-cards__item').forEach(item => {
                let itemID = item.querySelector('.accessory-cards__id').textContent;
                if(currentAccessoryId == itemID && !item.classList.contains('accessory-cards__item_choose')) {
                  item.classList.add('accessory-cards__item_choose');
                  item.classList.add(`accessory-cards__item_choose-${currentDrawer}`);
                }
              })
  
              addedAccessory[currentDrawer-1].push(this.querySelector('.accessory-cards__id').textContent);
              addedAccessorySize[currentDrawer-1].push(currentAccessorySize);

            // } 
          }

        }

        // Функционал заполнения ящика

        for (let i = 0; i < addedAccessorySize.length; i++) {
          for (let j = 0; j < addedAccessorySize[i].length; j++) {
            currentLengthAcc += parseInt(addedAccessorySize[i][j]);
          }
        }

        
        if (currentLengthAcc == fullLengthBox) {
          accessoriesContainer.querySelectorAll('.accessory-cards__item').forEach(item => {
            if(!item.classList.contains('accessory-cards__item_choose')) {
              item.classList.add('not-active');
            }
          })
        } else if(currentLengthAcc < fullLengthBox) {
          accessoriesContainer.querySelectorAll('.accessory-cards__item').forEach(item => {
            if(item.classList.contains('not-active')) {
              item.classList.remove('not-active');
            }
          })
        }

        // button Reset

        addedAccessory.forEach((array,i) => {
          if (array.length == 0) {
            drawersContainer.querySelectorAll('.tab-pane')[i].querySelector('p').classList.add('not-active');
          } else {
            drawersContainer.querySelectorAll('.tab-pane')[i].querySelector('p').classList.remove('not-active');
          }
        });

    } 
    else // доп акс
    { 
      
      if(this.classList.contains('accessory-cards__item_choose')) { // добавляем/убираем на аксессуар класс и акс, что он выбран
        this.classList.remove('accessory-cards__item_choose');
        addedAccessory.splice(addedAccessory.indexOf(this.querySelector('.accessory-cards__id').textContent), 1);

        
        arrSumAccessories.splice([arrSumAccessories.indexOf(currentAccessoryPrice)],1); //удаляем стоимость акс в массив
      } else {
        this.classList.add('accessory-cards__item_choose');
        addedAccessory.push(this.querySelector('.accessory-cards__id').textContent);
        

        arrSumAccessories.push(currentAccessoryPrice); //добавляем стоимость акс в массив
      }
    }

  }

  function insertAccessoriesInDpordown() { // Adding acc to dropdown
    let dropdownDrawer = dropdownContainer.querySelectorAll('.accessory-selected__drawer');
    const attachingAccessoriesContainer = dropdownContainer.querySelector('.accessory-selected__drawer-attaching');

    let lastIndex = addedAccessory.findIndex(item => !Array.isArray(item));
    if (lastIndex == -1) {
      lastIndex = addedAccessory.length;
    }
    let arrayAttachingAccessories = addedAccessory.slice(lastIndex);

    dropdownDrawer.forEach((item,i) => {
      let arrayAccessories = addedAccessory[i]; // подмассив акс
      let currentDrawer = dropdownDrawer[i]; // текущая полка

      if (arrayAccessories.length > 0) { // если акс добавлен
        let numberCurrentDrawers = String(i + 1); //номер текущей полки

        if (numberCurrentDrawers < 10) { // добавляем 0
          numberCurrentDrawers = '0' + numberCurrentDrawers;
        }

        let part1 = `
        <div class="accessory-selected__drawer-number d-flex align-items-center flex-shrink-0">
          Drawer ${numberCurrentDrawers}
        </div>
        <div class="accessory-selected__drawer-devider" style="background: url('`;

        let part2 = '';
        if (arrayAccessories.length == 1) {
          part2 = `img/icon/fig1.svg`;
        } else if (arrayAccessories.length == 2) {
          part2 = `img/icon/fig2.svg`;
        } else if (arrayAccessories.length == 3) {
          part2 = `img/icon/fig3.svg`;
        } else if (arrayAccessories.length == 4) {
          part2 = `img/icon/fig4.svg`;
        } else if (arrayAccessories.length == 5) {
          part2 = `img/icon/fig5.svg`;
        }

        const part3 = `') no-repeat center right /contain">
        </div>
        <div class="accessory-selected__drawer-items flex-shink-0">
        </div>
        `;
        
        currentDrawer.innerHTML = part1 + part2 + part3;

        let drawerItems = currentDrawer.querySelector('.accessory-selected__drawer-items');
        let currentDrawerItems = '';
        arrayAccessories.forEach((item,i) => { // item - id акс
          let currentAccessory = accessories.filter(elem => elem.id == item)[0];

          currentDrawerItems += `
            <div class="accessory-selected__data d-flex align-items-center justify-content-between" data-id="${currentAccessory.id}" data-number-drawer="${numberCurrentDrawers}">
              <div class="accessory-selected__data-name">
                <span>${currentAccessory.name}</span>
                <span class="d-sm-none">EVA ${currentAccessory.size}/3</span>
              </div>
              <div class="accessory-selected__data-contain d-flex justify-content-between">
                <div class="accessory-selected__data-size flex-shrink-1 d-none d-sm-block">
                  EVA ${currentAccessory.size}/3
                </div>
                <div class="accessory-selected__data-price flex-shrink-0">
                <span>${currentAccessory.price}</span>,00 EUR
                </div>
                <div class="accessory-selected__data-close d-flex justify-content-center align-items-center">
                  <img src="img/icon/x-icon.svg" alt="close">
                </div>
              </div>
            </div>
          `;
          drawerItems.innerHTML = currentDrawerItems;
        });

      } else {
        currentDrawer.innerHTML = '';
      }
      
    });

    // Added attaching acc

    if (arrayAttachingAccessories.length > 0 && !Array.isArray(arrayAttachingAccessories[0])) {

      attachingAccessoriesContainer.innerHTML = `
        <div class="accessory-selected__drawer-number d-flex align-items-start flex-shrink-0 pt-3">
          Attaching accessories
        </div>
        <div class="accessory-selected__drawer-items flex-shink-0">
        </div>
        `;

        let drawerAttachingItems = attachingAccessoriesContainer.querySelector('.accessory-selected__drawer-items');
        let currentAttachingItems = '';

        arrayAttachingAccessories.forEach((item,i) => { // item - id акс
          
          let currentAccessory = attachingAccessories.filter(elem => elem.id == item)[0];

          currentAttachingItems += `
            <div class="accessory-selected__data d-flex align-items-center justify-content-between" data-id="${currentAccessory.id}" data-number-drawer="none">
              <div class="accessory-selected__data-name">
                <span>${currentAccessory.name}</span>
                <span class="d-sm-none">EVA ${currentAccessory.size}/3</span>
              </div>
              <div class="accessory-selected__data-contain d-flex justify-content-between">
                <div class="accessory-selected__data-size flex-shrink-1 d-none d-sm-block">
                  EVA ${currentAccessory.size}/3
                </div>
                <div class="accessory-selected__data-price flex-shrink-0">
                <span>${currentAccessory.price}</span>,00 EUR
                </div>
                <div class="accessory-selected__data-close d-flex justify-content-center align-items-center">
                  <img src="img/icon/x-icon.svg" alt="close">
                </div>
              </div>
            </div>
          `;

          drawerAttachingItems.innerHTML = currentAttachingItems;
        });

    } else {
      if(attachingAccessoriesContainer) {
        attachingAccessoriesContainer.innerHTML = '';
      }
    }
  }

  function deleteDropdownAccessory() {  // Delete acc from all
    let currentIdAccessory = this.getAttribute('data-id'); //id удаляемого акс
    let currentNumberDrawer = this.getAttribute('data-number-drawer'); //номер текущей полки
    let currentAccessoryPrice = this.querySelector('.accessory-selected__data-price span').textContent;

    if (currentNumberDrawer != 'none') {

      let elementsOnDrawer = addedAccessory[currentNumberDrawer - 1]; //акс в подмассиве
      // удаляем элемент из массива ----------------------
      for (let i = 0; i < addedAccessory.length; i++) {
        const subarray = addedAccessory[i];
        const indexToRemove = subarray.indexOf(currentIdAccessory);
    
        if (indexToRemove !== -1) {
            subarray.splice(indexToRemove, 1); // Удаляем элемент из подмассива
            addedAccessorySize[i].splice(indexToRemove, 1); //удаляем из подмассива размер
        }
      }
          // убираем пустую полку --------------------------
      if (elementsOnDrawer.length == 0) {
        dropdownContainer.querySelectorAll('.accessory-selected__drawer').forEach((item,i) => {
          if (i == currentNumberDrawer - 1) {
            item.innerHTML = '';
          }
        });
      }
          // убираем отметку взят с акс -----------------------
      accessoriesContainer.querySelectorAll('.accessory-cards__item').forEach(item => {
        if (item.querySelector('.accessory-cards__id').textContent == currentIdAccessory) {
          item.classList.remove('accessory-cards__item_choose');
        }
      });

      arrSumAccessories.splice([arrSumAccessories.indexOf(currentAccessoryPrice)],1); //удаляем стоимость акс из массива
      this.remove(); // удаляем элемент из dropdown

      // перерисовываем скобки
      const currentDrawerDevider = event.target.querySelectorAll('.accessory-selected__drawer')[currentNumberDrawer-1].querySelector('.accessory-selected__drawer-devider');

      if (elementsOnDrawer.length == 1) {
        currentDrawerDevider.style.background = "url('img/icon/fig1.svg') no-repeat center right /contain";
      } else if (elementsOnDrawer.length == 2) {
        currentDrawerDevider.style.background = "url('img/icon/fig2.svg') no-repeat center right /contain";
      } else if (elementsOnDrawer.length == 3) {
        currentDrawerDevider.style.background = "url('img/icon/fig3.svg') no-repeat center right /contain";
      } else if (elementsOnDrawer.length == 4) {
        currentDrawerDevider.style.background = "url('img/icon/fig.svg') no-repeat center right /contain";
      } else if (elementsOnDrawer.length == 5) {
        currentDrawerDevider.style.background = "url('img/icon/fig5.svg') no-repeat center right /contain";
      }

    } else {
      let dropdownDrawer = dropdownContainer.querySelectorAll('.accessory-selected__drawer');
      let elementsOnDrawer = addedAccessory.slice(dropdownDrawer.length);
      const attachingAccessoriesContainerInDropdown = dropdownContainer.querySelector('.accessory-selected__drawer-attaching');
      const attachingAccessoriesContainer = document.querySelector('.choose-accessories__cards-attaching');
      
      // удаляем элемент из массива ----------------------
      addedAccessory.forEach((item,i) => {
        if(item == currentIdAccessory) {
          const indexToRemove = addedAccessory.indexOf(currentIdAccessory);
          addedAccessory.splice(indexToRemove, 1);
        }
      });

      this.remove(); // удаляем элемент из dropdown

      // удаляем пустой контейнер
      if(addedAccessory.length == quantityDrawers) {
        attachingAccessoriesContainerInDropdown.innerHTML = '';
      }
      
      // убираем отметку взят с акс -----------------------
      attachingAccessoriesContainer.querySelectorAll('.accessory-cards__item').forEach(item => {
        if (item.querySelector('.accessory-cards__id').textContent == currentIdAccessory) {
          item.classList.remove('accessory-cards__item_choose');
        }
      });

      arrSumAccessories.splice([arrSumAccessories.indexOf(currentAccessoryPrice)],1); //удаляем стоимость акс из массива

    }

    // console.log(event.target)
    
  }

  function changeDrawersTabsImage() { // Changing drawers tabs view
    let tabsDrawersItem = drawersContainer.querySelectorAll('.nav-link');
    addedAccessorySize.forEach((item,i) => {
      if (Array.isArray(item)) {

        let lengthItems = item.reduce((acc,cur) => parseInt(acc) + parseInt(cur), 0);
        let tabsDrawerImg = tabsDrawersItem[i].querySelector('.nav-img');

          let itemClass = '';

          lengthItems == 1 ? itemClass = 'nav-img-1' :
          lengthItems == 2 ? itemClass = 'nav-img-2' :
          lengthItems == 3 ? itemClass = 'nav-img-3' :
          lengthItems == 4 ? itemClass = 'nav-img-4' :
          lengthItems == 5 ? itemClass = 'nav-img-5' : itemClass = 'nav-img-0';
        
          const classesToRemove = [...tabsDrawerImg.classList].filter(className => className.startsWith('nav-img-'));

          classesToRemove.forEach(className => {
            tabsDrawerImg.classList.remove(className);
          });

          tabsDrawerImg.classList.add(itemClass);

      };
    });
  }

  function sumTotal() {
    let sumTotalDropdown = document.querySelector('.total-selected__price span');
    let sumTotalPrice = document.querySelector('.choose-accessories__drawers-price-summ span');
    let priceBox = parseInt(currentBoxData.price);
    let sumInsertedAccessories = arrSumAccessories.reduce((acc, current) => parseInt(acc) + parseInt(current), 0);
    

    let sumTotal = priceBox + sumInsertedAccessories;

    sumTotalDropdown.textContent = sumTotal;
    sumTotalPrice.textContent = sumTotal;

    // console.log(addedAccessory);
    // console.log(addedAccessorySize);
  }

  function quantityAddedAccessory() {
    const resultTotalContainer = document.querySelector('.result__total-item span');
    const resultTotalContainerHeader = document.querySelector('.header__total-item span');
    const resultTotalContainerDrawers = document.querySelector('.choose-accessories__drawers-price-quantity span');
    const resultMobileContainer = document.querySelector('.choose-accessories__filter-top span');

    const totalCountAccessories = countTotalElements(addedAccessory);

    resultTotalContainer.textContent = totalCountAccessories + 1;
    resultTotalContainerHeader.textContent = totalCountAccessories + 1;
    resultTotalContainerDrawers.textContent = totalCountAccessories + 1;
    resultMobileContainer.textContent = totalCountAccessories + 1;

    // Преобразование массива в строку JSON
    const arrayStringAccessories = JSON.stringify(addedAccessory);
    const arrayStringSize = JSON.stringify(addedAccessorySize);
    const arrayStringPrice = JSON.stringify(arrSumAccessories);

    // Установка куки с сроком действия 1 день
    const currentDate = new Date();
    const expirationDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    document.cookie = `addedAccessories=${arrayStringAccessories}; expires=${expirationDate.toUTCString()}; path=/;`;
    document.cookie = `addedAccessoriesSizes=${arrayStringSize}; expires=${expirationDate.toUTCString()}; path=/;`;
    document.cookie = `addedAccessoriesPrice=${arrayStringPrice}; expires=${expirationDate.toUTCString()}; path=/;`;

  }

  function showAccesoriesOnDrawers() { // Show added accessories on the drawer
    const drawers = drawersContainer.querySelectorAll('.tab-pane');
    const drawersTabs = drawersContainer.querySelectorAll('.nav-link');

    drawers.forEach((item,index) => { // перебираем полки
      const currentDrawerTabLength = drawersTabs[index].querySelectorAll('.nav-img__item').length; // длинна текущей полки

      let numberDrawer = item.getAttribute('id').split('-')[2]; // номен полки
      const drawerContent = item.querySelector('.choose-accessories__drawers-content'); //текущий контейнер для добавления акс на полку
      let addedAccessoriesOnDrawer = addedAccessory[index]; //акс добавленные на полку
      let pointTop, stepPoint, stepPointMax;
      window.innerWidth > 550 ? pointTop = 47 : pointTop = 37; // положение верхнего акс
      window.innerWidth > 550 ? stepPoint = 134 : stepPoint = 105; // смещение вниз следующего акс
      window.innerWidth > 550 ? stepPointMax = 186 : stepPointMax = 146;

      if (addedAccessoriesOnDrawer.length == 0) {
        drawerContent.innerHTML = '';
      } else {

        let imageOnDrawer = '';
        addedAccessoriesOnDrawer.forEach((acc,i) => { //перебираем акс
          const currentAccessory = accessories.filter(elem => elem.id == acc)[0]; // обьект текущего акс
          const currentAccessorySize = currentAccessory.size; // размер текущего акс
          const currentAccessoryimage = currentAccessory.image_for_drawer; // изображение для вставки текущего акс
          const currentAccessoryID = acc; // ID текущего акс

          if (currentDrawerTabLength == 4) { 
          
            if (currentAccessorySize == 3) { // 4 полка акс 3
              window.innerWidth > 550 ? pointTop = 233 : pointTop = 183;
            } 

            if(currentAccessorySize == 2) { // 4 полка акс 2
              if(i == 0 || i == 1) {
                window.innerWidth > 550 ? pointTop = 233 : pointTop = 183;
              }
              if (i == 2){
                window.innerWidth > 550 ? pointTop = 367 : pointTop = 183;
              }
            } 

            if(currentAccessorySize == 1 && addedAccessorySize[index].includes('3')) { // добавляем 1 при наличии 3
              window.innerWidth > 550 ? pointTop = 47 : pointTop = 37;
            }

            if(currentAccessorySize == 1 && addedAccessorySize[index].includes('2')) { // добавляем 1 при наличии 3

              window.innerWidth > 550 ? pointTop = 47 : pointTop = 37;
            }

            if(currentAccessorySize == 1 && addedAccessorySize[index].includes('2') && addedAccessorySize[index].includes('1')) { // добавляем 1 при наличии 2
              if (i==1 && addedAccessoriesOnDrawer.length == 3 && accessories.filter(item => item.id == addedAccessoriesOnDrawer[2])[0].size == 2) {
                window.innerWidth > 550 ? pointTop = 233 : pointTop = 393;
              }
              
              if (i==2) {
                window.innerWidth > 550 ? pointTop = 501 : pointTop = 393;
              }
            }

          }

          imageOnDrawer += `<div class="drawers-content__image-size${currentAccessorySize}" style="top:${pointTop}px" data-id="${currentAccessoryID}"><img src="${currentAccessoryimage}" alt="Image" ><div class="drawers-content__delete" data-id="${currentAccessoryID}"></div></div>`; // готовое изображение для вставки


          if((currentDrawerTabLength == 3 || currentDrawerTabLength == 5)) {

              currentAccessorySize == 1 ? pointTop += stepPoint :
              currentAccessorySize == 2 ? pointTop += stepPoint * 2 : pointTop += stepPoint * 3;

          } else if (currentDrawerTabLength == 4) {

            if (currentAccessorySize == 1 && !addedAccessorySize[index].includes('2') && !addedAccessorySize[index].includes('3')) { // 4 полка все 1
              if(i == 0) {
                pointTop += stepPointMax;
              } else {
                pointTop += stepPoint;
              }
            }

            

          }


        });

        drawerContent.innerHTML = imageOnDrawer;
      }
      

    });

    addedAccessory.forEach((array,i) => {
      if (array.length == 0) {
        drawersContainer.querySelectorAll('.tab-pane')[i].querySelector('p').classList.add('not-active');
      } else {
        drawersContainer.querySelectorAll('.tab-pane')[i].querySelector('p').classList.remove('not-active');
      }
    });
  }

  function hideAccessories() { // Функционал заполнения полки
    

    let currentDrawer = drawersContainer.querySelector('.active').getAttribute('id').split('-')[2]; //номер полки
    let currentDrawerLength = currentBoxData.drawers[currentDrawer-1]; //длинна выбранной полки

    let currentAccessorySizeOnDrawer = addedAccessorySize[currentDrawer-1].reduce((acc,current) => parseInt(acc)+parseInt(current), 0); // заполняем полку

    if(currentDrawerLength - currentAccessorySizeOnDrawer == 2) {
      if (currentDrawerLength == 4 && addedAccessorySize[currentDrawer-1].length == 1) {

        accessoriesContainer.querySelectorAll('.accessory-cards__item').forEach(item => {
          if(item.querySelector('.accessory-cards__size .accessory-cards__size-img').getAttribute('data-size') >= 2 && !item.classList.contains('accessory-cards__item_choose')) {
            item.classList.add('not-active');
          } else {
            item.classList.remove('not-active');
          }
        });
      } else {
        accessoriesContainer.querySelectorAll('.accessory-cards__item').forEach(item => {
          if(item.querySelector('.accessory-cards__size .accessory-cards__size-img').getAttribute('data-size') == 3 && !item.classList.contains('accessory-cards__item_choose')) {
            item.classList.add('not-active');
          } else {
            item.classList.remove('not-active');
          }
        });
      }

    } else if(currentDrawerLength - currentAccessorySizeOnDrawer == 1) {
      accessoriesContainer.querySelectorAll('.accessory-cards__item').forEach(item => {
        if(item.querySelector('.accessory-cards__size .accessory-cards__size-img').getAttribute('data-size') >= 2 && !item.classList.contains('accessory-cards__item_choose')) {
          item.classList.add('not-active');
        } else {
          item.classList.remove('not-active');
        }
      });
    } else if(currentDrawerLength - currentAccessorySizeOnDrawer == 0) {
      accessoriesContainer.querySelectorAll('.accessory-cards__item').forEach(item => {
        if(item.querySelector('.accessory-cards__size .accessory-cards__size-img').getAttribute('data-size') >= 1 && !item.classList.contains('accessory-cards__item_choose')) {
          item.classList.add('not-active');
        } else {
          item.classList.remove('not-active');
        }
      });
    } else {
      accessoriesContainer.querySelectorAll('.accessory-cards__item').forEach(item => {
        if(item.classList.contains('not-active')) {
          item.classList.remove('not-active');
        }
      })
    }

    accessoriesContainer.querySelectorAll('.accessory-cards__item_choose').forEach(item => {
      let allClassAccessory = Array.from(item.classList);
      const regExp = /^accessory-cards__item_choose-\d+$/;
      let chooseDrawerAccessory = allClassAccessory.filter(item => regExp.test(item))[0].split('-')[2];

      if(currentDrawer != chooseDrawerAccessory) {
        item.classList.add('not-active');
      } else if(currentDrawer == chooseDrawerAccessory) {
        item.classList.remove('not-active');
      }
    });
    
  }

  itemAccessory.forEach(item => {

    item.addEventListener('click', event => {

      addAccessories.call(item);
      insertAccessoriesInDpordown();
      changeDrawersTabsImage();
      sumTotal();
      quantityAddedAccessory();
      showAccesoriesOnDrawers();
      hideAccessories();

      dropdownContainer.querySelectorAll('.accessory-selected__data').forEach(item => {
        item.querySelector('.accessory-selected__data-close').addEventListener('click', event => {
          
          deleteDropdownAccessory.call(item);
          changeDrawersTabsImage();
          sumTotal();
          quantityAddedAccessory();
          showAccesoriesOnDrawers();
          hideAccessories();
          
        });
      });
    });
    
  });

  dropdownContainer.querySelectorAll('.accessory-selected__data').forEach(item => {
    item.querySelector('.accessory-selected__data-close').addEventListener('click', event => {
      
      deleteDropdownAccessory.call(item);
      changeDrawersTabsImage();
      sumTotal();
      quantityAddedAccessory();
      showAccesoriesOnDrawers();
      hideAccessories();
      
    });
  });

  drawersContainer.querySelectorAll('.tab-pane').forEach(item => {

    item.querySelector('p').addEventListener('click', event => {

      if (item.classList.contains('active')) { // удаляем класс с удаленных элементов
        let numberTab = item.getAttribute('id').split('-')[2]; // Номер полки
        let currentAccessoriesID = addedAccessory[numberTab-1]; //массив удаленных акс
        let allAccessories = accessoriesContainer.querySelectorAll('.accessory-cards__item');

        allAccessories.forEach(item => {
          let itemID = item.querySelector('.accessory-cards__id').textContent;

          currentAccessoriesID.forEach(id => {
            if(id == itemID) {
              item.classList.remove('accessory-cards__item_choose');
            }
          });

        });

        currentAccessoriesID.forEach(item => { //удаляем сумму акс

          accessories.forEach(acc => {
            if(item == acc.id) {
              let accessoryPrice = acc.price;

              arrSumAccessories.forEach((sum,i) => {
                if (sum == accessoryPrice) {
                  arrSumAccessories.splice(i,1);
                  
                }
              })
            }
          });

          
        });
        

        dropdownContainer.querySelectorAll('.accessory-selected__drawer')[numberTab-1].innerHTML = ''; //удаляем полку с dropdown

        addedAccessory[numberTab-1].splice(0,addedAccessory[numberTab-1].length); //очищаем подмассив акс
        addedAccessorySize[numberTab-1].splice(0,addedAccessorySize[numberTab-1].length); //очищаем подмассив размера акс

        
      }

      changeDrawersTabsImage();
      sumTotal();
      quantityAddedAccessory();
      showAccesoriesOnDrawers();
      hideAccessories();
    });

  });


  const currentDrawer = drawersContainer.querySelectorAll('.tab-pane'); // текущая полка

  currentDrawer.forEach((drawer, index) => {

    drawer.addEventListener('click', event => {
      if(event.target.classList.contains('drawers-content__delete')) {
        
        let allAccessories = accessoriesContainer.querySelectorAll('.accessory-cards__item'); // все акс
        let currentAccessoriesID = event.target.getAttribute('data-id'); // ID удаляемого акс
        let numberTab = drawer.getAttribute('id').split('-')[2]; // Номер полки

        allAccessories.forEach(item => { // удаляем класс выбран
          let itemID = item.querySelector('.accessory-cards__id').textContent;
            if(currentAccessoriesID == itemID) {
              item.classList.remove('accessory-cards__item_choose');
            }
        });

        accessories.forEach(acc => { // удаляем стоимость акс
          if(currentAccessoriesID == acc.id) {
            let accessoryPrice = acc.price;

            arrSumAccessories.forEach((sum,i) => {
              if (sum == accessoryPrice) {
                arrSumAccessories.splice(i,1);
              }
            })
          }
        });

        addedAccessory[numberTab-1].forEach((id, i) => { // удаляем акс из подмассивов id и size
          if (id == currentAccessoriesID) {
            addedAccessory[numberTab-1].splice(i,1);
            addedAccessorySize[numberTab-1].splice(i,1);
          }
        });

        dropdownContainer.querySelectorAll('.accessory-selected__drawer').forEach((drawer, i) => {
          const currentDrawerDevider = drawer.querySelector('.accessory-selected__drawer-devider');

          if ( i == numberTab -1 ) {
            drawer.querySelectorAll('.accessory-selected__data').forEach(item => {
              if(item.getAttribute('data-id') == currentAccessoriesID) {
                item.remove();
              }
            });
            drawer.querySelectorAll('.accessory-selected__data').length == 0 ? drawer.innerHTML = '' : '';
            drawer.querySelectorAll('.accessory-selected__data').length == 1 ? currentDrawerDevider.style.background = "url('img/icon/fig1.svg') no-repeat center right /contain" :
            drawer.querySelectorAll('.accessory-selected__data').length == 2 ? currentDrawerDevider.style.background = "url('img/icon/fig2.svg') no-repeat center right /contain" :
            drawer.querySelectorAll('.accessory-selected__data').length == 3 ? currentDrawerDevider.style.background = "url('img/icon/fig3.svg') no-repeat center right /contain" :
            drawer.querySelectorAll('.accessory-selected__data').length == 4 ? currentDrawerDevider.style.background = "url('img/icon/fig4.svg') no-repeat center right /contain" :
            drawer.querySelectorAll('.accessory-selected__data').length == 5 ? currentDrawerDevider.style.background = "url('img/icon/fig5.svg') no-repeat center right /contain" : '';
          }
        });

        changeDrawersTabsImage();
        sumTotal();
        quantityAddedAccessory();
        showAccesoriesOnDrawers();
        hideAccessories();

      }
    });
    
  });

  drawersContainer.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', () => {

      hideAccessories();
      
    });
  });

  document.querySelector('.nav-list_bottom').addEventListener('click', () => {
    hideAccessories();
  });

  document.querySelector('.nav-list_top').addEventListener('click', () => {
    hideAccessories();
  });

  const tabsSelect = document.getElementById('mobileTabsSelect');
  tabsSelect.addEventListener('change', function () {
    hideAccessories();
  });

});