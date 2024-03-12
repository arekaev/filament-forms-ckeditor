<?php

namespace Arekaev\FilamentFormsCKEditor\Components;

// use Filament\Forms\Components\Concerns;
// use Filament\Forms\Components\Contracts;
use Filament\Forms\Components\Field;

class CKEditor extends Field //implements Contracts\CanBeLengthConstrained, Contracts\HasFileAttachments
{
    // use Concerns\CanBeLengthConstrained;
    // use Concerns\HasFileAttachments;
    // use Concerns\HasPlaceholder;

    protected string $view = 'filament-forms-ckeditor::c-k-editor';

    protected function setUp(): void
	{
		parent::setUp();
		$this->default('');
		$this->dehydrated(false);
		$this->disableLabel();
	}

}
