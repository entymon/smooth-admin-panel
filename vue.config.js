module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `
					@import "@/styles/_main.scss";
          @import "~bootstrap/dist/css/bootstrap.css";
					@import "~bootstrap-vue/dist/bootstrap-vue.css";
					@import "~vue-wysiwyg/dist/vueWysiwyg.css";
        `
			}
		}
	}
};