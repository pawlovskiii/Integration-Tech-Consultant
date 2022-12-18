const request = require('request');
const fs = require('fs');

const baseUrl = 'https://api.exponea.com';
const projectId = '37b21e42-9cc9-11e9-9bbf-aa978f2cdad2';
const recommendationId = '62cf24ef5d54a5c45755c8be';

const options = {
	method: 'POST',
	url: `${baseUrl}/data/v2/projects/${projectId}/customers/attributes`,
	headers: {
		accept: 'application/json',
		authorization:
			'Basic cXF4Zzc5YnB2OHp3ajk1cTk3cmkwdDZvem44enE2cms0YTR1Z3d6bnU0ejNlMXJobXZ1dHF0MnQ3YzVzbzJ5ZTpndnBram1venA3YXR6MDcxd3Y1eHVrODl5dnBtcmozeHo3bGhlemNlM2x0ZWFzODA2cHg5cmNxMTB5cjMzdTUy',
		'Content-type': 'application/json',
	},
	body: {
		customer_ids: { registered: '1' },
		attributes: [
			{
				type: 'recommendation',
				id: recommendationId,
				fillWithRandom: true,
				size: 4,
			},
		],
	},
	json: true,
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);

	const retrieveValuesFromBody = body.results[0].value;
	console.log(retrieveValuesFromBody);

	const data = JSON.stringify(retrieveValuesFromBody);

	fs.writeFile('retrieveValuesFromBody.json', data, (err) => {
		if (err) {
			throw err;
		}
		console.log('JSON data is saved!');
	});
});
