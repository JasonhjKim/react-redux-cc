import { POP_LAYER, PUSH_LAYER} from '../actions/index';

export default function(state=[], action) {
	switch (action.type) {
		case PUSH_LAYER:
			return [...state, action.payload];
		case POP_LAYER:
			var tempState = state.slice()
			tempState.pop()
			return tempState
	}
	return state;
}