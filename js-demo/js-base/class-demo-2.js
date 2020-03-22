//父类
class people {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name}eat some thing`)
    }
}
class Student extends people {
    constructor(name, number) {
        super(name)
        this.number = number
    }
    sayHi() {
        console.log(` 姓名 ${this.name} 学号 ${this.number}`)
    }
}
class teachers extends people {
    constructor(name, major) {
        super(name)
        this.major = major
    }
    teach() {
        console.log(` ${this.name} 教授 ${this.major}`)
    }
}
const xialuo = new Student('夏洛', 400)
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi()
xialuo.eat()
const wanglaoshi = new teachers('王老师', '语文')
console.log(wanglaoshi.name)
console.log(wanglaoshi.major)
wanglaoshi.eat()
wanglaoshi.teach()