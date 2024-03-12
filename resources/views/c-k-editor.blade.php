<x-dynamic-component
:component="$getFieldWrapperView()"
:id="$getId()"
:label="$getLabel()"
:label-sr-only="$isLabelHidden()"
:helper-text="$getHelperText()"
:hint="$getHint()"
{{--:hint-action="$getHintAction()"--}}
:hint-color="$getHintColor()"
:hint-icon="$getHintIcon()"
:required="$isRequired()"
:state-path="$getStatePath()"
wire:ignore
>
	<textarea wire:ignore
		wire:model.lazy="{{ $getId() }}"
		id="{{ $getId() }}"
		{{ $attributes->merge(['class' => 'form-control']) }}
>	</textarea>

	@once
		@push('scripts')

		<script>
		CKEDITOR.config.image_previewText = '';

		function initializeCKEditor() {
			if (CKEDITOR.instances['content']) {
				CKEDITOR.instances['content'].destroy(true);
			}

			let editor = CKEDITOR.replace('{{ $getId() }}', {
				{{--filebrowserUploadUrl: '{{ route('upload' , [ '_token' => csrf_token() ]) }}',--}}
				filebrowserUploadMethod: 'form',
				extraPlugins: 'justify,colorbutton,colordialog,panelbutton',
			});

			editor.on('change', function() {
				@this.set('data.content', editor.getData());
			});

			CKEDITOR.on('dialogDefinition', function(ev) {
				var dialogName = ev.data.name;
				var dialogDefinition = ev.data.definition;
			});
		}

		initializeCKEditor();

		document.addEventListener('livewire:dom:afterUpdate', initializeCKEditor);
		</script>
		@endpush
	@endonce
</x-dynamic-component>
