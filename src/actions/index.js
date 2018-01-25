export const POP_LAYER = "POP_LAYER";
export const PUSH_LAYER = "PUSH_LAYER";
export const SET_COLOR = "SET_COLOR";

export const SET_PRIMARY = "SET_PRIMARY";
export const SET_SECONDARY = "SET_SECONDARY";

export function pushLayer(newLayer) {
	return {
		type: PUSH_LAYER,
		payload: newLayer
	}
}

export function popLayer() {
	return {
		type: POP_LAYER
	}
}

export function setColor(newColor) {
	return {
		type: SET_COLOR,
		payload: newColor
	}
}

export function setPrimary(newColor) {
	return {
		type: SET_PRIMARY,
		payload: newColor
	}
}

export function setSecondary(newColor) {
	return {
		type: SET_SECONDARY,
		payload: newColor
	}
}