/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
    // Define changes to default configuration here. For example:
    // config.language = 'fr';
    // config.uiColor = '#AADC6E';
    // config.skin = 'moonocolor';
    // config.skin = 'atlas';
    // config.skin = 'moono-dark';
    // config.skin = 'office2013';

    // Добавление своих шрифтов:
    // config.contentsCss = 'https://fonts.googleapis.com/css2?family=Lobster&display=swap';
    // config.font_names = 'Lobster/lobster;' + config.font_names ;

    config.enterMode       = CKEDITOR.ENTER_BR;
    config.shiftEnterMode  = CKEDITOR.ENTER_P;
    config.autoParagraph   = false;
    config.fillEmptyBlocks = false;


    config.extraAllowedContent = '*{*}';
    config.allowedContent = true;

    config.disableNativeSpellChecker = false;

    config.removePlugins = 'exportpdf'; //image
    // image2 - Enhanced Image Plugin. Для возврата стандартного плагина вставки изображения удалить в строке выше "image" и в строке ниже "image2"
    config.extraPlugins = 'autosave,youtube,codemirror,wordcount,textselection,blockquote,typofilter,ckeditorfa,pastefromword,pastefromgdocs,autolink,vimeo,contextmenu'; //base64image,

    // config.vimeo_width = '640';
    // config.vimeo_height = '480';
    // config.vimeo_responsive = true;
    // config.vimeo_autoplay = false;
    // config.vimeo_disabled_fields = ['txtEmbed', 'chkAutoplay'];

    // config.contentsCss = '/admin/view/javascript/font-awesome/css/font-awesome.min.css';
    CKEDITOR.dtd.$removeEmpty['span'] = false;
    CKEDITOR.dtd.$removeEmpty['i'] = false;

    config.codemirror = {
        // Set this to the theme you wish to use (codemirror themes)
        theme: 'default',
        // Whether or not you want to show line numbers
        lineNumbers: true,
        // Whether or not you want to use line wrapping
        lineWrapping: true,
        // Whether or not you want to highlight matching braces
        matchBrackets: true,
        // Whether or not you want tags to automatically close themselves
        autoCloseTags: true,
        // Whether or not you want Brackets to automatically close themselves
        autoCloseBrackets: true,
        // Whether or not to enable search tools, CTRL+F (Find), CTRL+SHIFT+F (Replace), CTRL+SHIFT+R (Replace All), CTRL+G (Find Next), CTRL+SHIFT+G (Find Previous)
        enableSearchTools: true,
        // Whether or not you wish to enable code folding (requires 'lineNumbers' to be set to 'true')
        enableCodeFolding: true,
        // Whether or not to enable code formatting
        enableCodeFormatting: true,
        // Whether or not to automatically format code should be done when the editor is loaded
        autoFormatOnStart: true,
        // Whether or not to automatically format code should be done every time the source view is opened
        autoFormatOnModeChange: true,
        // Whether or not to automatically format code which has just been uncommented
        autoFormatOnUncomment: true,
        // Define the language specific mode 'htmlmixed' for html including (css, xml, javascript), 'application/x-httpd-php' for php mode including html, or 'text/javascript' for using java script only
        mode: 'htmlmixed',
        // Whether or not to show the search Code button on the toolbar
        showSearchButton: true,
        // Whether or not to show Trailing Spaces
        showTrailingSpace: true,
        // Whether or not to highlight all matches of current word/selection
        highlightMatches: true,
        // Whether or not to show the format button on the toolbar
        showFormatButton: true,
        // Whether or not to show the comment button on the toolbar
        showCommentButton: true,
        // Whether or not to show the uncomment button on the toolbar
        showUncommentButton: true,
        // Whether or not to show the showAutoCompleteButton button on the toolbar
        showAutoCompleteButton: true,
        // Whether or not to highlight the currently active line
        styleActiveLine: true
    };

    config.autosave = {
        // Auto save Key - The Default autosavekey can be overridden from the config ...
        // Savekey : 'autosave_' + window.location + "_" + $('#' + editor.name).attr('name'),

        // Ignore Content older then X
        //The Default Minutes (Default is 1440 which is one day) after the auto saved content is ignored can be overidden from the config ...
        NotOlderThen : 1440,

        // Save Content on Destroy - Setting to Save content on editor destroy (Default is false) ...
        saveOnDestroy : false,

        // Setting to set the Save button to inform the plugin when the content is saved by the user and doesn't need to be stored temporary ...
        saveDetectionSelectors : "a[href^='javascript:__doPostBack'][id*='Save'],a[id*='Cancel']",

        // Notification Type - Setting to set the if you want to show the "Auto Saved" message, and if yes you can show as Notification or as Message in the Status bar (Default is "notification")
        messageType : "notification",

        // Show in the Status Bar
        //messageType : "statusbar",

        // Show no Message
        //messageType : "no",

        // Delay
        delay : 30,

        // The Default Diff Type for the Compare Dialog, you can choose between "sideBySide" or "inline". Default is "sideBySide"
        diffType : "sideBySide",

        // autoLoad when enabled it directly loads the saved content
     autoLoad: false
    };
};
