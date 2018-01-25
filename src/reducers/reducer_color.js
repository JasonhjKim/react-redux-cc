import {SET_COLOR} from '../actions/index'

export default function setColor(state=["#ffffff"], action) {
	switch(action.type) {
		case SET_COLOR:
			return [...state, action.payload];
	}
	return state;
}
