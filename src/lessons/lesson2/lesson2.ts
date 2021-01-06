console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

let sum = (num:number) => {
    return function (num2: number): number{
        return num + num2
    }
}

let sum3 = (num:number) => (num2:number) => num + num2

console.log(sum3(1)(1))

console.log(sum(3)(6))

let sum2 = (num: number) => {
    return function (num2: number){
        return function (num3: number){
            return function (num4:number):number{
                return num + num2 + num3 + num4
            }
        }
    }
}

console.log(sum2(1)(2)(3)(4))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3


function makeCounter(){
    let count = 0
    return function():number {
        return ++count
    }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter()); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounterTask3 (num:number){
    let numValue = num
    return {
        increase: () => numValue += 1,
        decrease: () => numValue -= 1,
        reset: () => numValue = numValue = 0,
        set: (newNumValue:number) => numValue = newNumValue
    }
}

const counter3 = makeCounterTask3(5)
console.log(counter3.decrease())
console.log(counter3.decrease())
console.log(counter3.decrease())
console.log(counter3.increase())
console.log(counter3.reset())
console.log(counter3.set(100))
console.log(counter3.increase())
console.log(counter3.increase())

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(num:number){

    if (num === 0) return 0

    let superSumArgument:Array<number> = []

    let realSuperSum = (...arg: Array<number>) => {
        superSumArgument = [...superSumArgument, ...arg]
        if(superSumArgument.length >= num){
            superSumArgument.length = num
            return superSumArgument.reduce((el, ac) => el + ac)
        }else {
            return realSuperSum
        }
    }

    return realSuperSum

}

console.log(superSum(0)) //0
//@ts-ignore
console.log(superSum(3)(2)(5)(3)) //10
//@ts-ignore
console.log(superSum(3)(2)(5,3)) //10
//@ts-ignore
console.log(superSum(3)(2,5,3)) //10
//@ts-ignore
console.log(superSum(3)(2,5)(3))//10
//@ts-ignore
console.log(superSum(3)(2,5)(3,9)) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion


// just a plug
export default () => {};

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//
//     Например:
//
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

function sumTo(num:number):number{
    if (num == 0) return 0
    if (num == 1) return 1
    return num + sumTo(num - 1)
}

console.log(sumTo(3))
console.log(sumTo(100))