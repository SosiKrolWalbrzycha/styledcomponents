
import Button from '../components/Button.js'
import GlobalStyle from '../theme/GlobalStyle.js'

function Root() {
	return (
		<div className='App'>
			<GlobalStyle />
			<h1>hello</h1>
			<Button>Close / Save</Button>
			<Button secondary>remove</Button>
			<Button width="300px">remove</Button>
		</div>
	)
}

export default Root
