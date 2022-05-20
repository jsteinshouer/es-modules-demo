import themes from './themes.json' assert { type: 'json' };

const loadTheme = function( theme ) {

    let themeURL = themes[theme];

    import( themeURL, { assert: { type: 'css' } } )
        .then( function( module ) {
            document.adoptedStyleSheets = [module.default];
        } );
}

export default loadTheme;