import fs from "fs";
import yaml from "js-yaml";

// Load settings and configuration
const settings = require('./settings');
const config = loadConfig();


/**
 * Load configuration from `config.yml` file.
 *
 * @returns {object} Configuration from config.yml file
 */
function loadConfig()
{
	let ymlFile = fs.readFileSync('config.yml', 'utf8');
	let config = yaml.load(ymlFile);

	if ("object" === typeof config)
	{
		// Replace placeholders with values
		config = replacePlaceholdersInObject(config, "EXTENSION", config.EXTENSION);
		config = replacePlaceholdersInObject(config, "LIBRARY", config.LIBRARY);

		// Use correct syntax for excluded files
		if (!config.EXCLUDE) {
			config.EXCLUDE = {};
		}
		config.EXCLUDE[settings.buildTarget] = applySyntaxOnExcludedFiles(config.EXCLUDE[settings.buildTarget] || []);
	}

	return config;
}

/**
 * Replace placeholder in elements of object with given string.
 *
 * @param haystack {object} The object with placeholders to be replaced with replacement string
 * @param needle {string} Placeholder value, will be wrapped with '%'
 * @param replacement {string} Replacement value
 * @returns {object} The object with replaced values in elements
 * @internal
 */
function replacePlaceholdersInObject(haystack, needle, replacement)
{
	for (let key in haystack) {
		if (haystack.hasOwnProperty(key)) {
			switch (typeof haystack[key]) {
				case 'object':
					haystack[key] = replacePlaceholdersInObject(haystack[key], needle, replacement);
					break;
				case 'string':
					haystack[key] = haystack[key].replace(`%${needle}%`, replacement);
					break;
			}
		}
	}

	return haystack;
}

/**
 * Apply correct syntax on exclude files which should be added to `gulp.src()`.
 *
 * @param files {object} Object with excluded files
 * @returns {object} Object with correct syntax of excluded files
 * @internal
 */
function applySyntaxOnExcludedFiles(files)
{
	let negateChar = '!';
	return files.map(file => {
		file = file.trim();
		let isIncluded = file.charAt(0) === negateChar;
		return !isIncluded ? negateChar + file : file.substring(negateChar.length);
	});
}


/**
 * Get destination path, combined with asset path.
 *
 * @returns {string} Destination path, combined with asset path
 */
function dist()
{
	return config.PATHS.dist[settings.buildTarget] + '/' + config.PATHS.assetTarget[settings.buildTarget];
}

/**
 * Get watch host of currently selected site.
 *
 * @returns {string} Watch host of currently selected site
 */
function getWatchHost()
{
	return config.SITES && settings.SITE && config.SITES[settings.SITE] ? config.SITES[settings.SITE] : config.WATCH.host;
}

/**
 * Get sources, combined with excluded files, for usage with `gulp.src()`.
 *
 * @param sources {string|object} Default sources for current `gulp.src()` without excluded files
 * @returns {object} Default sources, combined with excluded files
 */
function getSourcesIncludingExcludedFiles(sources)
{
	return ("object" === typeof sources ? sources : [sources]).concat(config.EXCLUDE[settings.buildTarget]);
}

/**
 * Get a formatted string with given arguments.
 *
 * @param {string} format String to be formatted with given arguments
 * @param {*} args Arguments to use when formatting the string
 * @returns {string} The formatted string
 * @see http://php.net/manual/de/function.sprintf.php
 */
function sprintf(format, ...args)
{
	return format.replace(/%[sd]/g, () => args.shift());
}


module.exports = {
	loadConfig,
	dist,
	getWatchHost,
	getSourcesIncludingExcludedFiles,
	sprintf
};
