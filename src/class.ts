//类
class Dog {
    constructor(name:string){
        this.name=name
    }
    name: string ='dog'   //类型注解
    run(){}
}
console.log(Dog.prototype)
let dog= new Dog('旺旺')
console.log(dog)

//继承
class Husky extends Dog{
    constructor(name:string,color:string){
        super(name)
        this.color=color
    }
    color: string
}

//类的成员修饰符

class Test {
    // private constructor(name:string){  //这个表示当前类 既不能被继承 也不能被实例化
    //     this.name=name;
    // }
    // protected constructor(name:string){  //这个表示当前类 不能被实例化 只能被继承 也就是基类
    //     this.name=name;
    // }
    constructor(name:string){
        this.name=name
    }
    public name: string
    private pri(){    //只能在类本身调用,不能被类的实例调用  也不能被子类调用
        console.log('pri is run')
    }
    protected pro(){   //受保护成员 只能在类或者子类调用  而不能在类的实例中调用
        console.log('pro is run')
    }
    readonly legs:number = 5 //只读属性一定要初始化 跟实例属性是一样的
    public run(){
        this.pri()
        // this.pro()
    }
    static food:string = 'bones' // 静态成员 只能通过类名来调用，也可以继承
}

let test = new Test('哈哈')

class Test1 extends Test{
    constructor(name:string){
        super(name)
    }
    run(){
        super.run();  //在子类调用父类的方法
        console.log('123456')
    }
}

let test1=new  Test1('我饿')
test1.run();

class Test3 extends Test{
    constructor(name:string, public color:string){  //可以直接在构造函数中添加 修饰符 这样就相当于 直接在类的实例上加上实例属性 不用再定义了 这样代码就更简洁一点
        super(name)
        this.color=color;
    }

}

export {}






