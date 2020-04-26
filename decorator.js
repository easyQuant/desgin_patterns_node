// 实现装饰器模式

// 扩展一个设置排名参数的函数
function expand (obj) {
    obj.top = 1
}

// 修改基础样式
function basic (obj) {
    obj.name = '小明'
    obj.age = 20
}

function Decorator(obj) {
    
    // 添加默认属性
    basic(obj)

    // 使用装饰器模式进行扩展
    expand(obj)
}