// 实现一个抽象工厂

// 抽象工厂
class AbstractFactory {

    // 只是抽象方法 不定义具体内容
    createOS () {
        
    }
}

// 具体工厂 继承于抽象工厂
class StarPhoneFactory extends AbstractFactory {

    // 准备定义抽象的产品
    createOS () {

        // 返回一个抽象的产品工厂类
        return new XiaoMiOSFactory()
    }
}

// 抽象产品工厂
class AbstractFactoryOS {

    run () {

    }
}

// 具体产品工厂
class XiaoMiOSFactory extends AbstractFactoryOS {

    run () {
        console.log('使用小米OS')
    }
}

// 生成一个手机
const phone = new StarPhoneFactory ()

// 生成一个操作系统
const os = phone.createOS()

// 运行系统
os.run()