//泛型类和泛型约束
//注意：泛型不能用在类的静态成员上面
class Log<T> {
    run(value:T){
        console.log(value);
        return value
    }
}

let log1 = new Log<number>();
log1.run(1);
let log2 = new Log();  //没有约定 就可以约定任意类型
log2.run({a:1});

interface Length {
     length:number
}
//T收到类型约束  T extends Length T 肯定具有length 属性的
function log<T extends Length>(value:T):T {
    console.log(value,value.length);
    return  value;
}
console.log(log([1]))
console.log(log('123'))
console.log(log({length:1}))

export {};

//泛型的好处：
//1.函数和类可以轻松地支持多种类型，增强程序的拓展性
//2.不必写多条函数重载，永长的联合类型申明，增强代码的可读性
//3.灵活控制类型之前的约束



