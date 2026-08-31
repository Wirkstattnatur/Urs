<?php
declare(strict_types=1);

function prefersEnglish(?string $acceptLanguage): bool
{
    $primaryLanguage = null;
    $highestQuality = -1.0;

    foreach (explode(',', $acceptLanguage ?? '') as $languageRange) {
        $parts = array_map('trim', explode(';', strtolower($languageRange)));
        $language = array_shift($parts);
        if ($language === null || $language === '') {
            continue;
        }

        $quality = 1.0;
        foreach ($parts as $parameter) {
            if (str_starts_with($parameter, 'q=')) {
                $parsedQuality = filter_var(substr($parameter, 2), FILTER_VALIDATE_FLOAT);
                $quality = $parsedQuality !== false && $parsedQuality >= 0 && $parsedQuality <= 1
                    ? (float) $parsedQuality
                    : 0.0;
                break;
            }
        }

        if ($quality > $highestQuality) {
            $primaryLanguage = $language;
            $highestQuality = $quality;
        }
    }

    return $primaryLanguage === 'en' || str_starts_with($primaryLanguage ?? '', 'en-');
}

$storedLocale = $_COOKIE['wirkstattnatur-locale'] ?? null;
$useEnglish = $storedLocale === 'en'
    || ($storedLocale !== 'de' && prefersEnglish($_SERVER['HTTP_ACCEPT_LANGUAGE'] ?? null));

header('Cache-Control: private, no-store');
header('Vary: Accept-Language, Cookie');

if ($useEnglish) {
    $query = $_SERVER['QUERY_STRING'] ?? '';
    header('Location: /en' . ($query !== '' ? '?' . $query : ''), true, 307);
    exit;
}

header('Content-Type: text/html; charset=UTF-8');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'HEAD') {
    readfile(__DIR__ . '/index.html');
}
