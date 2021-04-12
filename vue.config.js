let path = require('path');
let glob = require('glob');
// 配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
  let entries = {},
    basename,
    tmp,
    pathname;

  glob.sync(globPath).forEach(function(entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-3);
    pathname = basename; // 正确输出js和html的路径

    // console.log(pathname)
    entries[pathname] = {
      entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.js',
      template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
      title: tmp[2],
      filename: tmp[2]
    };
  });
  return entries;
}

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

let pages = getEntry('./src/pages/**?/*.html');
// 配置end

let devRewrites = [];
for (let i in pages) {
  devRewrites.push({ from: new RegExp(`/${i}`, 'g'), to: `/${pages[i].filename}` });
}

module.exports = {
  baseUrl: '/',
  productionSourceMap: false,
  pages,
  devServer: {
    index: 'index.html', // 默认启动serve 打开home页面
    open: true,
    historyApiFallback: {
      rewrites: devRewrites
    }
  },

  // 组件引入svg图片
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      });
  }
};
