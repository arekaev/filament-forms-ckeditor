<?php

namespace Arekaev\FilamentFormsCKEditor;

use Filament\Support\Assets\Js;
use Filament\Support\Facades\FilamentAsset;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class FilamentFormsCKEditorServiceProvider extends PackageServiceProvider
{
    public static string $name = 'filament-forms-ckeditor';

    public function configurePackage(Package $package): void
    {
        /*
         * This class is a Package Service Provider
         *
         * More info: https://github.com/spatie/laravel-package-tools
         */
        $package
            ->name(static::$name)
            ->hasConfigFile()
            ->hasViews();
    }

    public function packageBooted(): void
    {
        FilamentAsset::register([
            Js::make('ckeditor', __DIR__.'/../resources/dist/ckeditor.js'),
            Js::make('config-ckeditor', __DIR__.'/../resources/dist/config.js'),
        ], package: 'arekaev/filament-forms-ckeditor');
    }
}
