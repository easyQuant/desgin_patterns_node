// 实现一个简单工厂模式
function Factory (name, age, type) {
    let tags = null

    // 根据type创建不同的 User 给予其对应的标签
    switch (type) {

        // 如果是程序猿
        case 'coder':
            tags = ['写bug', '对接口', '划水']
            break;

        case 'manager':
            tags = ['给开发鼓励', '提需求', '被开发砍']
            break;
    
        default:
            break;
    }

    return new User(name, age, type, tags)
}

// 不变的内容
function User (name, age, type, tags) {
    this.name = name
    this.age = age
    this.type = type
    this.tags = tags
}

let factory_01 = new Factory('败笔', 25, 'coder')

let factory_02 = new Factory('贵哥', 29, 'manager')

console.log(factory_01)
console.log(factory_02)
