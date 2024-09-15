const { exec } = require('child_process');
exec('cat flag.txt', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`File content:\n${stdout}`);
});
