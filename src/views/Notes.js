import React from 'react'
import UserTemplate from '../components/templates/UserTemplate.js'
import Card from '../components/molecules/Card.js'

const notesFound = [
	{
		title: 'Lawina oburzenia po słowach Jana Pietrzaka.',
		content:
			'Podjęcie działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',

		created: '1 day',
		id: 1,
	},
	{
		title: 'Lawina oburzenia po słowach Jana Pietrzaka.',
		content:
			'Podjęcie działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
		created: '1 day',
		id: 2,
	},
	{
		title: 'Lawina oburzenia po słowach Jana Pietrzaka.',
		content:
			'Podjęcie działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
		created: '1 day',
		id: 3,
	},
	{
		title: 'Lawina oburzenia po słowach Jana Pietrzaka.',
		content:
			'Podjęcie działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
		created: '1 day',
		id: 4,
	},
	{
		title: 'Lawinaeee oburzenia po słowach Jana Pietrzaka.',
		content:
			'Podjęcie działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
		created: '1 day',
		id: 5,
	},
	{
		title: 'Lawinatrt oburzenia po słowach Jana Pietrzaka.',
		content:
			'Podjęcie działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
		created: '1 day',
		id: 6,
	},
]
let articleId = 0

const Notes = () => (
	<UserTemplate pageType='notes'>
		{notesFound.map(item => (
			<Card
				cardType='notes'
				title={item.title}
				created={item.created}
				content={item.content}
				articleUrl={item.articleUrl}
				id={item.id}
			/>
		))}
	</UserTemplate>
)

export default Notes
