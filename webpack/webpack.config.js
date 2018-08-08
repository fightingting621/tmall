const path=require('path');
const webpack=require('webpack');
const HtmlPlugin=require('html-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const glob=require('glob');
const PurifyCSSPlugin=require("purifycss-webpack");
const entry=require('./webpack_config/entry-config.js');
const CopyWebpackPlugin=require('copy-webpack-plugin');
module.exports={
    mode:'development',
    entry:entry,
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://127.0.0.1:8081/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({

                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{importLoaders:1}
                        },"postcss-loader"]
                })
            },{
                test:/\.(png|jpg|gif)/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:500000000000,
                            outputPath:'images/'
                        }
                    }
                ]
            },{
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            },{
                test:/\.scss/,
                // fallback:"style-loader",
                use:[
                    // {
                    //     loader:"style-loader"
                    // },
                    {
                        loader:"css-loader"
                    }, {
                        loader:"sass-loader"
                    }],
                // fallback:"style-loader"
            },{
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "env"
                        ]
                    }
                },
                exclude:/node_modules/
            },
        ]},
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        // new HtmlPlugin({
        //     minify:{
        //         removeAttributeQuotes:true
        //     },
        //     hash:true,
        //     template:'./src/index.html'
        // }),
        new HtmlWebpackPlugin({
            filename:'a.html',
            title:"index-title",
            chunks:['index'],
            //引入哪个js
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        // new HtmlWebpackPlugin({
        //     filename:'b.html',
        //     title:"index2-title",
        //     minify:{
        //         removeAttributeQuotes:true
        //     },
        //     hash:true,
        //     template:'./src/index2.html'
        // })
        new ExtractTextPlugin("css/style.css"),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html')),
        }),
        new webpack.BannerPlugin("唯创网讯"),
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new CopyWebpackPlugin([{
            from:__dirname+'/src/public',
            to:'./public'
        }])
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        compress:true,
        port:'8081',
        open:true,
        hot:true
    }
};