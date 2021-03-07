const { src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const pxtorem = require('postcss-pxtransform');


exports.wxss = () => {
	let options={
		//平台类型
		platform: 'weapp',
		//设备宽度 对应iphone 6
		designWidth: 750,
		//转换比例 覆盖插件默认比例
		deviceRatio:{
			'750':2
		}
	}
    let processors = [
        pxtorem(options)
    ];
    return src('src/**/*.wxss')
        .pipe(postcss(processors))
        .pipe(dest('dist'));
};
