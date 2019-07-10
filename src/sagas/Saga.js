import{put,takeEvery} from 'redux-saga/effects'
import {onAgeUpSync} from '../actions/Action'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* incrementAgeAsync() {
    yield delay(1000)
  yield put(onAgeUpSync())
  }

export default function* watchAgeUp() {
    yield takeEvery('ON_AGE_UP', incrementAgeAsync)
  }