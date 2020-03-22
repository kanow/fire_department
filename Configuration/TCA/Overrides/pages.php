<?php
defined('TYPO3_MODE') || die();

call_user_func(function ($extensionKey) {

    $ll = 'LLL:EXT:' . $extensionKey . '/Resources/Private/Language/locallang_db.xlf:';

    $GLOBALS['TCA']['pages']['types']['1']['columnsOverrides']['media']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants'] = array_merge(
        $GLOBALS['TCA']['pages']['types']['1']['columnsOverrides']['media']['config']['overrideChildTca']['columns']['crop']['config']['cropVariants'] ?? [],
        [
            'default' => [
                'title' => $ll . 'pageHeader.crop_variant.title',
                'allowedAspectRatios' => [
                    '3:1' => [
                        'title' => $ll . 'pageHeader.crop_variant.default',
                        'value' => 3 / 1
                    ],
                ],
                'selectedRatio' => '3:1',
            ],
        ]
    );

    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
        $extensionKey,
        'Configuration/TsConfig/Page/All.page.typoscript',
        'EXT:fire_department TSConfig');

}, 'fire_department');
