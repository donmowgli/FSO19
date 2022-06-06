import { initialState, stateConstructor } from "./state";

const action = {
    good: {
        type: 'GOOD'
    },
    ok : {
        type: 'OK'
    },
    bad: {
        type: 'BAD'
    },
    zero: {
        type: 'ZERO'
    }
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
        return stateConstructor(state.good + 1, state.ok, state.bad);
    case 'OK':
        return stateConstructor(state.good, state.ok + 1, state.bad);
    case 'BAD':
        return stateConstructor(state.good, state.ok, state.bad + 1);
    case 'ZERO':
        return stateConstructor(0, 0, 0);
    default: return state
  }
  
}

export default counterReducer;