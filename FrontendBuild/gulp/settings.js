import yargs from "yargs";

const TYPO3 = !!(yargs.argv['typo3']);

module.exports = {

	// Check for TYPO3 mode
	TYPO3: TYPO3,
	buildTarget: TYPO3 ? "typo3" : "dist",

	// Check for --production flag
	PRODUCTION: !!(yargs.argv['production']),

	// Check for --site flag
	SITE: yargs.argv.site,

};
