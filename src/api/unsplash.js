import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b24df01501f3f272f200a8151876abd4531d20e1ef5815c79b0a9003e473a7f1',
    }
});