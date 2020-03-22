//函数作为返回值
// function create() {
//     let a = 100
//     return function () {
//         console.log(a)
//     }
// }
// let fn = create()
// let a = 200
// fn()
// 函数作为参数
function print(fn) {
    let a = 300
    fn()
}
let a = 500
function fn() {
    console.log(a)
}
print(fn)