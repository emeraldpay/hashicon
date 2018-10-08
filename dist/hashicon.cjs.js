'use strict';

var figures = [
	[0,8,9,9,9,9,0,8,8,0,0,0,9,9,8,8,0,0,0,9,9,0,8,9,9,9,9,0],[0,0,0,0,0,0,0,0,0,8,9,9,0,0,0,0,8,9,9,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,9,8,0,8,9,0,0,0,0,8,0,0,0,0,0,0,9,0,0,0],[0,0,0,9,0,0,0,0,0,0,8,0,0,0,0,9,8,0,8,9,0,0,0,0,0,0,0,0],[0,0,0,9,0,0,0,0,0,0,8,0,0,0,0,0,0,8,0,0,0,0,0,0,9,0,0,0],[0,0,0,0,0,9,0,0,0,0,0,0,8,0,0,0,0,0,0,8,0,0,0,0,0,0,9,0],[0,9,0,0,0,0,0,0,8,0,0,0,0,0,0,8,0,0,0,0,0,0,9,0,0,0,0,0],[0,8,9,9,0,0,0,0,8,9,9,0,0,0,0,0,0,8,9,9,0,0,0,0,8,9,9,0],[0,0,0,8,9,9,0,0,0,0,8,9,9,0,0,8,9,9,0,0,0,0,8,9,9,0,0,0],[0,0,0,0,0,0,0,8,9,9,0,0,9,8,8,9,9,0,0,9,8,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,9,8,0,0,0,0,0,9,8,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,9,8,0,0,0,0,0,9,8,0,0,0,0,0,0,0,0,0],[0,9,9,9,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,9,9,9,9,9,0,9,0,0,0,0,0,9,9,9,0,0,0,9,9,0,9,9,0,9,9,0],[0,9,9,0,9,9,0,9,9,0,0,0,9,9,9,0,0,0,0,0,9,0,9,9,9,9,9,0],[0,9,0,0,0,9,0,0,0,0,9,0,0,0,0,0,0,9,0,0,0,0,9,0,0,0,9,0],[0,8,8,0,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,0,8,8,0],[0,0,8,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,9,0,0],[0,9,8,0,9,8,0,8,0,0,0,0,0,9,9,0,0,0,0,0,8,0,8,9,0,8,9,0],[0,9,9,0,9,9,0,9,0,8,9,9,0,9,9,0,8,9,9,0,9,0,9,9,0,9,9,0],[0,9,0,0,9,0,0,0,0,8,9,9,0,9,9,0,8,9,9,0,0,0,0,9,0,0,9,0],[0,0,0,0,0,0,0,0,9,8,0,0,0,0,0,9,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,9,0,0,0,8,0,0,9,0,0,0,8,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,9,9,9,9,9,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,9,0,9,0,0,0,9,9,9,9,0,0,0,9,9,9,0,0,0,0,0,9,0],[0,9,0,0,0,0,0,9,9,9,0,0,0,9,9,9,9,0,0,0,9,0,9,0,0,0,0,0],[0,9,0,0,9,9,0,9,9,9,0,0,9,9,9,9,9,0,0,9,9,0,9,0,0,9,9,0],[0,9,9,0,9,9,0,9,0,0,0,0,0,9,0,9,8,8,8,9,0,0,9,0,9,0,9,0],[0,9,0,9,0,9,0,0,9,8,8,8,9,0,9,0,0,0,0,0,9,0,9,9,0,9,9,0],[0,8,0,0,9,0,0,0,0,0,0,0,0,8,9,0,0,0,0,0,0,0,0,8,0,0,9,0],[0,0,9,0,0,8,0,8,0,0,0,0,0,0,0,0,0,0,0,0,9,0,9,0,0,8,0,0],[0,0,9,0,0,9,0,9,0,8,9,9,0,0,0,0,8,9,9,0,9,0,9,0,0,9,0,0],[0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,9,9,9,8,8,0,0,0,0,0,0,0],[0,0,0,9,0,0,0,9,0,9,9,9,0,9,9,0,9,9,9,0,9,0,0,0,9,0,0,0],[0,0,0,9,0,0,0,9,0,0,9,0,0,9,9,0,0,9,0,0,9,0,0,0,9,0,0,0],[0,9,9,9,9,9,0,9,9,9,9,9,9,9,9,9,9,0,9,9,9,0,9,0,0,0,9,0],[0,9,0,0,0,9,0,9,9,9,0,9,9,9,9,9,9,9,9,9,9,0,9,9,9,9,9,0],[0,0,0,0,0,0,0,0,0,9,9,9,0,0,0,0,9,0,9,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,9,9,9,0,0,0,0,9,9,9,0,0,0,0,0,0,0,0,0],[0,0,9,8,0,0,0,0,0,0,0,0,9,8,9,8,0,0,0,0,0,0,0,0,9,8,0,0],[0,0,0,0,0,0,0,0,9,8,0,0,0,0,0,0,0,0,9,8,0,0,0,0,0,0,0,0],[0,0,9,8,0,0,0,0,9,8,0,0,9,8,9,8,0,0,9,8,0,0,0,0,9,8,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,9,8,8,0],[0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0],[0,0,9,9,9,9,0,0,0,0,9,9,9,9,9,9,9,9,0,0,0,0,9,9,9,9,0,0],[0,9,0,0,9,0,0,9,9,9,0,0,0,0,0,0,0,0,9,9,9,0,0,0,0,0,9,0],[0,9,0,0,0,9,0,0,9,9,0,9,9,0,0,9,9,0,9,9,0,0,9,0,0,0,9,0],[0,0,9,9,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,9,9,0,0],[0,0,0,9,9,0,0,9,9,9,9,9,9,0,0,9,9,9,9,9,9,0,0,9,9,0,0,0],[0,9,0,9,0,9,0,0,9,9,9,9,9,0,0,9,9,9,9,9,0,0,9,0,9,0,9,0],[0,0,0,9,8,0,0,9,8,0,0,0,0,0,0,0,0,0,0,9,8,0,0,9,8,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,9,8,0,0,9,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,9,8,0,0,9,8,0,0,9,8,0,0,9,8,0,0,9,8,0,0,9,8,0,0,0],[0,8,8,0,0,9,0,8,8,0,0,9,9,0,8,0,0,9,9,0,0,0,0,9,9,0,0,0],[0,0,0,0,0,0,0,8,8,0,0,9,9,0,0,0,0,9,9,0,0,0,0,9,9,0,0,0],[0,8,8,9,9,0,0,8,8,9,9,0,0,0,0,0,0,8,8,9,9,0,0,8,8,9,9,0],[0,0,0,0,0,9,0,0,0,0,0,8,9,9,9,9,8,0,0,0,0,0,9,0,0,0,0,0],[0,9,9,0,9,9,0,9,9,0,8,0,9,9,9,0,8,0,8,0,9,0,9,9,9,9,9,0],[0,0,9,0,9,0,0,0,9,0,8,0,9,0,9,0,8,0,8,0,9,0,9,0,9,0,9,0],[0,9,0,9,0,9,0,9,0,8,0,8,0,9,0,9,0,8,0,9,0,0,0,9,0,9,0,0],[0,0,9,0,9,9,0,8,9,0,8,0,0,9,8,9,0,8,0,0,9,0,0,9,0,9,9,0],[0,9,9,0,9,9,0,8,9,0,8,0,0,9,8,9,0,8,0,0,9,0,9,9,0,9,9,0],[0,0,0,9,9,0,0,0,0,8,9,0,9,9,0,0,8,9,0,9,9,0,0,0,9,9,0,0],[0,0,0,0,0,0,0,9,9,9,8,8,8,0,0,0,0,9,8,0,0,0,0,9,9,0,0,0],[0,0,0,9,9,0,0,0,0,9,9,0,0,8,0,9,9,0,0,8,8,0,9,0,0,8,8,0],[0,0,0,0,0,0,0,9,9,9,9,9,8,8,0,0,0,0,0,9,8,0,0,0,0,9,9,0],[0,8,0,0,9,9,0,0,8,0,0,0,9,9,0,8,0,0,0,9,9,0,8,0,0,9,9,0],[0,8,0,0,0,9,0,0,0,0,0,0,9,9,0,0,0,0,0,9,9,0,8,0,0,0,9,0],[0,0,0,9,9,0,0,8,8,8,8,0,0,0,0,0,0,9,9,9,9,0,0,8,8,0,0,0],[0,0,0,9,0,0,0,0,0,0,8,8,8,8,9,9,9,9,0,0,0,0,0,0,8,0,0,0],[0,0,0,9,9,0,0,0,8,8,8,0,0,0,0,0,0,9,9,9,9,0,0,8,8,0,0,0],[0,9,9,9,9,0,0,0,0,8,8,0,0,0,0,0,0,9,9,0,0,0,0,8,8,8,8,0],[0,9,9,9,9,0,0,0,0,0,0,8,8,8,9,9,9,0,0,0,0,0,0,8,8,8,8,0],[0,0,9,9,0,0,0,8,9,0,9,8,0,0,8,9,0,9,8,0,0,0,0,9,9,0,0,0],[0,0,9,9,0,0,0,0,0,0,9,8,0,0,9,9,9,8,8,0,0,0,0,0,0,0,0,0],[0,8,8,0,0,0,0,8,8,0,0,0,0,9,8,0,0,0,0,9,9,0,0,0,0,9,9,0],[0,0,0,0,9,9,0,0,0,0,0,0,9,8,9,9,9,9,9,8,8,0,0,0,0,0,0,0],[0,0,8,0,9,0,0,0,0,8,0,9,0,0,0,0,8,0,9,0,0,0,0,8,0,9,0,0],[0,0,9,0,9,9,0,0,9,9,0,8,9,9,0,9,9,0,8,9,9,0,0,9,0,9,9,0],[0,8,9,0,9,9,0,0,8,9,0,9,9,0,0,8,9,0,9,9,0,0,8,9,0,9,9,0],[0,0,0,0,0,0,0,0,9,0,9,0,9,0,0,8,8,0,8,8,0,0,0,0,0,0,0,0],[0,0,0,9,0,9,0,8,9,0,9,0,9,8,8,9,0,9,0,9,8,0,0,0,9,0,9,0],[0,0,9,9,8,0,0,0,0,0,9,9,8,0,0,8,9,9,0,0,0,0,0,8,9,9,0,0],[0,8,9,9,9,9,0,8,8,8,0,0,0,0,0,0,0,0,8,8,8,0,9,9,9,9,8,0],[0,9,9,9,9,8,0,0,0,0,0,0,8,0,0,8,0,0,0,0,0,0,8,9,9,9,9,0],[0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0,0,0,0,8,8,0,0,0,0,0,0,0],[0,8,9,9,0,0,0,0,8,8,9,9,0,0,0,0,8,8,9,9,0,0,0,0,8,9,9,0],[0,0,0,0,0,0,0,0,9,9,9,0,0,0,0,0,0,8,8,8,0,0,0,0,0,0,0,0],[0,0,9,9,8,8,0,0,9,0,0,0,8,8,8,8,0,0,0,9,0,0,8,8,9,9,0,0],[0,0,0,8,9,9,0,0,0,0,8,0,9,9,9,9,0,8,0,0,0,0,9,9,8,0,0,0],[0,9,8,0,0,0,0,0,0,0,0,0,9,8,8,9,0,0,0,0,0,0,0,0,0,8,9,0],[0,0,0,0,9,8,0,9,8,0,0,0,0,0,0,0,0,0,0,9,8,0,9,8,0,0,0,0],[0,9,0,9,9,0,0,0,9,9,9,0,0,8,0,0,9,0,0,8,8,0,0,0,0,8,8,0],[0,0,8,9,9,0,0,0,8,9,9,0,0,0,0,0,0,9,9,8,0,0,0,9,9,8,0,0],[0,9,9,9,9,9,0,0,0,0,0,8,8,8,8,8,8,0,0,0,0,0,9,9,9,9,9,0],[0,8,9,9,9,9,0,0,8,0,0,0,0,0,0,0,0,0,0,8,0,0,9,9,9,9,8,0],[0,0,0,0,0,0,0,0,0,8,9,0,0,0,0,0,0,9,8,0,0,0,0,0,0,0,0,0],[0,8,9,0,9,8,0,9,8,0,0,0,8,9,9,8,0,0,0,8,9,0,8,9,0,9,8,0],[0,0,0,8,9,0,0,0,0,0,8,9,0,0,0,0,0,8,9,0,0,0,0,0,8,9,0,0],[0,0,8,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,9,9,0,0],[0,0,8,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,9,0,0],[0,9,0,8,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,8,0,9,0],[0,9,0,8,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,9,0,0,9,0,8,0,0,0],[0,8,0,9,9,0,0,0,8,9,9,0,9,9,9,9,0,9,8,8,0,0,0,9,9,0,9,0],[0,0,9,9,9,0,0,8,9,9,0,8,0,9,8,9,9,0,8,0,9,0,0,9,9,9,0,0],[0,0,9,9,0,9,0,8,0,9,0,8,9,0,8,0,9,0,8,9,0,0,0,9,9,0,9,0],[0,0,0,9,9,0,0,9,0,8,9,0,9,8,9,0,8,9,0,9,8,0,0,0,9,9,0,0],[0,0,0,9,9,0,0,9,0,8,9,8,9,0,9,0,8,9,8,9,0,0,0,0,9,9,0,0],[0,9,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,0],[0,0,0,9,0,0,0,0,0,8,9,8,0,0,0,0,8,9,8,0,0,0,0,0,9,0,0,0],[0,0,9,8,9,0,0,0,0,8,0,9,0,0,0,0,8,0,9,0,0,0,0,9,8,9,0,0],[0,8,8,9,9,9,0,8,8,0,0,0,0,0,8,9,0,0,0,0,0,0,9,9,0,0,0,0],[0,9,9,0,0,0,0,8,9,0,0,0,0,0,8,8,0,0,0,0,0,0,8,8,9,9,9,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,9,0,0,8,8,0,9,0,0,8,8,0],[0,9,0,0,8,8,0,9,9,9,0,0,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,9,0,0,8,0,0,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,9,0,8,9,9,0,0,0,0,8,9,9,0,9,0,0,0,0,0,0,0],[0,8,8,0,9,9,0,8,0,0,9,0,0,9,9,0,0,9,0,0,8,0,9,9,0,8,8,0],[0,0,9,0,9,0,0,0,8,0,0,0,8,0,0,8,0,0,0,8,0,0,0,9,0,9,0,0],[0,9,0,0,0,8,0,8,9,0,0,0,8,8,8,8,0,0,0,9,8,0,8,0,0,0,9,0],[0,9,9,0,0,0,0,8,9,0,0,0,0,0,8,9,0,0,0,0,0,0,9,9,0,0,0,0],[0,8,8,0,9,9,0,0,8,0,0,0,9,0,0,9,0,0,0,8,0,0,9,9,0,8,8,0],[0,0,9,9,0,0,0,0,0,0,9,9,0,0,0,0,0,0,9,9,0,0,8,8,8,8,8,0],[0,8,8,8,8,8,0,0,0,0,0,9,9,0,0,0,0,9,9,0,0,0,0,9,9,0,0,0],[0,0,0,0,9,9,0,0,0,0,0,0,9,9,8,8,9,0,0,0,9,0,8,0,0,0,0,0],[0,8,0,0,9,9,0,9,8,8,0,0,9,9,0,0,0,0,0,0,9,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,9,0,0,0,0,0,9,0,0,9,0,0],[0,0,0,0,0,0,0,0,0,8,9,9,0,9,9,0,8,9,9,0,0,0,0,0,0,0,0,0],[0,0,9,0,9,0,0,9,0,0,0,0,0,9,8,0,0,0,0,0,8,0,0,8,0,8,0,0],[0,9,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,9,0],[0,0,9,0,9,0,0,8,0,0,0,0,0,9,8,0,0,0,0,0,9,0,0,9,0,9,0,0],[0,0,0,9,9,0,0,0,0,8,9,0,0,0,0,0,8,9,0,0,0,0,0,0,9,9,0,0],[0,0,9,0,9,0,0,0,0,0,0,0,8,0,0,0,0,0,0,8,0,0,0,9,0,9,0,0],[0,0,0,0,0,8,0,8,9,9,9,9,8,8,8,8,9,9,9,9,8,0,8,0,0,0,0,0],[0,0,0,0,0,9,0,0,0,8,8,8,8,8,9,8,8,9,9,0,0,0,8,0,0,0,0,0],[0,0,0,0,0,9,0,0,0,0,0,8,0,9,9,0,8,0,0,0,0,0,9,0,0,0,0,0],[0,0,0,8,8,8,0,0,0,0,0,0,9,9,9,9,0,0,0,0,0,0,8,8,8,0,0,0],[0,0,9,9,8,8,0,9,8,8,0,0,0,0,0,0,0,0,9,9,8,0,9,9,8,8,0,0],[0,0,9,9,9,9,0,8,8,0,0,0,0,0,0,0,0,0,0,8,8,0,9,9,9,9,0,0],[0,0,0,8,8,0,0,0,9,9,9,9,0,0,0,0,9,9,9,9,0,0,0,8,8,0,0,0],[0,0,0,8,9,9,0,0,9,9,8,0,0,0,0,0,0,8,9,9,0,0,9,9,8,0,0,0],[0,0,0,0,8,8,0,0,0,9,9,9,9,0,0,9,9,9,9,0,0,0,8,8,0,0,0,0],[0,0,0,0,0,9,0,0,0,0,0,8,9,0,0,0,0,0,8,9,0,0,0,0,0,0,9,0],[0,9,9,9,8,8,0,0,0,9,0,0,8,8,8,8,0,0,9,0,0,0,8,8,9,9,9,0],[0,8,0,0,0,0,0,8,8,9,9,9,9,9,8,9,9,9,9,9,9,0,0,0,0,0,8,0],[0,8,0,0,0,0,0,9,8,8,9,9,0,0,0,0,8,8,9,9,8,0,0,0,0,0,9,0],[0,9,0,0,0,0,0,9,0,8,0,0,0,0,0,0,0,0,8,0,9,0,0,0,0,0,9,0],[0,8,8,9,9,0,0,8,8,0,0,0,0,0,0,0,0,0,0,8,8,0,9,9,9,8,8,0],[0,9,9,9,9,0,0,0,0,0,0,8,9,9,9,8,8,0,0,0,0,0,0,9,9,9,9,0],[0,9,9,9,9,0,0,0,0,0,0,0,8,8,8,8,0,0,0,0,0,0,0,9,9,9,9,0],[0,0,8,8,0,0,0,0,0,9,9,9,9,0,0,9,9,9,9,0,0,0,0,0,8,8,0,0],[0,9,9,8,0,0,0,0,0,0,8,9,9,0,0,9,9,8,0,0,0,0,0,0,8,9,9,0],[0,9,9,0,0,0,0,0,9,8,9,9,0,0,0,0,8,9,9,8,0,0,0,0,0,8,8,0],[0,9,9,0,0,8,0,9,9,0,0,8,8,0,9,9,0,0,8,8,0,0,9,9,0,0,8,0],[0,8,9,9,9,9,0,8,8,0,0,9,0,0,0,0,9,0,0,8,8,0,9,9,9,8,8,0],[0,0,0,9,0,0,0,0,9,9,0,8,9,0,0,9,9,0,8,9,0,0,0,0,9,0,0,0],[0,0,0,0,0,0,0,8,8,0,9,0,9,0,0,9,0,9,0,8,8,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,9,0,9,0,8,8,8,8,0,9,0,9,0,0,0,0,0,0,0,0],[0,0,0,0,0,9,0,0,0,9,9,0,0,8,9,0,0,8,8,0,0,0,8,0,0,0,0,0],[0,8,0,0,0,0,0,9,0,0,8,8,0,0,0,0,9,9,0,0,8,0,0,0,0,0,9,0],[0,0,0,8,8,0,0,0,9,9,0,0,0,0,0,0,0,0,8,8,0,0,0,9,9,0,0,0],[0,0,8,8,0,0,0,0,0,0,0,9,9,0,0,8,8,0,0,0,0,0,0,0,9,9,0,0],[0,0,9,0,9,0,0,0,0,0,0,0,0,0,9,8,8,0,9,8,8,0,8,0,0,0,8,0],[0,8,0,0,0,8,0,9,8,8,0,9,8,8,0,0,0,0,0,0,0,0,0,9,0,9,0,0],[0,0,8,9,9,0,0,8,9,0,9,0,9,9,8,9,0,9,0,9,9,0,0,8,9,9,0,0],[0,0,0,0,0,9,0,0,9,8,0,0,9,8,0,9,8,0,0,9,8,0,0,0,0,0,9,0],[0,9,0,8,0,9,0,8,0,0,0,0,0,8,0,9,0,0,0,9,0,0,0,8,0,9,0,0],[0,0,9,0,9,0,0,0,8,0,0,0,8,0,9,0,0,0,0,0,9,0,9,0,8,0,9,0],[0,0,0,9,0,8,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0,8,0,9,0,0,0],[0,0,0,0,0,0,0,9,0,0,0,0,0,9,0,8,0,0,0,8,0,0,0,9,0,9,0,0],[0,0,9,0,9,0,0,0,8,0,0,0,8,0,9,0,0,0,0,0,9,0,0,0,0,0,0,0],[0,0,8,9,9,0,0,8,9,9,0,8,9,9,8,9,9,0,8,9,9,0,0,8,9,9,0,0],[0,0,8,9,9,0,0,8,9,0,0,0,9,9,8,9,0,0,0,9,9,0,0,8,9,9,0,0],[0,0,9,0,9,0,0,8,9,9,0,8,9,9,8,9,9,0,8,9,9,0,0,9,0,9,0,0],[0,0,8,8,8,0,0,0,0,0,8,0,0,0,0,0,0,9,0,0,0,0,0,9,9,9,0,0],[0,0,0,0,0,0,0,8,9,9,0,8,9,9,8,9,9,0,8,9,9,0,0,0,0,0,0,0],[0,0,8,8,8,0,0,0,0,0,8,0,0,0,9,9,9,9,9,9,9,0,0,0,0,0,0,0],[0,0,0,0,9,9,0,0,0,0,0,0,9,8,0,0,0,0,0,9,8,0,0,0,0,9,9,0],[0,0,9,9,0,0,0,0,0,0,9,8,0,0,0,0,0,9,8,0,0,0,0,9,9,0,0,0],[0,9,0,0,0,0,0,0,9,8,0,0,0,0,0,9,8,0,0,0,0,0,9,0,0,0,0,0],[0,8,0,0,9,9,0,0,8,8,0,0,9,9,0,8,8,0,0,9,9,0,8,0,0,9,9,0],[0,0,0,0,9,9,0,0,9,9,0,8,9,9,0,9,9,0,8,9,9,0,0,0,0,9,9,0],[0,0,9,9,9,0,0,8,0,0,9,0,0,8,8,0,0,9,0,0,8,0,0,9,9,9,0,0],[0,0,9,0,9,0,0,0,9,9,0,8,9,0,0,9,9,0,8,9,0,0,0,9,0,9,0,0],[0,0,9,0,9,0,0,8,9,0,0,0,9,9,8,9,0,0,0,9,9,0,0,9,0,9,0,0],[0,0,9,9,9,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,9,8,9,9,9,8,9,0,0,0,0,0,0,0,0,8,8,8,8,8,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,9,9,9,0,0],[0,0,0,0,0,0,0,9,0,0,0,0,0,0,9,9,0,0,0,0,0,0,8,8,9,9,9,0],[0,9,0,0,0,0,0,0,9,9,0,0,0,0,0,0,8,8,9,9,9,0,0,0,0,0,0,0],[0,0,9,9,0,0,0,0,0,0,8,8,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,9,9,0,0,0,9,0,0,8,8,9,9,9,9,0,0,0,0,0,0,9,9,9,9,9,0],[0,0,9,9,9,0,0,0,8,8,9,8,8,0,0,8,8,9,8,8,0,0,0,9,9,9,0,0],[0,0,9,9,9,0,0,8,9,9,9,8,9,9,8,9,9,9,8,9,9,0,0,9,9,9,0,0],[0,8,9,0,9,9,0,0,8,9,0,0,9,8,0,0,9,9,0,9,8,0,0,0,9,9,9,0],[0,0,0,9,9,9,0,0,0,9,9,0,9,8,0,8,9,0,0,9,8,0,8,9,0,9,9,0],[0,0,9,9,9,0,0,0,0,0,9,0,0,0,8,8,8,0,9,9,9,0,8,0,0,0,9,0],[0,8,8,8,8,8,0,0,0,0,0,0,0,0,9,9,9,9,9,9,9,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,9,9,9,9,9,9,9,0,0,0,8,0,0,0,0,0,8,8,8,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,9,9,0,9,9,9,9,9,0],[0,0,0,0,0,9,0,0,0,0,0,9,9,0,9,9,9,8,8,0,0,0,0,0,0,0,0,0],[0,0,0,9,9,0,0,9,9,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,9,9,0,0,9,9,8,8,0,0,9,0,0,0,0,0,9,9,0,9,9,9,8,8,0],[0,0,0,0,0,0,0,9,8,9,0,0,0,0,0,0,9,9,0,0,0,0,0,0,8,9,9,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,8,0,9,9,0,0,0,8,9,9,0],[0,0,0,8,9,9,0,0,0,9,8,0,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,9,9,9,0,0,0,9,9,0,9,8,0,9,9,0,0,9,8,0,9,0,0,9,9,0],[0,9,0,0,0,8,0,9,9,9,0,8,8,8,0,0,0,9,0,0,0,0,0,9,9,9,0,0],[0,8,0,0,0,9,0,8,8,0,0,9,9,0,8,0,0,9,9,0,0,0,0,0,9,0,0,0],[0,0,8,8,8,0,0,9,0,0,8,0,0,9,9,9,0,0,0,9,9,0,9,9,0,9,9,0],[0,9,9,9,9,9,0,0,0,0,0,0,9,9,0,0,0,0,0,0,9,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,9,9,9,8,8,0,0,0,0,0,0,9,9,0,0,0,0,0,0,9,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,8,8,0,0,0,0,0,0,9,9,0,0],[0,9,9,9,8,8,0,0,0,0,0,0,9,9,9,9,8,8,0,0,9,0,0,0,9,9,0,0],[0,9,0,8,0,9,0,0,9,0,8,0,9,0,0,8,0,9,0,8,0,0,8,0,9,0,8,0],[0,9,8,9,8,9,0,0,9,0,9,0,9,0,0,9,0,9,0,9,0,0,9,8,9,8,9,0],[0,8,0,8,0,8,0,9,0,9,0,9,0,9,9,0,9,0,9,0,9,0,8,0,8,0,8,0],[0,9,9,0,9,9,0,9,9,0,8,0,9,9,9,9,0,8,0,9,9,0,9,9,0,9,9,0],[0,8,8,9,9,0,0,9,9,0,0,9,0,0,9,9,0,0,9,0,0,0,8,8,9,9,0,0],[0,0,0,9,0,0,0,0,0,9,9,0,0,8,0,9,9,0,0,8,8,0,9,0,0,0,8,0],[0,9,9,0,9,9,0,9,9,0,0,0,9,9,9,0,0,8,0,0,9,0,0,8,8,8,0,0],[0,8,8,9,9,9,0,9,9,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,8,8,9,9,9,0,9,9,0,0,0,0,0,9,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,9,9,0,0,9,9,0,0,0],[0,8,8,9,9,9,0,9,9,0,0,0,0,0,9,0,0,8,8,9,9,0,0,9,9,0,0,0],[0,9,9,8,9,9,0,0,9,0,0,0,9,0,0,9,0,0,0,9,0,0,9,9,8,9,9,0],[0,8,9,9,0,0,0,0,8,8,9,9,0,0,0,8,8,9,9,0,0,0,8,9,9,0,0,0],[0,0,0,8,9,9,0,0,0,0,8,8,9,9,0,0,0,8,8,9,9,0,0,0,8,9,9,0],[0,9,9,8,9,9,0,0,0,0,8,0,0,0,0,0,0,8,0,0,0,0,9,9,8,9,9,0],[0,9,9,9,9,8,0,0,0,0,0,0,8,8,0,0,0,0,0,8,8,0,9,9,9,9,8,0],[0,0,0,8,9,9,0,0,0,8,8,9,9,0,0,8,8,9,9,0,0,0,8,9,9,0,0,0],[0,8,9,9,9,9,0,8,8,0,0,0,0,0,8,8,0,0,0,0,0,0,8,9,9,9,9,0],[0,8,9,9,0,0,0,0,8,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,8,9,9,0,0,0,0,8,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,8,9,9,0,0,0,0,8,9,9,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,8,9,9,9,9,0,0,8,9,9,9,9,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,8,9,9,9,9,0,0,8,9,9,9,9,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,8,9,9,0,8,9,9,8,9,9,0,8,9,9,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,8,9,0,9,8,0,0,8,9,0,9,8,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,8,9,0,9,8,0,0,8,9,0,9,8,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,9,9,9,9,9,8,0,9,9,9,9,9,8,0,0,0,0,0,0,0],[0,9,8,8,8,9,0,9,9,0,0,0,9,9,9,9,0,0,0,9,9,0,9,8,8,8,9,0],[0,0,0,0,0,0,0,8,9,9,9,9,9,0,8,9,9,9,9,9,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,9,9,0,0,0,0,8,9,9,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,9,9,0,0,0,0,8,9,9,0],[0,0,0,0,0,0,0,0,0,8,9,9,0,0,0,0,8,9,9,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,8,9,9,0,0,0,0,8,9,9,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,8,9,0,9,0,9,8,8,9,0,9,0,9,8,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,8,0,9,0,8,0,9,8,0,9,0,8,0,9,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,8,9,0,0,0,9,8,8,9,0,0,0,9,8,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,8,9,0,0,8,9,9,8,9,0,0,8,9,9,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,9,9,9,8,0,0,0,9,9,9,8,0,0,0,0,0,0,0]
];

