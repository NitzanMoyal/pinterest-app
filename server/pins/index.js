const router = require('express').Router();
const Pins = require('./PinsModel');
const mongoosePaginate = require('mongoose-paginate');

router.get('/', (req, res) => {
	
	const { userId, query } = req.query;
	const filter = {};
	if (userId) filter.author = userId;
	if (query){
		const rgx = new RegExp(query, "i");
		filter.$or=[
			{ body: rgx },
			{ title: rgx },
		];
	}
	Pins.find({})
		.then(pins => res.send(pins))
		.catch(e => res.status(400).send(e.message));
});


router.post('/', (req, res) => {
	const pin = new Pins(req.body);
	pin.save()
		.then(pin => res.send(pin))
		.catch(e => res.status(400).send(e.message));
	
});

router.get('/:userId', (req, res) => {

	User.findById(req.params.userId)
			.then(pins => res.send(pins))
			.catch(e => res.status(400).send(e.message));
});

router.put('/:userId', (req, res) => {
	User.findByIdAndUpdate(req.params.userId, req.body)
			.then(pins => res.send(pins))
			.catch(e => res.status(400).send(e.message));
			
});

router.delete('/:userId', (req, res) => {
	User.findByIdAndRemove(req.params.userId)
			.then(pins => res.send(pins))
			.catch(e => res.status(400).send(e.message));

});


module.exports = router;