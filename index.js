//ES5 for

let colors = ['red', 'blue', 'green'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//forEach
colors.forEach(function(color) {
  console.log(color);
})

//数字の配列を用意
let numbers = [1,2,3,4,5];
//合計を保持する変数を用意する
let sum = 0;
//配列の1つ1つの合計をたす。
numbers.forEach(function(number) {
  sum += number;
});
//合計を表示する
sum;

posts.forEach(function(post){
  savePost(post)
})
images.forEach(function(image){
  areas.push(image.height*image.width);
})

//map

let numbers = [1,2,3];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++){
  doubledNumbers.push(numbers[i]*2);
}

let doubled = numbers.map(function(number) {
  return number * 2;
})

doubled;
doubledNumbers;

let cars = [
  {type: '軽自動車',price: '安い'},
  {type: '高級車',price: '高い'}
];
let prices = cars.map(function(car){
  return car.price;
});
prices;

let height = images.map(function(image){
  return image.height;
})

let speeds = trips.map(function(trip){
  return trip.distance/trip.time;
})

let products = [
  { name: 'きゅうり', type: '野菜' },
  { name: 'バナナ', type: 'フルーツ' },
  { name: 'セロリ', type: '野菜' },
  { name: 'オレンジ', type: 'フルーツ' },
];

let filteredProducts = [];

for(let i = 0; i < products.length; i++){
  if(products[i].type === 'フルーツ'){
    filteredProducts.push(products[i]);
  }
}


products.filter(function(product){
  return product.type === 'フルーツ';
});

let products = [
  { name: 'きゅうり', type: '野菜', quabtity: 0, price: 1},
  { name: 'バナナ', type: 'フルーツ',quabtity: 0, price: 1},
  { name: 'セロリ', type: '野菜', quabtity: 0, price: 1},
  { name: 'オレンジ', type: 'フルーツ', quabtity: 0, price: 1},
];

products.filter(function(product){
  return product.type === '野菜' && product.quantity > 0 && product.price < 10;
})


