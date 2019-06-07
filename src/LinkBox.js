import React from 'react';

class LinkBox extends React.Component {
	constructor (props) {
		super(props);
	}

	static defaultProps = {
		title: 'Foo',
		subTitle: 'Bar'
	};

	render () {
		return (
			<div className="col-md-6">
			<div className="LinkBox">
				<h2>{this.props.title}</h2>
			    	<div className="col-md-12">
				      <p className="sub-title">{this.props.subTitle}</p>
				      <h3>Headline</h3>
				      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				      <a href="http://www.google.com">Internal Link</a>
				    </div>
			    </div>
			</div>
		);
	}
}

export default LinkBox;