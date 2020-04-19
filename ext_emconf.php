<?php

/**
 * Extension Manager/Repository config file for ext "fire_department".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'Fire department TYPO3 website theme',
    'description' => 'Complete TYPO3 site package (theme) to build a website for a fire department. With the extension "operations" you can show operations on the website. For latest news are templates for "news" extension prepared. The whole template is optimized for mobile devices too.',
    'category' => 'templates',
    'author' => 'Karsten Nowak',
    'author_email' => 'captnnowi@gmx.de',
    'version' => '1.0.0',
    'state' => 'beta',
    'clearCacheOnLoad' => 1,
    'constraints' => [
        'depends' => [
            'typo3' => '9.5.0 - 10.9.99',
        ],
        'suggests' => [
            'operations' => '4.0.0 - 0.0.0'
        ],
    ],
    'uploadfolder' => 0,
    'createDirs' => '',
    'autoload' => [
        'psr-4' => [
            'Kanow\\FireDepartment\\' => 'Classes'
        ],
    ],
];
