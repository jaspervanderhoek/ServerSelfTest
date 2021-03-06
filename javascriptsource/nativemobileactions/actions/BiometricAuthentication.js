// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

/**
 * @param {string} reason - The reason for requesting authentication. If empty, the system default message is used.
 * @returns {boolean}
 */
function BiometricAuthentication(reason) {
	// BEGIN USER CODE
    // Documentation https://github.com/naoufal/react-native-touch-id
    const TouchID = require("react-native-touch-id").default;
    return TouchID.authenticate(reason)
        .then(() => true)
        .catch(() => false);
	// END USER CODE
}