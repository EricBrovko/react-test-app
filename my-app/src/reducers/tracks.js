
const initialState = [
	{
		id: Date.now(),
		name: 'Fire'
	},
	{
		id: Date.now(),
		name: 'I am a man'
	}
];

export default function tracks(state = initialState, action) {
	if(action.type === 'ADD_TRACK') {
		return [
			...state,
			action.payload
		];
	}	else if(action.type === 'FETCH_TRACKS_SUCCESS') {
		return action.payload;
	}

	return state;
}
