let baseUrl = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => fetch(baseUrl).then(value => value.json());
const getUser = (id) => fetch(baseUrl + '/' + id).then(value => value.json());
const getUserPosts = (id) => fetch(baseUrl+'/'+id+'/posts').then(value => value.json())

export {getUser, getUserPosts,getUsers}



