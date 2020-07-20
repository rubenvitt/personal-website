module.exports = {
    // Apply rule for fonts files
    test: /\.(woff|woff2|ttf|otf|eot)$/,
    use: [
        {
            // Using file-loader too
            loader: "file-loader",
            options: {
                outputPath: 'assets/font'
            }
        }
    ]
}
