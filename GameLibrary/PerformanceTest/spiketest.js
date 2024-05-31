import http from 'k6/http'
import {sleep, check} from 'k6';

export const options = {
    stages: [
        {duration: '30s', target: 100},
        {duration: '2m', target: 100},
        {duration: '30s', target: 0},
    ]
};

export default () => {
    const res = http.get('http://45.90.123.95:5001/');
    check(res, { 'status is 200': (r) => r.status === 200 });
    sleep(1);
};
