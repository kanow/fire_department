<?php

/**
 * Extension Manager/Repository config file for ext "fire_department".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'Fire department Theme',
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
            'Kanow\\FireDepartment\\' => 'Classes'
        ],
    ],
    'state' => 'alpha',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Karsten Nowak',
    'author_email' => 'captnnowi@gmx.de',
    'author_company' => 'Kanow',
    'version' => '1.0.0',
];
