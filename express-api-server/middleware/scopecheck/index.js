module.exports = () => {
	function adminscopecheck(req, res, next) {
		if (req.authInfo.checkScope('$XSAPPNAME.Administrator')) {
			next();
		} else {
			res.status(403).send('Forbidden');
		}
	}

	function managerscopecheck(req, res, next) {
		if (req.authInfo.checkScope('$XSAPPNAME.Administrator')) {
			next();
		} else {
			res.status(403).send('Forbidden');
		}
	}

	function userscopecheck(req, res, next) {
		if (req.authInfo.checkScope('$XSAPPNAME.Manager')) {
			next();
		} else {
			res.status(403).send('Forbidden');
		}
	}
	return {
		adminscopecheck,
		managerscopecheck,
		userscopecheck
	};
};