//类和接口的关系 1. 一个接口可以约定类成员的属性 以及类型 2.接口只能约定类的公有（public）成员 3.接口也无法约定类构造函数
interface Human {
    // new (name:string): void  这个是错误的
    name:string,
    eat():void
}
//类必须实现接口的所有属性
class Asian implements Human {
    constructor(name: string) {
        this.name = name
    }
    // private name: string  这个是错误的写法
    name: string
    eat() {

    }
}

//接口的继承
interface Man extends Human{
    run():void
}

interface Child {
    cry():void
}

//实现多个接口继承
interface Boy extends Man,Child{

}

let boy:Boy = {
    name:'',
    run(){

    },
    eat(){

    },
    cry(){

    }
}

//接口继承类
class Auto {
    state = 1
    // private state2 = 2
}
//接口在抽离类的成员 不仅抽离的公有成员 还抽离了私有成员 和 受保护成员
interface AutoInterface extends Auto{

}
class C implements AutoInterface{
    state = 3
}

//这个的意思是指 Bus 是Auto 的子类 就不需要在实现 AutoInterface 接口了
class Bus extends Auto implements AutoInterface{

}


export {};

//接口与类的关系
//1.接口之间可以相互继承
//2.接口 可以 通过类进行实现 ，接口只能约定类的public 成员
//3.类之间可以相互继承
//4.类也可以被接口继承 但是接口抽离了类 的 public 公有 和 私有成员


