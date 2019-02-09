module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `
          @import "@/styles/_main.scss";
        `
			}
		}
	}
	// configureWebpack: {
	// 	resolve: {
	// 		alias: {
	// 			vue: './dist/main.js'
	// 		}
	// 	}
	// }
};