var sprite = [
	{ x:0, y:0, shape:1, hidden:true },
	{ x:0, y:0, shape:0, light:"top"  },
	{ x:0, y:0.25, shape:1, light:"left" },
	{ x:0, y:0.25, shape:0, light:"left" },
	{ x:0, y:0.5, shape:1, light:"left" },
	{ x:0, y:0.5, shape:0, light:"left" },
	{ x:0, y:0.75, shape:1, hidden:true  },

	{ x:0.25, y:-0.125, shape:0 , light:"top" },
	{ x:0.25, y:0.125, shape:1 , light:"top" },
	{ x:0.25, y:0.125, shape:0 , light:"top" },
	{ x:0.25, y:0.375, shape:1, light:"left" },
	{ x:0.25, y:0.375, shape:0 , light:"left"},
	{ x:0.25, y:0.625, shape:1, light:"left" },
	{ x:0.25, y:0.625, shape:0, light:"left" },

	{ x:0.5, y:0, shape:1 , light:"top" },
	{ x:0.5, y:0, shape:0 , light:"top" },
	{ x:0.5, y:0.25, shape:1 , light:"top" },
	{ x:0.5, y:0.25, shape:0 , light:"right"},
	{ x:0.5, y:0.5, shape:1 , light:"right"},
	{ x:0.5, y:0.5, shape:0 , light:"right"},
	{ x:0.5, y:0.75, shape:1 , light:"right"},

	{ x:0.75, y:-0.125, shape:0, hidden:true  },
	{ x:0.75, y:0.125, shape:1 , light:"top" },
	{ x:0.75, y:0.125, shape:0 , light:"right"},
	{ x:0.75, y:0.375, shape:1 , light:"right"},
	{ x:0.75, y:0.375, shape:0 , light:"right"},
	{ x:0.75, y:0.625, shape:1 , light:"right"},
	{ x:0.75, y:0.625, shape:0, hidden:true  }
];

