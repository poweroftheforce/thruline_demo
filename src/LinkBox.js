import React from 'react';

class LinkBox extends React.Component {
	constructor (props) {
		super(props);
	}

	static defaultProps = {
		title: 'Title',
		subTitle: 'Sub Title',
		lineColor: '#a3c642',
		headline: '',
		text: '',
		linkText: 'Internal Link',
		linkHref: ''
	};

	render () {
		return (
			<div className="col-md-6">
			<div className="LinkBox">
				<h2>{this.props.title}</h2>
			    	<div className="col-md-12">
				      <p className="sub-title">{this.props.subTitle}</p>
				      <hr color={this.props.lineColor}/>
				      <h3>{this.props.headline}</h3>
				      <p>{this.props.text}</p>
				      <a href={this.props.linkHref} target="_blank" rel="noopener noreferrer">{this.props.linkText}</a>
				    </div>
			    </div>
			</div>
		);
	}
}

export default LinkBox;