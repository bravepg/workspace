function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
  effects: {
    *deleteAfter1Second({ payload }, { call, put }) {
      yield call(delay, 2000);
      const result = yield put({ type: 'delete', payload });
      return result
    },
  },
};