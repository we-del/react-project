/* 
 * 2022/4/19 22:51
 * author: xxx
 * @description:
 */

const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {

                        //modifyVars: { '@primary-color': '#1DA57A' },
                        // modifyVrs 用于设置主题颜色
                        modifyVars: { '@primary-color': '#237804' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};