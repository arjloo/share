module.exports = {
	entry: {
		index: './src/index.ts'
	},
	output: {
		path: __dirname + 'dist',
		filename: 'bundle.js',
		publicPath: 'dist/'
	},
	module: {
		exprContextCritical: false,
		rules: [
			{
				test: /\.ts$/,
				loaders: [
					'awesome-typescript-loader',
					'angular2-template-loader'
				]
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules'
			},
			{
				test: /\.html$/,
				loader: 'raw-loader'
			}
		]
	},
	resolve: {
		extensions: [
			'.js',
			'.ts'
		]
	}
};
