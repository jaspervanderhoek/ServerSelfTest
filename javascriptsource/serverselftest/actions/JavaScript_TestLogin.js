// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} appURL
 * @returns {Promise.<boolean>}
 */
export async function JavaScript_TestLogin(appURL) {
	// BEGIN USER CODE
	
	let result = false; 
	try {
		//result = mx.session.login({'username':'TestUser','password':'TestUser'})
		var msg = '{"action":"login","params":{"username":"TestUser","password":"TestUser"}}';
		result = fetch('/xas/', {
			method: 'post',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: msg 
		})
		.then( function(loginResult) {
			if( loginResult.status == 200 ) {
				return true;
			}
			else
				return false; 
		})
		.catch(() => {
			debugger;
			return false;
		});
	}
	catch( e ) {
		result = false;
	}

	return result;
	// END USER CODE
}
