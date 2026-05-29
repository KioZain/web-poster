const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const path = require('path')

// All pages
const pages = [
  {
    template: 'index.html',
    chunks: ['index', 'menubar', 'gsap-animation', 'marquee', 'scrollposters']
  },
  {
    template: 'about.html',
    chunks: ['index', 'menubar']
  },
  { template: 'handbook.html', chunks: ['index', 'menubar', 'tabs'] },
  { template: 'posters.html', chunks: ['index', 'menubar', 'posters'] },
  { template: 'modules.html', chunks: ['index', 'menubar', 'tabs-modules'] },
  {
    template: 'posters/poster.html',
    chunks: ['index', 'menubar', 'poster-page']
  },

  // Handbook
  {
    template: 'handbook/part_1/chapter_1/introduction.html',
    chunks: ['menubar', 'index', 'handbook-nav']
  },
  // Parts of the handbook
  {
    template: 'handbook/part_1/part_1.html',
    chunks: ['menubar', 'index', 'handbook-nav']
  },
  {
    template: 'handbook/part_2/part_2.html',
    chunks: ['menubar', 'index', 'handbook-nav']
  },
  // Chapter 1
  {
    template: 'handbook/part_1/chapter_1/chapter_1.html',
    chunks: ['menubar', 'index', 'handbook-nav']
  },
  {
    template: 'handbook/part_1/chapter_1/about_webposter.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_1/chapter_1/poster-vs-website.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_1/chapter_1/print-vs-web.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_1/chapter_1/static-dynamic.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },

  //  Chapter 2
  {
    template: 'handbook/part_1/chapter_2/chapter_2.html',
    chunks: ['menubar', 'index', 'handbook-nav']
  },
  {
    template: 'handbook/part_1/chapter_2/further-development.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_1/chapter_2/why-create.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  // Chapter 3
  {
    template: 'handbook/part_1/chapter_3/chapter_3.html',
    chunks: ['menubar', 'index', 'handbook-nav']
  },
  {
    template: 'handbook/part_1/chapter_3/catalog-guide.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_1/chapter_3/selected-works.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  // ----------------------------------------------------------
  // Part 2
  // Chapter 1
  {
    template: 'handbook/part_2/chapter_1/chapter_2_1.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  // Chapter 2
  {
    template: 'handbook/part_2/chapter_2/chapter_2_2.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  // Finding idea
  {
    template: 'handbook/part_2/chapter_1/finding-idea.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_1/defining-style.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_1/modules-overview.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_2/grid-composition.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_2/refining-layout.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_2/adaptive-responsive.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_2/creating-breakpoints.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_2/preparing-assets.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  // Chapter 2

  {
    template: 'handbook/part_2/chapter_3/chapter_2_3.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_3/grid-flex-absolute.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_3/project-structure.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_3/units.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_3/media-quireies.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_3/working-with-svg.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  // chapter 4
  {
    template: 'handbook/part_2/chapter_4/chapter_2_4.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_4/keyframes.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_4/timing-functions.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_4/transitions.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  // chapter 5
  {
    template: 'handbook/part_2/chapter_5/chapter_2_5.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_5/events.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing',
      'demo-js-basics'
    ]
  },
  {
    template: 'handbook/part_2/chapter_5/randomness.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing',
      'demo-js-randomisation'
    ]
  },
  {
    template: 'handbook/part_2/chapter_5/cursor.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing',
      'demo-js-cursor'
    ]
  },
  {
    template: 'handbook/part_2/chapter_6/chapter_2_6.html',
    chunks: ['menubar', 'index', 'handbook-nav', 'codestyle', 'anchorlinks']
  },
  {
    template: 'handbook/part_2/chapter_6/github-pages.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },
  {
    template: 'handbook/part_2/chapter_6/promotion.html',
    chunks: [
      'menubar',
      'index',
      'handbook-nav',
      'codestyle',
      'anchorlinks',
      'rating',
      'preview',
      'sharing'
    ]
  },

  // { template: 'handbook/part_1/chapter_1/another_article.html', chunks: ['page'] },

  // Static modules
  {
    template: 'modules/static/movement.html',
    chunks: ['menubar', 'index', 'codestyle', 'anchorlinks', 'modules-nav']
  },
  {
    template: 'modules/static/rotation.html',
    chunks: ['menubar', 'index', 'codestyle', 'anchorlinks', 'modules-nav']
  },
  {
    template: 'modules/static/transformation.html',
    chunks: ['menubar', 'index', 'codestyle', 'anchorlinks', 'modules-nav']
  },
  {
    template: 'modules/static/text.html',
    chunks: ['menubar', 'index', 'codestyle', 'anchorlinks', 'modules-nav']
  },
  {
    template: 'modules/static/hover.html',
    chunks: ['menubar', 'index', 'codestyle', 'anchorlinks', 'modules-nav']
  },
  {
    template: 'modules/dynamic/click.html',
    chunks: [
      'menubar',
      'index',
      'codestyle',
      'anchorlinks',
      'modules-nav',
      'demo-click'
    ]
  },
  {
    template: 'modules/dynamic/drag.html',
    chunks: [
      'menubar',
      'index',
      'codestyle',
      'anchorlinks',
      'modules-nav',
      'demo-drag'
    ]
  }
]

// Creating plugins for each HTML page
const htmlPlugins = pages.map(({ template, chunks }) => {
  return new HtmlWebpackPlugin({
    template: `./src/${template}`,
    filename: `./${template}`,
    chunks: chunks,
    hash: true,
    scriptLoading: 'blocking',
    favicon: 'src/images/icons/favicon.ico'
  })
})

module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/page.jsx',
    menubar: './src/javascript/menubar/menubar.js',
    posters: './src/javascript/posters.js',
    marquee: './src/javascript/gsap/marquee.js',
    scrollposters: './src/javascript/gsap/scrollposters.js',
    codestyle: './src/javascript/codestyle.js',
    anchorlinks: './src/javascript/components/anchorlinks/anchorlinks.js',
    rating: './src/javascript/rating.js',
    sharing: './src/javascript/sharing.js',
    preview: './src/javascript/preview.js',
    tabs: './src/javascript/tabs.js',
    'poster-page': './src/javascript/poster-page.js',
    'tabs-modules': './src/javascript/tabs-modules.js',
    'handbook-nav': './src/javascript/handbook-nav.js',
    'modules-nav': './src/javascript/modules-nav.js',
    'gsap-animation': './src/javascript/gsap/animation.js',
    // dymanic
    'demo-click': './src/javascript/demo/click.js',
    'demo-drag': './src/javascript/demo/drag.js',
    'demo-js-basics': './src/javascript/demo/basics.js',
    'demo-js-randomisation': './src/javascript/demo/random.js',
    'demo-js-cursor': './src/javascript/demo/cursor.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true,
  },

  module: {
    rules: [
      // JS & JSX
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },

      // CSS
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },

      {
        test: /\.html$/i,
        loader: 'html-loader'
      },

      {
        test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },

      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },

  // Plugins
  plugins: [
    new Dotenv(),
    new MiniCssExtractPlugin(),

    // spread operator to add all HTML
    ...htmlPlugins,

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    // new HtmlWebpackPartialsPlugin([
    //   {
    //     path: path.join(__dirname, './src/partials/handbook-nav.html'),
    //     location: 'handbook-nav',
    //     template_filename: '*',
    //     priority: 'replace'
    //   }
    // ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/rate.html'),
        location: 'rate',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/menubar.html'),
        location: 'menubar',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/footerbar.html'),
        location: 'footerbar',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/square.html'),
        location: 'square',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/movement/linear.html'),
        location: 'linear',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/movement/drift.html'),
        location: 'drift',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/movement/elastic.html'
        ),
        location: 'elastic',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/movement/orbit.html'),
        location: 'orbit',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/movement/pendulum.html'
        ),
        location: 'pendulum',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/movement/pseudorandom.html'
        ),
        location: 'pseudorandom',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/movement/pulse.html'),
        location: 'pulse',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    // rotation modules
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/rotation/threed.html'),
        location: 'threed',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/rotation/cascade.html'
        ),
        location: 'cascade',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/rotation/continious.html'
        ),
        location: 'continious',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/rotation/counter.html'
        ),
        location: 'counter',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/rotation/cylinder.html'
        ),
        location: 'cylinder',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/rotation/offset.html'),
        location: 'offset',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/rotation/scaling.html'
        ),
        location: 'scaling',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/rotation/wobble.html'),
        location: 'wobble',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    // Transofmation
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/transformation/scale.html'
        ),
        location: 'scale',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/transformation/flip.html'
        ),
        location: 'flip',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/transformation/perspective.html'
        ),
        location: 'perspective',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/transformation/skew.html'
        ),
        location: 'skew',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/transformation/squash.html'
        ),
        location: 'squash',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/transformation/stretch.html'
        ),
        location: 'stretch',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/transformation/morph.html'
        ),
        location: 'morph',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/transformation/order.html'
        ),
        location: 'order',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/transformation/glitch.html'
        ),
        location: 'glitch',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/transformation/breathing.html'
        ),
        location: 'breathing',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/transformation/explode.html'
        ),
        location: 'explode',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/transformation/spread.html'
        ),
        location: 'spread',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    // Text
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/text/gradient.html'),
        location: 'gradient',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(
          __dirname,
          './src/partials/demos/text/glitchletters.html'
        ),
        location: 'glitchletters',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/text/layers.html'),
        location: 'layers',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/text/perletter.html'),
        location: 'perletter',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/text/stroke.html'),
        location: 'stroke',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/text/circular.html'),
        location: 'circular',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/text/typewriter.html'),
        location: 'typewriter',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    // Hover
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/hover/basic.html'),
        location: 'basic',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/hover/fill.html'),
        location: 'fill',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/hover/reveal.html'),
        location: 'reveal',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/hover/siblings.html'),
        location: 'siblings',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/hover/tilt.html'),
        location: 'tilt',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/hover/underline.html'),
        location: 'underline',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/demos/hover/magnetic.html'),
        location: 'magnetic',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    // sharing
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/sharing.html'),
        location: 'sharing',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],

  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    runtimeChunk: 'single'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    fallback: {
      stream: require.resolve('stream-browserify')
    }
  }
}
