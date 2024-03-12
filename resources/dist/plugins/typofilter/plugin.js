(function() {
    CKEDITOR.scriptLoader.load('/admin/view/javascript/ckeditor/plugins/typofilter/dialogs/typofilter.js');
    CKEDITOR.plugins.add(
        'typofilter', {
            icons: 'typofilter',
            init: function(editor) {
                // Add the link and unlink buttons.
                editor.ui.addButton('Typofilter', {
                    label: 'Typograph',
                    command: 'typofilter'
                });
                editor.addCommand('typofilter', { exec: typofilterProcess });
            }
        }
    );

    var typofilterProcess = function(e) {
        var selection = e.getSelection();
        if (CKEDITOR.env.ie) {
            selection.unlock(true);
            selection = selection.getNative().createRange().text;
        } else {
            selection = selection.getNative();
        }

        if (selection != '') {
            //process selection
            selection = Typographus.typo_text(selection.toString());
            e.insertHtml(selection);
        }
    };
})();