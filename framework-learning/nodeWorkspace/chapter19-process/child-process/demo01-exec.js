const { exec } = require('child_process');

// exec('echo "The \\$HOME variable is $HOME"');
exec('cat *.js bad_file | wc -l', (error, stdout, stderr) => {
 	 if (error) {
    	console.error(`exec error: ${error}`);
    	return;
  	}
  	console.log(`stdout: ${stdout}`);
  	console.log(`stderr: ${stderr}`);
});