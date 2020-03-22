class jQuery {
    constructor(selector) {
        const result = document.querySelectorAll(selector)
        const length = result.length
        for (let i = 0; i < result.length; i++) {
            this[i] = result[i]
        }
        this.length = length
    }
    get(index) {
        return this[index]
    }
    each(fn) {
        for (let i = 0; i < this.length; i++) {
            const elem = this[i]
            fn(elem)
        }
    }
    on(type, fn) {
        return this.each(elem => {
            elem.addEventListener(type, fn, false)
        })
    }

}
// 插件，直接向jQuery里添加就相当于添加插件（插件机制）
jQuery.prototype.dialog = function (ss) {
    alert(ss)
}
//复写机制（造轮子）
class myjQuery extends jQuery {
    constructor(selector) {
        super(selector)
    }
}

// const $p = new jQuery('p')
// $p.each((elem) => console.log(elem.nodeName))
// $p.on('click',() => alert('clicked'))
// $p.get(2)