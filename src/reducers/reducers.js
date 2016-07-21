function processStatus(state={status: ''}, action) {
  return Object.assign({}, state, {
    status: action.status
  });
}

function getAdminList(state={}, action) {
  return Object.assign({}, state, {
    adminList: action.list
  });
}

const rootReducer = { processStatus, getAdminList };

export default rootReducer