// triangle shapes left and right
var shapes = [
	{ x1:0, y1:0.25, x2:0.25, y2:0.125, x3:0.25, y3:0.375 },
	{ x1:0, y1:0, x2:0.25, y2:0.125, x3:0, y3:0.25 }
];

/**
* Performs a deep merge of objects and returns new object. Does not modify
* objects (immutable) and merges arrays via concatenation.
*
* @param {...object} objects - Objects to merge
* @returns {object} New object with merged key/values
*/
const deepMerge = (...objects) => {
  const isObject = obj => obj && typeof obj === 'object';

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach(key => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal);
      }
      else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = deepMerge(pVal, oVal);
      }
      else {
        prev[key] = oVal;
      }
    });

    return prev;
  }, {});
};

// outputs n even integers from a hash
const chunkHash = (hash, n, prefix="0x") => {
	hash = hash.split(prefix).pop();
	const chunks = Math.floor(  hash.length / n );

	const array = hash.match(new RegExp('.{1,' + chunks + '}', 'g'));

	// hex first 4 digits > int
	for (let i = 0; i < array.length; i++) {
		array[i] = parseInt(array[i].substring(1, 5), 16);
	}

	return array
};


const createCanvas = size => {
	const canvas = document.createElement('canvas');

	canvas.style.width = size + "px";
	canvas.style.height = size + "px";

	// Hi-DPI / Retina
	var dpr = window.devicePixelRatio || 1;
	canvas.width = size * dpr;
	canvas.height = size * dpr;

	const ctx = canvas.getContext('2d');
	ctx.scale(dpr, dpr);

	return canvas;
};

