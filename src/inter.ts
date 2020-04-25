//接口
interface List {
    readonly id:number;  //只读属性是不允许修改
    name:string;
    age?:number;
    // [x:string]:any; //字符串的索引签名  用任意的字符串 可以得到任意的结果 也可以避免多余属性的检查
}
interface Result {
    data:List[]
}
function render(result:Result){
    result.data.forEach((value) => {
        console.log(value.id,value.name)
    })
}
let result ={
    data:[
        {id:1,name:'1',sex:'male'},
        {id:1,name:'B'},
    ]
}
render(result)

//如果这种直接传入字面量 ts 会对额外的属性进行检查
// render({
//     data:[
//         {id:1,name:'1',sex:'male'},
//         {id:1,name:'B'},
//     ]
// })

//类型断言 这样就会绕过编辑器检查
render({
    data:[
        {id:1,name:'1',sex:'male'},
        {id:1,name:'B'},
    ]
} as Result)

//类型断言
render(<Result>{
    data:[
        {id:1,name:'1',sex:'male'},
        {id:1,name:'B'},
    ]
})


interface StringArray {
    [index:number]:string  //用任意的number 索引 都会得到一个string  相当于申明了一个字符串数组
}

let chars:StringArray =['A','B','3']


interface Names {
    [x: string]: any;
    [z:number]:string;
}

export {}

//在默认状态下，typescript 将 DOM typings 作为全局的运行环境，所以当我们声明 name时， 与 DOM 中的全局 window 对象下的 name 属性出现了重名。因此，报了 error TS2451: Cannot redeclare block-scoped variable 'name'. 错误。

// 解决方法
// 解决这个问题，思路有两个：
//
// 方法一
// 将运行环境由 DOM typings 更改成其他运行环境。
// 我们可以在 tsconfig.json 中做一下声明：
// {
//     "compilerOptions": {
//     "lib": [
//         "es2015"
//     ]
// }
// }

// 方法二
// 既然与全局的变量出现重名，那我们将脚本封装到模块（module）内。module 有自己的作用域，自然不会与全局作用域的变量产生冲突。
//
// 在 Typescript 中，只要文件存在 import 或 export 关键字，都被视为 module
//
// 作者：youthcity
// 链接：https://www.jianshu.com/p/78268bd9af0a
//     来源：简书
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// const name = 'youthcity';
//
// function greeter(name:string) {
//     return `Hello ${name}`;
// }
//
//
// console.log(greeter(name));
//
// export {};

// 我们在脚本的最后一行，添加了 export {};。将文件声明为 module， 变量 name 被限制在了 module 的作用域下，因此不会与全局的name产生冲突。
//
// 总结
// 在公司做项目时，都是在现有的框架里堆逻辑和写业务。当自己从零搭建一个项目时，才发现最熟悉的 typescript，并不是很了解。习惯了当 CRUD BOY，都快丧失了对基础知识的理解。

