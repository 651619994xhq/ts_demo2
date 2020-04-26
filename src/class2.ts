//抽象类，多态 ts的类 覆盖了js的类
abstract class Animal {
    eat(){
        console.log('eat')
    }
    abstract sleep():void  //抽象方法的好处 明确知道 子类会实现 在父类就不需要实现了  也可以实现多态 就相当于 在子类 实现 sleep 的方式 可以不同了

}

// let animal=new Animal();  //无法创建抽象类的实例 只能被继承

class Dog extends Animal{
    constructor(public name:string){
        super()
        this.name=name;
    }
    run(){
        console.log(`${this.name} run`)
    }
    sleep(): void {
        console.log(`${this.name} is sleep`)
    }
}

let dog=new Dog('旺旺');
dog.run();
dog.eat();

class Cat extends Animal{
   sleep(): void {
       console.log('hello')
   }
}

//这样就实现的多态
let cat = new Cat();
let animals: Animal[] =[dog,cat]
animals.forEach((i)=>{
    i.sleep();
});

class WorkFlow {
    step1(){
        return this;
    }
    step2(){
        return this;
    }
}

new WorkFlow().step1().step2();

class MyFlow extends WorkFlow{
    next(){
        return this;  //this 既可以是子类 也可以是父类
    }
}

//这样也是一种多态 这样就可以保持父类和子类的之间的接口连贯性
new MyFlow().next().step1().step2();

export {};
