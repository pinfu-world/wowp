module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/assets/js`,
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: __dirname,
    },
  },
  resolve: {
    extensions: [".js", ".glsl"],
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // shader
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        type: "asset/source",
        generator: {
          filename: "assets/img/[hash][ext][query]",
        },
      },
      // img
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[hash][ext][query]",
        },
      },
      // css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
};
