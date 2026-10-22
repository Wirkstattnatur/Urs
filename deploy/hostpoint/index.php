<?php
declare(strict_types=1);

// The German homepage is the crawlable default. Only an explicit language
// choice is allowed to redirect, so search engines never see a negotiated 307
// on the canonical root URL.
$useEnglish = ($_COOKIE['wirkstattnatur-locale'] ?? null) === 'en';

header('Cache-Control: private, no-store');
header('Vary: Cookie');

if ($useEnglish) {
    $query = $_SERVER['QUERY_STRING'] ?? '';
    header('Location: /en' . ($query !== '' ? '?' . $query : ''), true, 307);
    exit;
}

header('Content-Type: text/html; charset=UTF-8');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'HEAD') {
    readfile(__DIR__ . '/index.html');
}
