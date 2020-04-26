// 单身狗设计模式 (单例)
class SingleDog {

    // 生成唯一实例
    static getInstance () {

        // 如果实例不存在
        if (!SingleDog.instance) {
            SingleDog.instance = new SingleDog()
        }

        return SingleDog
    }
}

let singleDog_01 = SingleDog.getInstance()
let singleDog_02 = SingleDog.getInstance()

console.log('singleDog_01 === singleDog_02', singleDog_01 === singleDog_02)