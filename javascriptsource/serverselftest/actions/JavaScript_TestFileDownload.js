// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {MxObject} fileObject
 * @param {string} expectedContent
 * @returns {Promise.<string>}
 */
export async function JavaScript_TestFileDownload(fileObject, expectedContent) {
	// BEGIN USER CODE
	
	try {
		var url = '/file?guid=' + fileObject.getGuid();
		return await fetch(url).then(response => {
			if (response.ok) {
				return response.text().then(content => {
					if( content.includes(expectedContent) ) { 
						return ""; 
					} 
					else { 
						return "A file was downloaded, but the content of the file was not as expected";
					}
				});
			}
			
			return "The file could not be downloaded. Response: " + response.status + "-" + response.statusText;
		});
	}
	catch(err) {
		return "An error occured while downloading the file: " + err.message;
	}

	// END USER CODE
}
