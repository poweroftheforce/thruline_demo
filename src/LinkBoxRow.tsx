import * as React from 'react';
import LinkBox from './LinkBox';

export interface Props {
	row: {
		pod1 	: object,
		pod2	: object
	};
};

export default class LinkBoxRow extends React.Component<any, Props> {
	public render () {
		const { ...pod } = this.props.row;

		return (
			<div className="row">
				<LinkBox {...pod.pod1}/>
				<LinkBox {...pod.pod2}/>
			</div>
		);
	}
}