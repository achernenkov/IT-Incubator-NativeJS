import {rejects} from "assert";

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

const p = new Promise((resolve, rejects) => {
    console.log("Promise is created")
    setTimeout(() => {console.log('11')}, 1000)
})

p.then(() => console.log('But not completed :('))

// ???

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


const p1 = new Promise(resolve => resolve('Promise Data')).then(console.log)


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

const p2 = new Promise((resolve, reject) => reject('Promise Error')).catch(console.log)

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const p3 = new Promise((resolve, rejects) => {
    setTimeout(() => resolve('Promise Data'), 3000)
})

p3.then(console.log)

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


// type testObjType = {
//     promise: null | Promise<any>;
//     resolve: null | Function;
//     reject: null | Function;
//     onSuccess: (paramName: string) => void;
//     onError: (paramName: string) => void;
// }
//
// const handlePromise: testObjType = {
//     promise: null,
//     reject: null,
//     resolve: null,
//     onSuccess(paramName: string) {
//         console.log(`Promise is resolved with data: ${paramName}`);
//     },
//     onError(paramName: string) {
//         console.log(`Promise is rejected with error: ${paramName}`);
//     },
// };
//
// export const createPromise = () => {
//     const somePromise: Promise<any> = new Promise((res, rej) => {
//         handlePromise.resolve = res;
//         handlePromise.reject = rej;
//     });
//     handlePromise.promise = somePromise;
//     handlePromise.promise
//         .then(res => handlePromise.onSuccess(res))
//         .catch(err => handlePromise.onError(err));
//     console.log(handlePromise);
// };
//
// export const resolvePromise = () => {
//     //handlePromise.resolve && handlePromise.resolve('10');
//     //@ts-ignore
//     handlePromise.resolve('10');
// };
//
// export const rejectPromise = () => {
//     handlePromise.reject && handlePromise.reject('0');
// };

type HandlePromiseType = {
    promise: null | Promise<any>
    resolve: null | Function
    reject: null | Function
    onSuccess: (onSuccesSparamName: string) => void
    onError: (onErrorParamName: string) => void
}

let handlePromise:HandlePromiseType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (onSuccesSparamName: string):void => {
        console.log(`Promise is resolved with data: ${onSuccesSparamName}`)
    },
    onError: (onErrorParamName: string):void => {
        console.log(`Promise is rejected with error: ${onErrorParamName}`)
    }
}


export const createPromise = ():void => {
    handlePromise.promise = new Promise((resolve, reject) => {})
    handlePromise.resolve = handlePromise.onSuccess
    handlePromise.reject = handlePromise.onError
    console.log('createPromiseClick', handlePromise)
}
export const resolvePromiseHandler  = (value: string):void => {if(handlePromise.resolve) handlePromise.resolve(value); console.log('resolvePromiseClick', handlePromise)}
export const rejectPromiseHandler  = (value: string):void => {if(handlePromise.reject) handlePromise.reject(value); console.log('rejectPromiseClick', handlePromise)}

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.


const p4:Promise<string> = new Promise((resolve, rejects) => {
    setTimeout(() => resolve('My name is'), 1000)
})

function onSuccess(oneParametr: string):string {
    return `${oneParametr} Андрей`
}

function print(value: string):void{
    console.log(value)
}

p4.then(res => print(onSuccess(res)))

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
let obj = {}

let p5:Promise<{name: string}> = new Promise(res => setTimeout(() => res({ name: "Anna" }), 2000))

let p6:Promise<{age: number}> = new Promise(res => setTimeout(() => res({age: 16}), 3000))

let p7: Promise<{city: string}> = new Promise(res => setTimeout(() => res({city: ''}), 4000))

const p8All = Promise.all([p5,p6,p7])

p8All.then(data => {
    obj = {name: data[0].name, age: data[1].age, city: data[2].city}
    console.log('Object Task7', obj)
})

// just a plug
export default ()=>{};