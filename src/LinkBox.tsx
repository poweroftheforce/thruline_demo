import * as React from 'react';

export interface Props {
	title 		: string;
	subTitle 	: string;
	lineColor 	: string;
	headline 	: string;
	text 		: string;
	linkText 	: string;
	linkHref	: string;
}

export default class LinkBox extends React.Component<Props> {
	public render () {
		const { title, subTitle, lineColor, headline, text, linkHref } = this.props;

		return (
			<div className="col-md-6">
				<div className="LinkBox">
					<h2>{title}</h2>
			    	<div className="col-md-12">
				      <p className="sub-title">{subTitle}</p>
				      <hr color={lineColor}/>
				      <h3>{headline}</h3>
				      <p>{text}</p>
				      <a href={linkHref} target="_blank" rel="noopener noreferrer">Internal Link</a>
				    </div>
			    </div>
			</div>
		);
	}
}