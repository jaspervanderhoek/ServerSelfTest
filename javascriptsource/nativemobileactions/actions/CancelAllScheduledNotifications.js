// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

/**
 * Cancels all pending scheduled notifications.
 * @returns {boolean}
 */
function CancelAllScheduledNotifications() {
	// BEGIN USER CODE
    // Documentation https://rnfirebase.io/docs/v5.x.x/notifications/reference/Notifications#cancelAllNotifications
    const firebase = require("react-native-firebase");
    firebase.notifications().cancelAllNotifications();
    return true;
	// END USER CODE
}