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
    constructor(name:string){
        this.name=name
    }
    public name: string
    private pri(){    //只能在类本身调用
        console.log('pri is run')
    }
    protected pro(){   //受保护成员 只能在类或者子类调用  而不能在实例中调用
        console.log('pro is run')
    }
    run(){
        this.pri()
        // this.pro()
    }
}

let test = new Test('哈哈')






