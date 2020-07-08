import {hashicon} from "./index";

export default {title: 'Hash Icon'};

export const standardIcon = () => {
	const div = document.createElement("div");
	for (var i = 0; i < 32; i++) {
		const x = hashicon("test icon " + i);
		x.style.paddingLeft = "8px";
		div.append(x);
	}
	return div;
}

export const smallIcon = () => {
	const div = document.createElement("div");
	for (var i = 0; i < 32; i++) {
		const x = hashicon("test icon " + i, 50);
		x.style.paddingLeft = "5px";
		div.append(x);
	}
	return div;
}

export const largeIcon = () => {
	const div = document.createElement("div");
	for (var i = 0; i < 32; i++) {
		const x = hashicon("test icon " + i, 200);
		x.style.paddingLeft = "15px";
		div.append(x);
	}
	return div;
}
