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

// i18n静态模板编译的默认设置
const I18N_EJS_OPTIONS = {
  open: '<%',
  close: '%>',
  dist: '$lang/$file',
  defaultLangName: 'zh',
  templatePattern: '',
  i18nPattern: 'translations/*.json',
  ignorePattern: '',
  noKeepSubPathPattern: '/pages/*.html',
  /**
   * @desc 多语言文件处理函数
   * @param {string} i18nFileJSONClone - 语言文件内容(JSON格式)的拷贝对象
   * @param {string} fileLangName - 当前语言文件对应的语言名字
   * @param {string} defaultLangName - 默认语言名字
   * @return {object} 处理以后的文件内容
   *
   * @example
   * onLangFileParse(i18nFileJSONClone, fileLangName, defaultLangName) {},
   */
  onLangFileParse: null,
};

// ------ 配置i18n
fis.match('/translations/**', {
  release: false
});

fis.match('/pages/(**)/(*.html)', {
  release: '/$1/$2'
});

fis.match('/assets/**', {
  release: '/$&'
});

fis.match('/assets/**', {
  release: '/$&'
});

// deploy config
fis.match('*', {
  deploy: [
    fis.plugin('i18n-ejs', I18N_EJS_OPTIONS),
    fis.plugin('local-deliver', {
      to: Path.resolve(__dirname, './dist')
    })
  ]
});
