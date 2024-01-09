import React from 'react'
import { connect } from 'react-redux'
import UserTemplate from '../components/templates/UserTemplate.js'
import Card from '../components/molecules/Card.js'

const Articles = ({articles}) => {
	return (
		<>
			<UserTemplate pageType='articles'>


			{articles.map(item => (
					<Card
						cardType='articles'
						title={item.title}
						created={item.created}
						content={item.content}
						articleUrl={item.articleUrl}
						id={item.id}
						key={item.id}
					/>
				))}



			
			</UserTemplate>
		</>
	)
}

const mapStateToProps = state => {
	return { articles: state.articles }
}

export default connect(mapStateToProps)(Articles)
