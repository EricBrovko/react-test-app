const mockData = [
	{
		id: Date.now(),
		name: 'Pem1'
	},
	{
		id: Date.now(),
		name: 'Pem2'
	}
];

export const getTracks = () => dispatch => {
  setTimeout(() => {
    console.log('I have got tracks');
    dispatch({
      type: 'FETCH_TRACKS_SUCCESS',
      payload: mockData
    })
  }, 2000);
}
