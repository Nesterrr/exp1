import { takeEvery } from 'redux-saga';
import {call, put} from 'redux-saga/effects'

//const API_KEY = 'api-key=3fedd9b92cac4aa398911c2dc1350724';

const URL = 'http://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=Y&order=by-date&offset=0&api-key=3fedd9b92cac4aa398911c2dc1350724';
function setUrl(offset) {
    const basicURL = 'http://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=Y&order=by-date&';
    const APIkey = '&api-key=3fedd9b92cac4aa398911c2dc1350724';

    return basicURL + offset + APIkey;
}
function getData() {
    return new Promise((resolve) => {
        resolve(fetch(URL).then(function(response) {
            return response.json();
        }).then((res) => {
            return res;
        }));
    });
}
function* loadData() {
    const data = yield call(getData);

    yield put({type: 'TO_STORE',data: data});

}


function* nextLoad() {
   // const resultURL = basicURL + 'offset=' + offset + APIkey;
    console.log(this);
    yield loadData();
    // вызывать loadData
}
function* rootSaga() {
    yield [
        yield takeEvery('CONTENT/FETCH', loadData),
        yield takeEvery('CONTENT/NEXT', nextLoad)
    ]
}

export default rootSaga;