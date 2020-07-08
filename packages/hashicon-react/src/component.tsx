import React from 'react';
import {Component} from "react";
import {Params, hashicon} from "@emeraldpay/hashicon";

export interface Props {
	value: string;
	size?: number;
	options?: Params
}

export class Hashicon extends Component<Props, {}> {

	render() {
		const value = this.props.value;
		let options = {};

		if (typeof options != "undefined") {
			options = {...options, ...this.props.options};
		}
		if (typeof this.props.size == "number") {
			options = {...options, ...{size: this.props.size}};
		}
		const icon = hashicon(value, options).toDataURL();
		return <img src={icon} alt={value}/>;
	}

}
