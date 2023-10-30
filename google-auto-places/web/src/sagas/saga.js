import { call, put, takeLatest } from 'redux-saga/effects';
import { 
    fetchPlacesStart, 
    fetchPlacesSuccess, 
    fetchPlacesFailure,
    fetchPlaceDetailsStart,
    fetchPlaceDetailsSuccess,
    fetchPlaceDetailsFailure
 } from '../redux/reducers/placesSlice';

const NODE_API_ENDPOINT = 'http://localhost:3001'

function* fetchPlacesSaga(action) {
    const { payload } = action;
    try {
        const response = yield call(fetch, `${NODE_API_ENDPOINT}/get-places?searchText=${payload}`);
        const data = yield response.json();
        yield put(fetchPlacesSuccess(data.predictions));
    } catch (error) {
        yield put(fetchPlacesFailure(error.message));
    }
}

function* fetchPlaceDetailsSaga(action) {
    const { payload } = action;
    try {
        const response = yield call(fetch, `${NODE_API_ENDPOINT}/place-details?placeId=${payload}`);
        const data = yield response.json();
        yield put(fetchPlaceDetailsSuccess(data.location));
    } catch (error) {
        yield put(fetchPlaceDetailsFailure(error.message));
    }
}

export default function* rootSaga() {
    yield takeLatest(fetchPlacesStart.type, fetchPlacesSaga);
    yield takeLatest(fetchPlaceDetailsStart.type, fetchPlaceDetailsSaga);
}

