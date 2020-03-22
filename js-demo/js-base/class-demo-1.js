
class Student {
    constructor(name,number){
        this.name=name
        this.number=number
    }
    sayHi(){
        console.log(
            `姓名 ${this.name} ,学号${this.number}` // es6的模板字符串
        )
       // console.log(
      // '姓名'+this.name+',学号'+this.number
      // )
    }
}
const xialuo =new Student('夏洛',400)
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi()

const madongmei =new Student('马冬梅',200)
console.log(madongmei.name)
console.log(madongmei.number)
madongmei.sayHi()

