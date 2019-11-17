import $ from 'jquery'
window.jQuery = window.$ = $;

// Foundation
import { Foundation } from 'foundation-sites/js/foundation.core.js'
Foundation.addToJquery($);

import { Box } from 'foundation-sites/js/foundation.util.box.js'
import { Keyboard } from 'foundation-sites/js/foundation.util.keyboard.js'

Foundation.Box = Box;
Foundation.Keyboard = Keyboard;

import { Dropdown } from 'foundation-sites/js/foundation.dropdown.js'
Foundation.plugin(Dropdown, 'Dropdown');

import { DropdownMenu } from 'foundation-sites/js/foundation.dropdownMenu.js'
Foundation.plugin(DropdownMenu, 'DropdownMenu');

import { Nest } from 'foundation-sites/js/foundation.util.nest.js'
Foundation.Nest = Nest;

import { Touch } from 'foundation-sites/js/foundation.util.touch.js'
Foundation.Touch = Touch;

$(document).foundation();
