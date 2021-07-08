import axios from 'axios'

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
}

let axiosInstance = axios.create(options)

const getPosts = () => axiosInstance('/posts')

const getUsers = () => axiosInstance('/users')

const getComments = () => axiosInstance('/comments')

const getUserPosts = (id) => axiosInstance('/users/' + id + '/posts')

const getPostComments = (id) => axiosInstance('/posts/' + id + '/comments')



export {getPosts, getUsers, getComments, getUserPosts, getPostComments};
