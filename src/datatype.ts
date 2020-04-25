//基本数据类型
//number  联合类型 |
let num1:number | undefined | null =1;

//数组
let arr1: number[] = [1,2,4];
//联合类型
let arr2: Array<number | string> = [1,2,3];

//元祖
let tuple: [number,string] =[0,'1'];
tuple.push(2)
console.log(tuple);

//函数
let add = (x:number,y:number) =>x+y;
let compute:(x:number,y:number) =>number  //定义函数类型
compute=(a,b)=>a+b

//对象
let obj:{x:number,y:number} = {x:1,y:2}
obj.x=3

//symbol
let s1:symbol =Symbol();
let s2=Symbol();
console.log(s1===s2);

//undefined null
let un:undefined = undefined;
let nu:null = null;

//void 没有任何返回值的类型
let noReturn = ()=>{};

//any
let x
x=1;
x='stre'
x={}
let y:any

//never
let error = () =>{
    throw new Error('error')
};
let endless = () =>{
    while(true){}
}

//枚举类型 一组具有名字的常量集合
//如果没有枚举 1.可读性差：很难记住数字的含义 2.可维护性差：硬编码，牵一发动全身
//枚举成员的类型时只读
//数字枚举 可以反向 印色的
enum Role {
    A=1,
    B,
    C
}

console.log(Role);
//字符串枚举
enum Messgae {
    Success = '成功',
    Fail = '失败'
}
//异构枚举
enum Answer {
    N,
    Y='yes'
}

//枚举成员
enum Char {
    //const 编译阶段 计算结果
    a,
    b=Char.a,
    c= 1+3,
    //computed 在程序运行时 才会被计算
    d= Math.random(),
    e= '123'.length,
    f=4
}
console.log(Char);

//常量枚举  在编译后被移除
const enum Month {
    Jan,
    Feb,
    Mar
}
let month = [Month.Jan,Month.Feb,Month.Mar]

//枚举类型
enum E {a,b}
enum F {a=1,b=2}
enum G {a='apple',b='banna'}

let e:E  = 3;
let f:F = 3;

let e1:E.a
let e2:E.b
let e3:E.a

let g1: G = G.a
let g2: G.a

//解决硬编码问题
export {}







