//泛型 一个函数 一个类 能够支持多种属性
//泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定
function log <T> (value:T): T {
    console.log(value);
    return value;
}

log<number>(1);
log<string>('str');
log<string[]>(['a']);
log(['abc','ddd'])  //这个是用了ts的类型推断

type Log = <T>(value:T) => T
let myLog:Log = log

//泛型接口
interface Log2 {
    <T>(value:T):T
}

interface Log3 <T = string> {
    (value:T):T
}

let mgLog3: Log3<number> = log
let mgLog4: Log3 = log

export {};
