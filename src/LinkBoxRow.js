import React from 'react';
import LinkBox from './LinkBox';

class LinkBoxRow extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className="row">
				<LinkBox {...this.props.pod1}/>
				<LinkBox {...this.props.pod2}/>
			</div>
		);
	}
}

export default LinkBoxRow;