import {query, create, update, remove} from 'data/memberData.js';

export default {
  namespace: 'member',

  state: {
    loading: false,
    list: [],
    total: 0,
    queryCondition: {},
    currentItem: {},
    modalVisible: false,
    modalType: 'create'
  },

  subscriptions: {
    setup({dispatch, history}) {
      history.listen(location => {
        if (location.pathname === '/list') {
          dispatch({
            type: 'query',
            payload:{
              queryCondition:location.query
            }
          });
        }
      });
    },
  },

  effects: {
    *query({payload}, {put}) {
      yield put({type: 'showLoading'});
      const {result} = yield query(payload.queryCondition);
      if (result.code === '200') {
        yield put({
          type: 'querySuccess',
          payload: {
            list: result.data,
            total: result.total,
            queryCondition:payload.queryCondition
          }
        });
      } else {
        yield put({
          type: 'hideLoading'
        })
      }
    },
    *create({payload}, {put}) {
      yield put({type: 'showLoading'});
      const {result} = yield create(payload.item);
      if (result.code === '200') {
        yield put({
          type: 'createSuccess',
          payload: {
            currentItem: result.data
          }
        });
      } else {
        yield put({
          type: 'hideLoading'
        })
      }
    },
    *update({payload}, {put}) {
      yield put({type: 'showLoading'});
      const {result} = yield update(payload.id,payload.updateItem);
      if (result.code === '200') {
        yield put({
          type: 'updateSuccess',
          payload: {
            currentItem: result.data
          }
        });
      } else {
        yield put({
          type: 'hideLoading'
        })
      }
    },
    *remove({payload}, {put}) {
      yield put({type: 'showLoading'});
      const {result} = yield remove(payload.id);
      if (result.code === '200') {
        yield put({
          type: 'removeSuccess',
          id: payload.id,
          payload: {
            currentItem: {}
          }
        });
      } else {
        yield put({
          type: 'hideLoading'
        })
      }
    }
  },

  reducers: {
    showLoading(state) {
      return {...state, loading: true};
    },
    hideLoading(state) {
      return {...state, loading: false};
    },
    showModal(state, action) {
      return {...state, ...action.payload, modalVisible: true};
    },
    hideModal(state) {
      return {...state, modalVisible: false};
    },
    querySuccess(state, action) {
      return {...state, ...action.payload, loading: false};
    },
    createSuccess(state, action) {
      const list = [action.payload.currentItem].concat(state.list);
      return {...state, list, ...action.payload, modalVisible: false, loading: false};
    },
    updateSuccess(state, action) {
      const list = state.list.map(item => {
        if (item.id === action.payload.currentItem.id) {
          return action.payload.currentItem
        } else {
          return item;
        }
      });
      return {...state, list, ...action.payload, modalVisible: false, loading: false};
    },
    removeSuccess(state, action) {
      const list = state.list.filter(item => {
        return item.id !== action.id
      });
      const total=--state.total;
      return {...state, list,total, ...action.payload, loading: false};
    }
  }
};
