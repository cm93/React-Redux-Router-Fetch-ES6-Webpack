import { VALUE } from '../actions/actions'

function changeValue(state = 0, action) {
  switch (action.type) {
    case VALUE:
      return action.value;
    default:
      return state
  }
}

const index = {
  changeValue
};

export default index
