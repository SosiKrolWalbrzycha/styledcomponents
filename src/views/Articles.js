import React from 'react'
import UserTemplate from '../components/templates/UserTemplate.js'
import Card from '../components/molecules/Card.js'

const articlesFound = [
	{
		title: 'Lawina oburzenia po słowach Jana Pietrzaka.',
		content:
			'Podjęcie działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
		articleUrl: 'http://www.onet.pl',
		created: '1 day',
		id: 1,
	},
	{
		title: 'Lawina oburzenia po słowach Jana Pietrzaka.',
		content:
			'Podjęcie działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
		articleUrl: 'http://www.onet.pl',
		created: '1 day',
		id: 2,
	},
	{
		title: 'Lawina oburzenia po słowach Jana Pietrzaka.',
		content:
			'Podjęcie działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
		articleUrl: 'http://www.onet.pl',
		created: '1 day',
		id: 3,
	},
	{
		title: 'Lawina oburzenia po słowach Jana Pietrzaka.',
		content:
			'Podjęcie działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
		articleUrl: 'http://www.onet.pl',
		created: '1 day',
		id: 4,
	},
	{
		title: 'Lawina oburzenia po słowach Jana Pietrzaka.',
		content:
			'Podjęcie działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
		articleUrl: 'http://www.onet.pl',
		created: '1 day',
		id: 5,
	},
	{
		title: 'Lawina oburzenia po słowach Jana Pietrzaka.',
		content:
			'Podjęcie działań w związku ze słowami, jakie wypowiedział w Telewizji Republika Jan Pietrzak, zapowiedział Ośrodek Monitorowania Zachowań Rasistowskich',
		articleUrl: 'http://www.onet.pl',
		created: '1 day',
		id: 6,
	},
	
]

let articleId = 0

const Articles = () => {
	return (
		<>
			<UserTemplate pageType='articles'>


			{articlesFound.map(item => (
					<Card
						cardType='articles'
						title={item.title}
						created={item.created}
						content={item.content}
						articleUrl={item.articleUrl}
						key={articleId++}
						id={item.id}
					/>
				))}



			
			</UserTemplate>
		</>
	)
}

export default Articles;
