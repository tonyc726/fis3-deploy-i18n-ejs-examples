const Path = require('path');

// 初始化 F.I.S 配置项
fis.set('project.ignore', [
  'node_modules/**',
  '.git/**',
  '.svn/**',
  'fis-conf.*',
  'package.json',
  'yarn.lock',
  // project ignore files
  'dist/**'
]);

// 压缩html的默认设置
const HTML_MINIFIER_OPTIONS = {
  templatePattern: '',
  ignorePattern: '/pages/_not_compress.html',
  // @see https://github.com/kangax/html-minifier#options-quick-reference
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true,
};

// ------ 配置i18n
fis.match('/translations/**', {
  release: false
});

fis.match('/pages/(**)/(*.html)', {
  release: '/$1/$2'
});
fis.match('/pages/(*.html)', {
  release: '/$1'
});

fis.match('/assets/**', {
  release: '/$&'
});

// deploy config
fis.match('*', {
  deploy: [
    fis.plugin('html-minifier', HTML_MINIFIER_OPTIONS),
    fis.plugin('local-deliver', {
      to: Path.resolve(__dirname, './dist')
    })
  ]
});