/**
 * map numbers for param
 * @param  {Object} param Parameter containing min and max values
 * @param  {Number} value Number to process
 * @return {Number}       Normalised number
 */
function processParam(param, value) {
	return param.min + (value % ( param.max - param.min ));
}


/**
 * Canvas renderer
 * @param  {String} hash   Hex string seed value
 * @param  {Object} params Rendering parameters
 * @return {Object}        Canvas HTML object
 */
function renderer(hash, params) {
	const chunks = chunkHash(hash, 6);	// Parse hash and calculate param values
	const hue = processParam(params.hue, chunks[0]);
	const saturation = processParam(params.saturation, chunks[1]);
	const lightness = processParam(params.lightness, chunks[2]);
	const shift = processParam(params.shift, chunks[3]);
	const figurealpha = processParam(params.figurealpha, chunks[5]);
	const figure = chunks[4] % figures.length;


	// Draw on canvas
	const size = params.size || 100;
	const canvas = createCanvas(size);
	const ctx = canvas.getContext('2d');

	sprite.forEach((line, i) => {
		const light = params.light.enabled ? params.light[line.light] : 1;

		const x = parseInt(hash.split("x").pop().substr(i,1), 16);	// TODO processParam
		const variation = params.variation.enabled ? processParam(params.variation, x) : 0;

		// Draw on canvas
		ctx.beginPath();

		if (!line.hidden) {
			const shape = shapes[line.shape];
			ctx.moveTo( size * (shape.x1 + line.x), size * (shape.y1 + line.y) );
			ctx.lineTo( size * (shape.x2 + line.x), size * (shape.y2 + line.y) );
			ctx.lineTo( size * (shape.x3 + line.x) , size * (shape.y3 + line.y) );
		}

		// Fill background
		ctx.fillStyle = `hsla(${hue+variation}, ${saturation}%, ${lightness+variation+light}%, 1)`;
		ctx.fill();

		// draw figure ( whats when opacity of data > 0 )
		if( figures[figure][i] > 0 ){
			const alpha = figures[figure][i] * figurealpha / 10;
			ctx.fillStyle = `hsla(${shift+variation+shift}, ${saturation}%, ${lightness+variation+light}%, ${alpha})`;
			ctx.fill();
		}
	});
	return canvas;
}

var params = {
	hue: { min: 0, max: 360 },
	saturation: { min: 70, max: 100 },
	lightness: { min: 45, max: 65 },
	variation: { min: 2, max: 6, enabled: true },
	shift: { min: 85, max: 180 },
	figurealpha: { min: .7, max: 1.2 },
	light:{ top:10, right:-8, left:-4, enabled: true}
};

function hashicon(hash, override_params = {}) {
	// TODO: validate hash format

	// overload "override_params": allow to call with only size value (numeric)
	let _params = Number.isInteger(override_params) ? { size: override_params } : {...override_params};
	_params = deepMerge(params, _params);		// Deep merge

	return renderer(hash, _params);
}

module.exports = hashicon;
