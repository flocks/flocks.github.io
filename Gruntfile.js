module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');


	grunt.initConfig({
		watch: {
			scripts: {
			files: ['src/*.js'],
			tasks: ['less'],
			options: {
				spawn: false,
			},
			},
		}

	});



}