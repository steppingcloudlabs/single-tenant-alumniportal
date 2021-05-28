module.exports = () => {
	function logincount(req, res, next) {
		if (req.authInfo.checkScope('$XSAPPNAME.Administrator')) {
			next();
		} else {
			res.status(403).send('Forbidden');
		}
	}

	function signupcount(req, res, next) {
		if (req.authInfo.checkScope('$XSAPPNAME.Administrator')) {
			next();
		} else {
			res.status(403).send('Forbidden');
		}
	}

	function documentdownloadcount(req, res, next) {
		if (req.authInfo.checkScope('$XSAPPNAME.Manager')) {
			next();
		} else {
			res.status(403).send('Forbidden');
		}
	}

	function documentuploadcount(req, res, next) {
		if (req.authInfo.checkScope('$XSAPPNAME.Manager')) {
			next();
		} else {
			res.status(403).send('Forbidden');
		}
	}
	function ticketopencount(req, res, next) {
		if (req.authInfo.checkScope('$XSAPPNAME.Manager')) {
			next();
		} else {
			res.status(403).send('Forbidden');
		}
	}
	function ticketclosedcout(req, res, next) {
		if (req.authInfo.checkScope('$XSAPPNAME.Manager')) {
			next();
		} else {
			res.status(403).send('Forbidden');
		}
	}
	

	return {
		logincount,
		signupcount,
		documentdownloadcount,
		documentuploadcount,
		ticketopencount,
		ticketclosedcout
	};
};