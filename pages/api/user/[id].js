export default (req, res) => {
	const { id } = req.query;
	if (id) {
		res.statusCode = 200;
		res.json({ id });
	} else {
		res.sendStatus(400);
	}
};
