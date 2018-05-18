import { version } from '../../package.json';
import { Router } from 'express';

export default ({ config, db }) => {
	let api = Router();

    api.post("/refuels", function (req, res) {
        let body = req.body;

        let transaction = body.transaction;


        res.json({});
    });
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
