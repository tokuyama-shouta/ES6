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