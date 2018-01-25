import {SET_SECONDARY} from '../actions/index'

export default function setPrimary(state=[], action) {
	switch(action.type) {
		case SET_SECONDARY:
			return [...state, action.payload];
	}
	return state;
}