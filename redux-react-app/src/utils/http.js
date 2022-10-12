import axios from 'axios';

import { BASE_URL } from '../configs/config_1';

function axiosGet(options){
    axios(BASE_URL + options.url)
    .then((res) => {
        console.log(res)

        options.success(res.data);
    })
    .catch((err) => {
        console.log(err)

        options.error(err);
    });
}

export {
    axiosGet
};
