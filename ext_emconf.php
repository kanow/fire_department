<?php

/**
 * Extension Manager/Repository config file for ext "firebrigade_theme".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'Firebrigade Theme',
    'description' => 'Theme for fire brigade websites with TYPO3',
    'category' => 'theme',
    'constraints' => [
        'depends' => [
            'typo3' => '9.5.0-9.5.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Kanow\\FirebrigadeTheme\\' => 'Classes'
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Karsten Nowak',
    'author_email' => 'captnnowi@gmx.de',
    'author_company' => 'Kanow',
    'version' => '1.0.0',
];
