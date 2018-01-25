import {SET_PRIMARY} from '../actions/index'

export default function setPrimary(state=[], action) {
	switch(action.type) {
		case SET_PRIMARY:
			return [...state, action.payload];
	}
	return state;
}