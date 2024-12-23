document.addEventListener("DOMContentLoaded", function () {
  var url = 'http://phpstack-846535-2917522.cloudwaysapps.com/scripts/data.php'; // Укажите путь к вашему PHP-файлу

  fetch(url)
      .then(function (response) {
          if (!response.ok) {
              throw new Error('Ошибка при загрузке данных: ' + response.status);
          }
          return response.text();
      })
      .then(function (dataContent) {
          // Теперь в переменной dataContent содержится содержимое файла data.php
          console.log(dataContent);
      })
      .catch(function (error) {
          console.error('Ошибка при загрузке данных: ', error);
      });
});

const boxes = [
  {
    id: 9133,
    name: 'BATO Tools cabinet 4 drawers mini without wheels. Blue.',
    image: 'img/box1.png',
    color: ['blue', '#006ABA'],
    wheels: false,
    size: [400, 690, 465],
    price: 616,
    accessories: [],
    drawers: [3,3,3,3],
    numberDrawers: 4,
    hasMediumLargeDrawer: false
  },
  {
    id: 9123,
    name: 'BATO Tools cabinet 4 drawers mini without wheels. Blue.',
    image: 'img/box1.png',
    color: ['blue', '#006ABA'],
    wheels: false,
    size: [400, 690, 465],
    price: 616,
    accessories: [],
    drawers: [3,3,3,3],
    numberDrawers: 4,
    hasMediumLargeDrawer: false
  },
  {
    id: 9134,
    name: 'BATO Tools cabinet 4 drawers mini without wheels. Blue.',
    image: 'img/box1.png',
    color: ['blue', '#006ABA'],
    wheels: true,
    size: [545, 690, 465],
    price: 885,
    accessories: [],
    drawers: [3,3,3,3],
    numberDrawers: 4,
    hasMediumLargeDrawer: false
  },
  {
    id: 9107,
    name: 'BATO Tools cabinet 7 drawers. 5 small, 1 withium, 1 large. Black.',
    image: 'img/box1.png',
    color: ['black', '#000'],
    wheels: true,
    size: [],
    price: 804,
    accessories: [],
    drawers: [3,3,3,3,3,3,3],
    numberDrawers: 7,
    hasMediumLargeDrawer: true
  },
  {
    id: 9112,
    name: 'BATO Tool trolley 7 drawers and cabinet. 5 small, 1 medium, 1 large. Red.',
    image: 'img/box1.png',
    color: ['red','#F04438'],
    wheels: true,
    size: [],
    price: 1153,
    accessories: [9171,9172,9173,9185],
    drawers: [3,3,3,3,3,3,3],
    numberDrawers: 7,
    hasMediumLargeDrawer: true
  },
  {
    id: 9114,
    name: 'BATO Tool trolley 7 drawers and cabinet. 5 small, 1 medium, 1 large. Grey.',
    image: 'img/box1.png',
    color: ['grey','#667085'],
    wheels: true,
    size: [],
    price: 1153,
    accessories: [9171,9172,9173,9185],
    drawers: [3,3,3,3,3,3,3],
    numberDrawers: 7,
    hasMediumLargeDrawer: true
  },
  {
    id: 9122,
    name: 'BATO Tool trolley 7 drawers and cabinet. 5 small, 1 medium, 1 large. Black.',
    image: 'img/box1.png',
    color: ['black', '#000'],
    wheels: true,
    size: [],
    price: 1153,
    accessories: [9171,9172,9173,9185],
    drawers: [3,3,3,3,3,3,3],
    numberDrawers: 7,
    hasMediumLargeDrawer: true
  },
  {
    id: 9132,
    name: 'BATO Tool trolley 7 drawers and cabinet. 5 small, 1 medium, 1 large. Blue.',
    image: 'img/box1.png',
    color: ['blue', '#006ABA'],
    wheels: true,
    size: [],
    price: 1153,
    accessories: [9171,9172,9173,9185],
    drawers: [3,3,3,3,3,3,3],
    numberDrawers: 7,
    hasMediumLargeDrawer: true
  },
  {
    id: 9137,
    name: 'BATO Tools cabinet 7 drawers. 5 small, 1 medium, 1 large. Blue.',
    image: 'img/box1.png',
    color: ['blue', '#006ABA'],
    wheels: true,
    size: [958, 766, 465],
    price: 1153,
    accessories: [9163,9171,9172,9173,9185,9190],
    drawers: [3,3,3,3,3,3,3],
    numberDrawers: 7,
    hasMediumLargeDrawer: true
  },
  {
    id: 9124,
    name: 'BATO Tools cabinet 7 drawers. 5 small, 1 medium, 1 large. Black.',
    image: 'img/box1.png',
    color: ['black', '#000'],
    wheels: true,
    size: [958, 766, 465],
    price: 1153,
    accessories: [9163,9171,9172,9173,9185,9190],
    drawers: [3,3,3,3,3,3,3],
    numberDrawers: 7,
    hasMediumLargeDrawer: true
  },
  {
    id: 9141,
    name: 'BATO Tools cabinet 8 drawers.',
    image: 'img/box1.png',
    color: ['blue', '#006ABA'],
    wheels: true,
    size: [],
    price: 1206,
    accessories: [9163,9171,9172,9173,9185,9190],
    drawers: [3,3,3,3,3,3,3,3],
    numberDrawers: 8,
    hasMediumLargeDrawer: true
  },
  {
    id: 9140,
    name: 'BATO Tools cabinet 8 drawers. Black',
    image: 'img/box1.png',
    color: ['black', '#000'],
    wheels: true,
    size: [],
    price: 1206,
    accessories: [9163,9171,9172,9173,9185,9190],
    drawers: [3,3,3,3,3,3,3,3],
    numberDrawers: 8,
    hasMediumLargeDrawer: true
  },
  {
    id: 9142,
    name: 'BATO Tools cabinet 10 drawers.',
    image: 'img/box1.png',
    color: ['blue', '#006ABA'],
    wheels: true,
    size: [],
    price: 1287,
    accessories: [9163,9171,9172,9173,9185,9190],
    drawers: [3,3,3,3,3,3,3,3,3,3],
    numberDrawers: 10,
    hasMediumLargeDrawer: false
  },
  {
    id: 9138,
    name: 'BATO Tools cabinet combi 11 drawers. 9 small, 1 medium, 1 large. Blue',
    image: 'img/box1.png',
    color: ['blue', '#006ABA'],
    wheels: true,
    size: [1358, 766, 465],
    price: 1742,
    accessories: [9171,9172,9173,9185],
    drawers: [3,3,3,3,3,3,3,3,3,3,3],
    numberDrawers: 11,
    hasMediumLargeDrawer: true
  },
  {
    id: 9125,
    name: 'BATO Tools cabinet 11 drawers combi. 9 small, 1 medium 1 large. Black.',
    image: 'img/box1.png',
    color: ['black', '#000'],
    wheels: true,
    size: [1358, 766, 465],
    price: 1677,
    accessories: [9171,9172,9173,9185],
    drawers: [3,3,3,3,3,3,3,3,3,3,3],
    numberDrawers: 11,
    hasMediumLargeDrawer: true
  },
  {
    id: 9147,
    name: 'BATO Tools cabinet XXL 7 drawers. 5 small, 1 medium, 1 large and cabinet. Blue.',
    image: 'img/box1.png',
    color: ['blue', '#006ABA'],
    wheels: true,
    size: [1000, 1130, 570],
    price: 1877,
    accessories: [9161,9171,9172,9173,9185,9190],
    drawers: [3,3,3,3,3,3,3],
    numberDrawers: 7,
    hasMediumLargeDrawer: true
  },
  {
    id: 9153,
    name: 'BATO Tools cabinet XXL 7 drawers & cabinet. Black',
    image: 'img/box1.png',
    color: ['black', '#000'],
    wheels: true,
    size: [1000, 1130, 570],
    price: 1877,
    accessories: [9161],
    drawers: [3,3,3,3,3,3,3],
    numberDrawers: 7,
    hasMediumLargeDrawer: true
  },
  {
    id: 9145,
    name: 'BATO Tools cabinet XXL 14 drawers.',
    image: 'img/box1.png',
    color: ['blue', '#006ABA'],
    wheels: true,
    size: [1000, 1130, 570],
    price: 2480,
    accessories: [9161,9171,9172,9173,9185,9190],
    drawers: [4,4,4,4,4,4,4],
    numberDrawers: 14,
    hasMediumLargeDrawer: true
  },
  {
    id: 9146,
    name: 'BATO Tools cabinet XXL 14 drawers. Black',
    image: 'img/box1.png',
    color: ['black', '#000'],
    wheels: true,
    size: [1000, 1130, 570],
    price: 2480,
    accessories: [9161],
    drawers: [4,4,4,4,4,4,4],
    numberDrawers: 14,
    hasMediumLargeDrawer: true
  },
  {
    id: 9148,
    name: 'BATO Tools cabinet XXL combi 11 drawers. 9 small, 1 medium, 1 large and cabinet.',
    image: 'img/box1.png',
    color: ['blue', '#006ABA'],
    wheels: true,
    size: [1000, 1130, 570],
    price: 2413,
    accessories: [9161,9163,9171,9172,9173,9185,9190],
    drawers: [3,3,3,3,3,3,3,3,3,3,3],
    numberDrawers: 11,
    hasMediumLargeDrawer: true
  },
  {
    id: 9150,
    name: 'BATO Tools cabinet XXL 16 drawers.',
    image: 'img/box1.png',
    color: ['blue', '#006ABA'],
    wheels: true,
    size: [],
    price: 2400,
    accessories: [9161,9171,9172,9173,9185,9190],
    drawers: [4,4,4,4,4,4,4,4],
    numberDrawers: 16,
    hasMediumLargeDrawer: true
  },
  {
    id: 9152,
    name: 'BATO Tools cabinet XXL 20 drawers.',
    image: 'img/box1.png',
    color: ['blue', '#006ABA'],
    wheels: true,
    size: [],
    price: 2949,
    accessories: [9161,9171,9172,9173,9185,9190],
    drawers: [4,4,4,4,4,4,4,4,4,4],
    numberDrawers: 20,
    hasMediumLargeDrawer: false
  },
  {
    id: 9157,
    name: 'BATO Tool trolley XXL-Premium. 9 drawers and wood table top.',
    image: 'img/box1.png',
    color: ['blue', '#006ABA'],
    wheels: true,
    size: [],
    price: 2413,
    accessories: [9161,9171,9172,9173,9185,9190],
    drawers: [5,5,5,5,5,4,4],
    numberDrawers: 9,
    hasMediumLargeDrawer: true
  },
];
const accessories = [
  {
    id: 8900,
    name: 'BATO Socket wrench set 3/4" 6 edge 22-50mm.',
    image: 'img/d-8919.jpg',
    image_for_drawer: 'img/accessory-size-3.jpg',
    size: 3,
    price: 289
  },
  {
    id: 8901,
    name: 'BATO Socket wrench set 1/2" 6 edge 10-36mm.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 121
  },
  {
    id: 8902,
    name: 'BATO Socket wrench set 3/8" 6 edge 6-24mm short. 6-19mm long.',
    image: 'img/d-8910.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 114
  },
  {
    id: 8903,
    name: 'BATO Socket wrench set 1/4" 6 edge 4-14mm short. 6-14mm long.',
    image: 'img/d-8911.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 100
  },
  {
    id: 8904,
    name: 'BATO Long socket set 1/2" 6 edge 10-24mm. Spark plug socket. 14-16-18-21mm. ',
    image: 'img/d-8910.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 111
  },
  {
    id: 8969,
    name: 'BATO Ratchet set MicroHead 1/4-3/8-1/2".',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 119
  },
  {
    id: 89022,
    name: 'BATO Socket set 1/4" and 3/8" 12kt. short/long.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 111
  },
  {
    id: 8928,
    name: 'BATO Long socket set 1/2" 12 edge. 8-36mm. short. 10-24mm. long.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 147
  },
  {
    id: 8905,
    name: 'BATO Bit socket set 1/2" 6 edge 5-19mm, Torx 20-60, XZN M5-M18. ',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 121
  },
  {
    id: 8906,
    name: 'BATO Bit socket set 1/2" 6 edge 5-19mm long. Torx 20-60 long.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 145
  },
  {
    id: 8927,
    name: 'BATO Bit socket set 3/8" 6 edge, Torx, Ribe, short/long.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 268
  },
  {
    id: 8947,
    name: 'BATO Combination spanner set 8-19mm.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 74
  },
  {
    id: 8908,
    name: 'BATO Combination spanner set 6-24mm.',
    image: 'img/d-8940.jpg',
    image_for_drawer: 'img/accessory-size-2.jpg',
    size: 2,
    price: 127
  },
  {
    id: 89088,
    name: 'BATO Combination spanner set 6-24mm.',
    image: 'img/d-8940.jpg',
    image_for_drawer: 'img/accessory-size-2.jpg',
    size: 2,
    price: 253
  },
  {
    id: 8907,
    name: 'BATO Combination spanner set 6-36mm.',
    image: 'img/d-8919.jpg',
    image_for_drawer: 'img/accessory-size-3.jpg',
    size: 3,
    price: 268
  },
  {
    id: 8909,
    name: 'BATO Double joint spanner set 8-19mm.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 87
  },
  {
    id: 8965,
    name: 'BATO Double joint spanner set 20-32mm.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 159
  },
  {
    id: 8966,
    name: 'BATO Double joint spanner set 6Kt. Hex 2-14mm. ',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 94
  },
  {
    id: 8967,
    name: 'BATO Double joint spanner set Torx 15-60.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 94
  },
  {
    id: 8910,
    name: 'BATO Ringratschet spanner set 8-19mm.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 188
  },
  {
    id: 89101,
    name: 'BATO Ringratchet wrench set 8-32mm.',
    image: 'img/d-8919.jpg',
    image_for_drawer: 'img/accessory-size-3.jpg',
    size: 3,
    price: 478
  },
  {
    id: 8964,
    name: 'BATO Ringratschet spanner set Flex 8-19mm.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 278
  },
  {
    id: 8911,
    name: 'BATO Punch socket set 1/2" 10-24mm.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 121
  },
  {
    id: 8970,
    name: 'BATO Punch socket set 1/2" 10-38mm.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 201
  },
  {
    id: 8971,
    name: 'BATO Punch socket set 1/2" 10-38mm.',
    image: 'img/d-8940.jpg',
    image_for_drawer: 'img/accessory-size-2.jpg',
    size: 2,
    price: 322
  },
  {
    id: 8924,
    name: 'BATO Strenght bit socket set 1/2" 6 edge 5-19mm. Torx 30-80.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 134
  },
  {
    id: 8938,
    name: 'BATO Cable clamp plier set.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 174
  },
  {
    id: 8935,
    name: 'BATO Plier/screwdriver mini.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 130
  },
  {
    id: 8912,
    name: 'BATO Plier set EVA 1/3.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 121
  },
  {
    id: 89120,
    name: 'BATO Plier set. Eva 2/3.',
    image: 'img/d-8940.jpg',
    image_for_drawer: 'img/accessory-size-2.jpg',
    size: 2,
    price: 311
  },
  {
    id: 8939,
    name: 'BATO VDE 1000V Plier set. ',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 159
  },
  {
    id: 8913,
    name: 'BATO Lockring plier set straight.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 104
  },
  {
    id: 8914,
    name: 'BATO Lockring plier set 90gr.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 104
  },
  {
    id: 8936,
    name: 'BATO Lockring plier set punch point, straight outer/inner.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 214
  },
  {
    id: 8937,
    name: 'BATO Lockring plier set punch 90gr. outer/inner.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 214
  },
  {
    id: 8949,
    name: 'BATO Loosen tools/reclaim/clips set 7 parts.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 107
  },
  {
    id: 8950,
    name: 'BATO Screwdriver set MEGA.',
    image: 'img/d-8919.jpg',
    image_for_drawer: 'img/accessory-size-3.jpg',
    size: 3,
    price: 268
  },
  {
    id: 8960,
    name: 'BATO Screwdriver set MEGA with impact.',
    image: 'img/d-8919.jpg',
    image_for_drawer: 'img/accessory-size-3.jpg',
    size: 3,
    price: 284
  },
  {
    id: 8952,
    name: 'BATO Screwdriver set slot/Ph.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 62
  },
  {
    id: 8955,
    name: 'BATO Srewdriver set slot/PZ.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 58
  },
  {
    id: 8954,
    name: 'BATO Screwdriver set slot/Ph impact.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 74
  },
  {
    id: 8953,
    name: 'BATO Screwdriver set Torx 10-40.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 67
  },
  {
    id: 8962,
    name: 'BATO Hexagon screwdriver set 5-13mm.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 79
  },
  {
    id: 8961,
    name: 'BATO 6 edge screwdriver with ball. 2,0-10mm.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 79
  },
  {
    id: 8963,
    name: 'BATO VDE 1000V Screw driver set slot/Ph/Pz.',
    image: 'img/d-8940.jpg',
    image_for_drawer: 'img/accessory-size-2.jpg',
    size: 2,
    price: 159
  },
  {
    id: 8918,
    name: 'BATO Tools set, 2 x Weld-pliers, 2 x screwspanner. ',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 103
  },
  {
    id: 89181,
    name: 'BATO Universal locking plier set.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 94
  },
  {
    id: 8931,
    name: 'BATO Shifting spanner set 4-12".',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 127
  },
  {
    id: 8968,
    name: 'BATO Hammer set with chisel and drifts',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 111
  },
  {
    id: 8919,
    name: 'BATO Tools set combi. EVA 1/1.',
    image: 'img/d-8919.jpg',
    image_for_drawer: 'img/accessory-size-3.jpg',
    size: 3,
    price: 275
  },
  {
    id: 8946,
    name: 'BATO Hex key set mm./INCH/Torx. EVA 1/3.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 120
  },
  {
    id: 8945,
    name: 'BATO Hex key set mm./INCH/Torx. Blank',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 120
  },
  {
    id: 8941,
    name: 'BATO T-grip hex keyset mm. Metal.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 123
  },
  {
    id: 8940,
    name: 'BATO T-grip hex keyset mm.',
    image: 'img/d-8940.jpg',
    image_for_drawer: 'img/accessory-size-2.jpg',
    size: 2,
    price: 152
  },
  {
    id: 8942,
    name: 'BATO T-grip hex key set INCH.',
    image: 'img/d-8940.jpg',
    image_for_drawer: 'img/accessory-size-2.jpg',
    size: 2,
    price: 174
  },
  {
    id: 8944,
    name: 'BATO T-grip Hex key set Torx.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 174
  },
  {
    id: 8921,
    name: 'BATO Tools set combi. EVA 1/1.',
    image: 'img/d-8919.jpg',
    image_for_drawer: 'img/accessory-size-3.jpg',
    size: 3,
    price: 402
  },
  {
    id: 8922,
    name: 'BATO Autobit-/E-socket / adapter.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 107
  },
  {
    id: 8923,
    name: 'BATO Fileset 5 parts. EVA 1/3.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 72
  },
  {
    id: 8925,
    name: 'BATO Air mini burnisher straight/115g./long.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 318
  },
  {
    id: 8929,
    name: 'BATO Socket wrench set INCH 1/4"+3/8"+1/2".',
    image: 'img/d-8919.jpg',
    image_for_drawer: 'img/accessory-size-3.jpg',
    size: 3,
    price: 434
  },
  {
    id: 8930,
    name: 'BATO Combi set INCH combination spanner/ ringratchet/ wrenche',
    image: 'img/d-8919.jpg',
    image_for_drawer: 'img/accessory-size-3.jpg',
    size: 3,
    price: 362
  },
  {
    id: 8926,
    name: 'BATO Tray empty.',
    image: 'img/d-8909.jpg',
    image_for_drawer: 'img/accessory-size-1.jpg',
    size: 1,
    price: 19
  },
  {
    id: 89077,
    name: 'BATO Combination spanner set 6-32mm.',
    image: 'img/d-8919.jpg',
    image_for_drawer: 'img/accessory-size-3.jpg',
    size: 3,
    price: 412
  },
  {
    id: 8972,
    name: 'BATO Hammer and mandrel set.',
    image: 'img/d-8940.jpg',
    image_for_drawer: 'img/accessory-size-2.jpg',
    size: 2,
    price: 228
  },
  {
    id: 89210,
    name: 'BATO Kombi torque air tools and various.',
    image: 'img/d-8919.jpg',
    image_for_drawer: 'img/accessory-size-3.jpg',
    size: 3,
    price: 941
  },
]
const attachingAccessories = [
  {
    id: 9171,
    name: 'BATO Bin for tool cabinet',
    image: 'img/accessory-1.png',
    size: 0,
    price: 56
  },
  {
    id: 9172,
    name: 'BATO Tin holder for tool cabinet',
    image: 'img/accessory-1.png',
    size: 0,
    price: 22
  },
  {
    id: 9173,
    name: 'BATO Shelf with paper holder for tool cabinet',
    image: 'img/accessory-1.png',
    size: 0,
    price: 54
  },
  {
    id: 9185,
    name: 'BATO Support for air tools',
    image: 'img/accessory-1.png',
    size: 0,
    price: 48
  },
  {
    id: 9161,
    name: 'BATO Bagpanel for tool cabinet XXL modeller',
    image: 'img/accessory-1.png',
    size: 0,
    price: 507
  },
  {
    id: 9163,
    name: 'BATO Back panel for tools cabinet 9137,9124,9141,9140,9142.',
    image: 'img/accessory-1.png',
    size: 0,
    price: 362
  },
  {
    id: 9190,
    name: 'BATO Computerarm for tool cabinet 9137, 9124, 9141,9142, 9147, 9145.',
    image: 'img/accessory-1.png',
    size: 0,
    price: 134
  },
]