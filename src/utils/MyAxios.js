import axios from 'axios';

const MY__TOKEN__ = "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";

axios.defaults.baseURL = 'https://api.github.com/'
axios.defaults.headers.common = {'Authorization': `bearer ${MY__TOKEN__}`}

export default axios;