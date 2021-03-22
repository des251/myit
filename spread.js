//...spread разворачивает массивы

let video = ['youtube', 'tutube', 'bla'];
let blogs = ['blogger', 'livejournsl'];
let internet = [...video, ...blogs, 'vk, facebook'];

console.log(internet);

function sum(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}

const arr = [4, 5, 8];

sum(...arr);
