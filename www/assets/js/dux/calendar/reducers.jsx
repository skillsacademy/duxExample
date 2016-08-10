export default function calendar(state = {}, action){
	switch(action.type) {
		case 'SWITCH':             
			return Object.assign({}, state, {
			isOn: action.isTrue
		});  		          
		default:
			return state;
	}
}
