<?php

namespace Arekaev\FilamentFormsCKEditor\Tests;

use Arekaev\FilamentFormsCKEditor\FilamentFormsCKEditorServiceProvider;
use Orchestra\Testbench\TestCase as Orchestra;

class TestCase extends Orchestra
{
    protected function getPackageProviders($app)
    {
        return [
            FilamentFormsCKEditorServiceProvider::class,
        ];
    }
}
