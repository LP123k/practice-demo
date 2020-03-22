function createCache(){
    const data = {}
    return {
        set: function (key, val) {
            data[key] = val
        },
        get: function(key) {
            return data[key]
        }
    }
}
