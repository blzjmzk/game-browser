import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1de9b8d6dc0a43b1bba177c96ceb1b1c' //dzięki temu key będzie w query string kadego http request wysłanym do naszego backendu
    }
})