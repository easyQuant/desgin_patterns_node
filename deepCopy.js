function deepCopy(obj) {

    // 如果不是引用类型 或者 null
    // 直接返回
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }

    let copy = Array.isArray(obj) ? [] : {}

    for (let key in obj) {

        // 如果不是原型对象上的属性
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(key)            
        }
    }

    return copy
}