export const POP_LAYER = "POP_LAYER";
export const PUSH_LAYER = "PUSH_LAYER";
export const SET_COLOR = "SET_COLOR";
export const SET_PRIMARY = "SET_PRIMARY";
export const SET_SECONDARY = "SET_SECONDARY";


/*Action for pushing new layer to the bottom of body container */
export function pushLayer(newLayer) {
	return {
		type: PUSH_LAYER,
		payload: newLayer
	}
}

/*Action for poping a layer from the bottom of body container */
export function popLayer() {
	return {
		type: POP_LAYER
	}
}

/*Action for setting custom color - currently no in use*/
export function setColor(newColor) {
	return {
		type: SET_COLOR,
		payload: newColor
	}
}

/*Action for setting new primary color*/
export function setPrimary(newColor) {
	return {
		type: SET_PRIMARY,
		payload: newColor
	}
}

/*Action for setting new secondary color*/
export function setSecondary(newColor) {
	return {
		type: SET_SECONDARY,
		payload: newColor
	}
}