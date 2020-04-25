//基本数据类型
//number  联合类型 |
var num1 = 1;
//数组
var arr1 = [1, 2, 4];
//联合类型
var arr2 = [1, 2, 3];
//元祖
var tuple = [0, '1'];
tuple.push(2);
console.log(tuple);
//函数
var add = function (x, y) { return x + y; };
var compute; //定义函数类型
compute = function (a, b) { return a + b; };
//对象
var obj = { x: 1, y: 2 };
obj.x = 3;
//symbol
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2);
//undefined null
var un = undefined;
var nu = null;
//void 没有任何返回值的类型
var noReturn = function () { };
//any
var x;
x = 1;
x = 'stre';
x = {};
var y;
//never
var error = function () {
    throw new Error('error');
};
var endless = function () {
    while (true) { }
};
//枚举类型 一组具有名字的常量集合
//如果没有枚举 1.可读性差：很难记住数字的含义 2.可维护性差：硬编码，牵一发动全身
//枚举成员的类型时只读
//数字枚举 可以反向 印色的
var Role;
(function (Role) {
    Role[Role["A"] = 1] = "A";
    Role[Role["B"] = 2] = "B";
    Role[Role["C"] = 3] = "C";
})(Role || (Role = {}));
console.log(Role);
//字符串枚举
var Messgae;
(function (Messgae) {
    Messgae["Success"] = "\u6210\u529F";
    Messgae["Fail"] = "\u5931\u8D25";
})(Messgae || (Messgae = {}));
//异构枚举
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "yes";
})(Answer || (Answer = {}));
//枚举成员
var Char;
(function (Char) {
    //const 编译阶段 计算结果
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    //computed 在程序运行时 才会被计算
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
    Char[Char["f"] = 4] = "f";
})(Char || (Char = {}));
console.log(Char);
var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];
//枚举类型
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["a"] = 1] = "a";
    F[F["b"] = 2] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banna";
})(G || (G = {}));
var e = 3;
var f = 3;
var e1;
var e2;
var e3;
var g1 = G.a;
var g2;
//解决硬编码问题
