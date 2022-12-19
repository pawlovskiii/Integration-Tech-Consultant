const request = require('request');

const baseUrl = 'https://api.exponea.com';
const projectId = '37b21e42-9cc9-11e9-9bbf-aa978f2cdad2';
const catalogId = '63a0c53b024a07034574c79b';

const options = {
	method: 'PUT',
	url: `${baseUrl}/data/v2/projects/${projectId}/catalogs/${catalogId}`,
	headers: {
		accept: 'application/json',
		authorization:
			'Basic cXF4Zzc5YnB2OHp3ajk1cTk3cmkwdDZvem44enE2cms0YTR1Z3d6bnU0ejNlMXJobXZ1dHF0MnQ3YzVzbzJ5ZTpndnBram1venA3YXR6MDcxd3Y1eHVrODl5dnBtcmozeHo3bGhlemNlM2x0ZWFzODA2cHg5cmNxMTB5cjMzdTUy',
		'Content-type': 'application/json',
	},
	body: {
		name: 'Exotic Cars Cracow',
		fields: [
			{
				name: 'lamborghini',
				id: '1',
				model: 'aventador svj',
				engine: 'v12',
			},
			{
				name: 'ferrari',
				id: '2',
				model: 'sf90 stradale',
				engine: 'v8',
			},
		],
	},
	json: true,
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
