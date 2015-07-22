var compressor  = require('node-minify');

task('default', [], function(){
  jake.logger.log('Compressing JavaScript files...');
  new compressor.minify({
    type: 'uglifyjs',
    fileIn: [
        'node_modules/corslite/corslite.js',
        'L.UTFGrid.js',
        'L.UTFGridCanvas.js'
    ],
    fileOut: 'L.UTFGrid.min.js',
    callback: function(error){
      if(error){
        jake.logger.console.log(error);
      }
    }
  });
});