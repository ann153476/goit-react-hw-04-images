
import axios from 'axios';
// const postsInstance = axios.create({
//     baseURL:'https://pixabay.com/api/?q=cat&page=1&key=33084404-d13ec048243a76c408af7526f&image_type=photo&orientation=horizontal&per_page=12'
// })
// export const getPosts = () => {
//     return postsInstance.get("/")
// }

// export const searchPosts = (q) => {
//     return postsInstance.get("/", {
//         perams: {
//             q,
//         }
//     })
// }
export const getImages = async (q, page = 1) => {
    const response = await axios.get(`https://pixabay.com/api/?q=${q}&page=${page}&key=33084404-d13ec048243a76c408af7526f&image_type=photo&orientation=horizontal&per_page=12`)
    return response
}


