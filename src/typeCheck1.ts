//类型检查机制
//TypeScript编译器在做类型检查时，所秉承的一些原则，以及表现出的一些行为
//作用：辅助开发，提高开发效率
//1.类型推断
//2.类型兼容性
//3.类型保护

//1.类型推断
//不需要指定变量的类型（函数的返回值类型），TypeScript可以根据某些规则自动地为其推断出一个类型
//1.基础类型推断， 2.最佳通用类型推断 3.上下文类型推断

//这个是从右向走推断
let a  //推断为any
let b=1 //推断为number
let c='abc'  //推断为string
let d= []  //推断array
let e=[1]  //推断为number类型的array number:[]

let f = (x=1) => x+1 ;

//上下文推断 从左向右 推断出 event事件类型
window.onkeydown = (event) =>{
    console.log(event)
}
