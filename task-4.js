//4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
// 1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
// 2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
// https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в 
// дополнительных видео в материалах урока.

"use strict";

    const newProducts = [
        {
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg"
            ]
        },
        {
            id: 8, 
            price: 78,
        },
    ];

// 1 Пункт - проверяю наличие свойства и то, что оно не пустое
let productsWithPhotos = newProducts.filter(
    function(item) {
        if (item.hasOwnProperty("photos") && item.photos.length > 0) {
            return item;
        }
    } 
);

// 2 Пункт - использую функцию в сортировке
newProducts.sort(
    function(a, b) {
        switch (true) {
            case a.price > b.price:
                return 1;
            
            case a.price < b.price:
                return -1;
            
            default:
                return 0;
        }
    }
);