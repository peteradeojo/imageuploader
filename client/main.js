const HOST = 'http://locahost:3000';
/**
 *
 * @param {File} file
 */
function uploadFile(file) {
	let url = `${HOST}/upload/add`;
	let formData = new FormData();
	formData.append('file', file);

	fetch(url, { method: 'POST', body: formData })
		.then((res) => {
			return res.json();
		})
		.then((data) => console.log)
		.catch((err) => console.error);
	// console.log(file.name);
}

/**
 *
 * @param {DragEvent} e
 */
function dropHandler(e) {
	e.preventDefault();
	let file = e.dataTransfer.items[0].getAsFile();
	if (file) {
		// console.log(file.name);
		uploadFile(file);
	}
}

/**
 * @param {DragEvent} e
 */
function dragoverHandler(e) {
	e.preventDefault();
}
