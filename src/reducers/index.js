import { combineReducers } from 'redux';
import PartsReducer from './reducer_init';
import RenderReducer from './reducer_render';
import ColorReducer from './reducer_color';
import PrimaryColorReducer from './reducer_color_primary';
import SecondaryColorReducer from './reducer_color_secondary';
import ColorListReducer from './reducer_color_list'

const rootReducer = combineReducers({
	parts: PartsReducer,
	renderParts: RenderReducer,
	color: ColorReducer,
	primary: PrimaryColorReducer,
	secondary: SecondaryColorReducer,
	colorList: ColorListReducer
})

export default rootReducer;