import axios from 'axios';

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


const jsonplaceholderAPI = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}

const l3API = axios.create(jsonplaceholderAPI)

// get

l3API.get('posts/1').then(respons => {
    console.log('One Post', respons.data)
})

l3API.get('posts').then(respons => {
    console.log('Many Post', respons.data)
})


// post

l3API.post(
    'posts',
    {
        title: 'foo',
        body: 'bar',
        userId: 1
    }
).then(respons => {
    console.log('post request, response', respons)
})


// put

l3API.put('posts/1', {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
}).then(respons => {
    console.log('put request', respons)
})


l3API.patch('posts/1', {
    title: 'NoFOOO'
}).then(respons => {
    console.log('Patch request', respons)
})

// just a plug
export default ()=>{};