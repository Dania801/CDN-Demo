const request = require('request-promise');
const sleep = require('util').promisify(setTimeout);


(async () => {
	const options = {
		method: 'GET',
		uri: 'https://api.notfortest.com/login',
		headers: {
			'User-Agent': 'Request-Promise'
		}
	};
	const arr = Array.from(Array(1000).keys());
	await Promise.all(arr.map(async num => {
		await sleep(1000);
		request(options)
			.then((data) => {
				console.log('done', data);
			})
			.catch((err) => {
				console.log('error', err);
			});
	}));
})();

