<?php /** @noinspection PhpUndefinedVariableInspection */

/**
 * Extension Manager/Repository config file for ext "fire_department".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'Fire department TYPO3 website theme',
    'description' => 'Complete TYPO3 site package (theme) to build a website for a fire department. With the extension "operations" you can show operations on the website. For latest news are templates for "news" extension prepared. The whole template is optimized for mobile devices too.',
    'category' => 'templates',
    'author' => 'Karsten Nowak',
    'author_email' => 'captnnowi@gmx.de',
    'version' => '1.3.0',
    'state' => 'beta',
    'clearCacheOnLoad' => true,
    'constraints' => [
        'depends' => [
            'typo3' => '12.4.0 - 13.4.99',
            'operations' => '8.0.0 - 0.0.0',
            'news' => '11.0.0 - 0.0.0',
        ],
    ],
];
