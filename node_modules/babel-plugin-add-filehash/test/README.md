For easier development testing you can also link the
babel-plugin-add-filehash repository in the parent directory:

    cd ..
	 yarn link
	 cd test
	 yarn link babel-plugin-add-filehash

Run webpack in watch mode, edit input.js and check if chnages
are picked up correctly:

   webpack --watch

The file hash near the end of `output.js` should change whenever
you edit `input.js`.

