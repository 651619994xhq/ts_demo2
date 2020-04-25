//函数类型接口
// let add : (x:number,y:number) => number
// //接口形式
// interface Add {
//     (x:number,y:number):number
// }
//使用类型别名 用type 关键字
type  Add = (x:number,y:number) => number

let add : Add = (a,b) => a+b

add(1,2);

//一个混合类型的接口
interface Lib {
    ():void;
    version:string;
    doSomething():void;
}

function createLib(){
    let lib:Lib = (() =>{}) as Lib;
    lib.version='1.0';
    lib.doSomething = ()=>{console.log(123)};
    return lib;
}

let lib1 = createLib();
lib1();
lib1.doSomething();


export {}
