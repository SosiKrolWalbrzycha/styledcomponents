import React from 'react'
import { connect } from 'react-redux'
import UserTemplate from '../components/templates/UserTemplate.js'
import Card from '../components/molecules/Card.js'

const Twitters = ({ twitters }) => (
	<UserTemplate pageType='twitters'>
		
		{twitters.map(item => (
			<Card cardType='twitters' 
			id={item.id} 
			title={item.title} 
			created={item.created} 
			content={item.content}
			twitterName={item.twitterName} />
		))}
	</UserTemplate>
)

const mapStateToProps = state => {
	return { twitters: state.twitters }
}

export default connect(mapStateToProps)(Twitters)
