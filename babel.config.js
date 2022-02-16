module.exports = {
    'presets': [
        [
            '@babel/env',
            {
                'modules': false,
                'targets': '> 0.25%, not dead',
            },
        ],
        '@babel/preset-react',
    ],
    'comments': false,
    'minified': true,
}
