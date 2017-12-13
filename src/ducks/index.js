import { takeEvery } from 'redux-saga'
import {call, put, select} from 'redux-saga/effects'

function setUrl(offset) {
    const basicURL = 'http://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=Y&order=by-date&offset=';
    const APIkey = '&api-key=3fedd9b92cac4aa398911c2dc1350724';

    return basicURL + offset + APIkey;
}

const getProject = (state) => state.next;

function getData(a) {
    return new Promise((resolve) => {
        resolve(fetch(setUrl(a)).then(function(response) {
            return response.json();
        }).then((res) => {
            return res;
        }));
    });
}

function* loadData(a) {
    const data = yield call(getData, a);

    yield put({type: 'TO_STORE',data: data});

}

function* nextLoad() {
    const a = yield select(getProject);
    yield loadData(a);
}

function* rootSaga() {
    yield [
        yield takeEvery('CONTENT/FETCH', loadData),
        yield takeEvery('CONTENT/NEXT', nextLoad)
    ]
}

export default rootSaga;