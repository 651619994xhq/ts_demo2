//函数定义的4种方式
function add1(x:number,y:number){
    return x+y
}
//后三种只是定义 并没有实现
let add2:(x:number,y:number) => number;

type add3 = (x:number,y:number) => number

interface add4 {
    (x:number,y:number):number
}

//可选参数必须位于必选参数之后
function add5(x:number,y?:number){
    y? x+y :y;
}
add5(2)

function add6(x:number,y:number = 0, z:number, g:number = 1) {
    return x+y+z+g
}

add6(1,undefined,2,undefined)

add6(1,undefined,2,undefined)

//多个
function add7(x:number,...rest : number[]){
    return x+rest.reduce((pre,cur) => pre +cur)
}
console.log(add7(1,1,3,5,6,7,8))

//函数重载
function add8 (...rest : number[]) : number;
function add8 (...rest : string[]) : string;
function add8 (...rest : any[]) : any {
    let first =rest[0];
    if(typeof first === 'string'){
        return rest.join('')
    }
    if(typeof first === 'number'){
        return rest.reduce((pre,cur) => pre +cur)
    }
}


console.log(add8(1,2,3))
console.log(add8('a','b','c'))

export {}

