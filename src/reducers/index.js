const initialState = {
	twitters: [{
        id: 1,
        title: 'Twitters oburzenia po słowach.',
        content:
            'Twitters działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
        created: '1 day',
        twitterName: 'hello SOsi'
    },{
        id: 2,
        title: '2Twitters oburzenia po słowach.',
        content:
            '2Twitters działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
        created: '2 day',
        twitterName: 'hello SOsi'
    },],
	notes: [	{
        id: 1,
        title: 'Notes oburzenia po słowach.',
        content:
            'Notes działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
        created: '1 day',
    },{
        id: 2,
        title: 'Notes oburzenia po słowach.',
        content:
            'Notes działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
        created: '1 day',
    },
    {
        id: 3,
        title: 'Notes oburzenia po słowach.',
        content:
            'Notes działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
        created: '1 day',
    },],
	articles: [
		{
			id: 1,
			title: 'Articles oburzenia po słowach.',
			content:
				'Articles działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
			created: '1 day',
			articleUrl: 'https://poczta.onet.pl',
		},
        {
			id: 2,
			title: 'Articles oburzenia po słowach.',
			content:
				'Articles działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
			created: '1 day',
			articleUrl: 'https://poczta.onet.pl',
		},
        {
			id: 3,
			title: 'Articles oburzenia po słowach.',
			content:
				'Articles działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
			created: '1 day',
			articleUrl: 'https://poczta.onet.pl',
		},
	],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            return {
                ...state,
                [action.payload.itemType]: state[action.payload.itemType].filter(item => item.id !== action.payload.id)
            };
        default:
            return state;
    }
};


export default rootReducer
