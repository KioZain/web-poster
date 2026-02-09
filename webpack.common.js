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
  { template: 'handbook.html', chunks: ['index', 'menubar'] },
  { template: 'posters.html', chunks: ['index', 'menubar', 'posters'] },
  { template: 'modules.html', chunks: ['index', 'menubar'] },
  {
    template: 'posters/poster.html',
    chunks: ['index', 'menubar', 'poster-page']
  },

  // Handbook
  {
    template: 'handbook/part_1/chapter_1/introduction.html',
    chunks: ['menubar', 'index', 'handbook-nav']
  },
  {
    template: 'handbook/part_1/chapter_1/chapter_1.html',
    chunks: ['menubar', 'index', 'handbook-nav']
  },
  // { template: 'handbook/part_1/chapter_1/another_article.html', chunks: ['page'] },

  // Static modules
  { template: 'modules/static/movement.html', chunks: ['page'] }
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
    menubar: './src/javascript/menubar.js',
    posters: './src/javascript/posters.js',
    'poster-page': './src/javascript/poster-page.js',
    'handbook-nav': './src/javascript/handbook-nav.js',
    'gsap-animation': './src/javascript/gsap/animation.js',
    marquee: './src/javascript/gsap/marquee.js',
    scrollposters: './src/javascript/gsap/scrollposters.js'
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
        test: /\.html$/i,
        loader: 'html-loader'
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
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
        path: path.join(__dirname, './src/partials/square.html'),
        location: 'square',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],

  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    fallback: {
      stream: require.resolve('stream-browserify')
    }
  }
}
