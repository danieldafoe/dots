module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 16,

    // font family with optional fallbacks
    fontFamily: '"Fira Code", "Fantasque Sans Mono", "Source Code Pro", "Iosevka Term", "Roboto Mono", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(255,255,255,0.75)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    backgroundColor: '#111',

    // border color (window, tabs)
    borderColor: 'transparent',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '2rem',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#ff0000',
      green: '#33ff00',
      yellow: '#ffff00',
      blue: '#0066ff',
      magenta: '#cc00ff',
      cyan: '#00ffff',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff0000',
      lightGreen: '#33ff00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#00ffff',
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: '/bin/zsh',

    materialBox: {
      backgroundVibrancy: true,
      hideTrafficLights: true,
      scheme: 'dracula',
    },
    pokemon: [
      'tangela',
      'gengar',
      'articuno',
      'flareon',
      'jolteon',
    ], // Choose your favorite pokemon theme
    unibody: 'false', // Choose the color of the window header
    poketab: 'true', // Deactivate your theme's poketab

    hyperBorder: {
      borderColors: ['#1D976C', '#93F9B9'],
      blurredColors: ['#177C59', '#84E0A6']
    }
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
  	'hypercwd',
    'hyper-tabs-enhanced',
    'hyperborder',
    'hyperminimal',
    'hyper-night-owl',
    'hyper-pane',
    'hyperterm-tabs',
    'hyper-tab-icons',
    'hyper-search'
    // 'hyper-pokemon',
  	// 'hyper-statusline',
  	// 'hyper-chesterish',
    // 'hypergravity'
  	// 'hyperterm-alternatescroll'
    // 'hyper-broadcast'
    // 'hyper-cat-cursor'
    // 'hyper-command-gifs'
    // 'htyt',
    // 'hyper-flat'
    // 'hyper-material-box'
  ],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
