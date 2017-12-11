import { takeEvery } from 'redux-saga';
import {call, put, fork} from 'redux-saga/effects'
import store from '../App'

const API_KEY = 'api-key=3fedd9b92cac4aa398911c2dc1350724';
const URL = 'http://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=Y&order=by-date&offset=40&api-key=3fedd9b92cac4aa398911c2dc1350724';
function getData() {
    return new Promise((resolve) => {
        resolve(fetch(URL).then(function(response) {
            return response.json();
        }).then((res) => {
            return res
        }));
    });
}
function* loadData() {
    //'CONTENT/FETCH',
    const data = yield call(getData);
        /*() => {
        fetch(URL).then(function(response) {
                            return response.json();
                        }).then((res) => {
            return res
                                });
    });*/
 //  yield console.dir(data);
   yield put({type: 'TO_STORE',data: data});

}
/*
        return new Promise((resolve, reject) => {
            takeEvery('CONTENT/FETCH', function fetchLoad() {
                fetch(URL)
                    .then((response) => {
                        return response.json();
                    })
                    .then((res) => {
                        resolve(res.results);
                    });
            });
        })
    //   yield setTimeout(console.dir(load), 3000);//put({ type: 'TO_STORE', res: load });
    // yield call(console.log(res));
    // }
    // yield setTimeout(() => { console.log('hello Saga!')}, 5000);

}*/

function* rootSaga() {
    yield [
        yield takeEvery('CONTENT/FETCH', loadData)
    ]

}

export default rootSaga;