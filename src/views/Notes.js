import React from 'react'
import { connect } from 'react-redux'
import UserTemplate from '../components/templates/UserTemplate.js'
import Card from '../components/molecules/Card.js'



const Notes = ({notes}) => (
	<UserTemplate pageType='notes'>
		{notes.map(item => (
			<Card
				cardType='notes'
				title={item.title}
				created={item.created}
				content={item.content}
				articleUrl={item.articleUrl}
				id={item.id}
				key={item.id}
			/>
		))}
	</UserTemplate>
)

const mapStateToProps = state => {
	return { notes: state.notes }
}

export default connect(mapStateToProps)(Notes)
