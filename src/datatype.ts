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
console.log(s1===s2)

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





