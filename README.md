# ServerSelfTest
Mendix project that can be used to test if your server is setup correctly. Deploy this .mda on your server and open the application. You'll see a screen of checkboxes that indicates if all features are available

## Dependencies 
None

## Installation
 1. Download the .mda file (or download the .mpk and create your own .mda)
 2. Install & run the .mda from your new server
 3. Open the application in the browser
 4. Evaluate the results and solve any problems


## Evaluating the results
This module runs a number of tests with common issues or challenges when configuring your own server. It evaluates your server information and presents that to the user to validate if everything is setup correctly (an X somewhere doesn't guarantee a problem).

From the top down the following tests are run:
 - Application URL
 - HTTPS Applied
 - 
 
| Test | Description |
| :---: | :---: |
| Application URL | Shows the url as configured in the applications configuration settings, this url will be used by the build in integration servers and several appstore modules. This should show the same url as you expect to present to your end-users (or systems). |
| HTTPS Applied | Is your application using an httpS connection. This shows the same information as you'd be able to find in your browser's certificate information. |
| SSL Type | Displays the type of SSL that is used for your connection (e.g. tlsV2). This shows the same information as you'd be able to find in your browser's certificate information. |
| Instances | Lists the number of instances that are active, depending on how you've configured your startup sequence across your servers it can take seconds to 1-2 minutes before all instances are fully registered. You'll see the following information "InstanceID - Startup Date/time - Allocated Memory - Available vCPUs - Scheduled Event configuration - Local File System Cleanup". See the chapter "Instances on information about these properties. This shows the actual resources as available to the application, if incorrect values are shown your application is incorrectly configured. |
| Login | Indicates if the browser is submit a login request to the server. If this fails, then your server is not accepting any requests on the /xas/ url, you need to evaluate the RequestHandler configuration.  |
| Scheduled Events | To pass at least 1 of your instances needs to have scheduled events enabled. If this fails none of your instances will honor scheduled event intervals. |
| REST Documentation | Is the URL /rest-doc/ accessible from your device, if you don't use rest or don't want to publish the documentation you can ignore this error otherwise evaluate your Request Handler configuration. |
| REST Operation | Is the URL /rest/ accessible from your device, if you don't use rest you can ignore this error otherwise evaluate your Request Handler configuration. |
| SOAP Documentation | Is the URL /soap-doc/ accessible from your device, if you don't use SOAP or don't want to publish the documentation you can ignore this error otherwise evaluate your Request Handler configuration. |
| SOAP Operation | Is the URL /soap/ accessible from your device, if you don't use SOAP you can ignore this error otherwise evaluate your Request Handler configuration. |
| OData Documentation | Is the URL /odata-doc/ accessible from your device, if you don't use OData or don't want to publish the documentation you can ignore this error otherwise evaluate your Request Handler configuration. |
| OData Operation | Is the URL /odata/ accessible from your device, if you don't use OData you can ignore this error otherwise evaluate your Request Handler configuration. |
| SSO RequestHandler | Is the URL /sso/ accessible, this is needed for the SAML module. If you don't use the SAML module ignore these results, otherwise evaluate your Request Handler configuration. |
| Deeplink RequestHandler | Is the URL /link/ accessible, this is needed for the Deeplink module. If you don't use the Deeplink module ignore these results, otherwise evaluate your Request Handler configuration. |
| OpenID RequestHandler | Is the URL /openid/ accessible, this is needed for the OpenID module. If you don't use the OpenID module ignore these results, otherwise evaluate your Request Handler configuration. |
| Temp Folder R/W | To perform some critical file operations the platform needs to have a properly configured temp folder to write in, this action evaluates if writing is possible. If this fails validate the storage configuration of your instance, this is most likely a permission problem or an issue with the storage volumes of your K8s pod |
| File Upload | Test file upload capabilies, can the platform upload and write a file to the storage. If this fails trace the error in the browser and server, this can have different causes. |
| File Download | Can the platform download the earlier retrieved file. If this fails trace the error in the browser and server, this can have different causes. |
| File Upload, Large | Same file upload test as before, but now with a 17Mb file. Just another test with a longer upload time to make sure there are no data transfer or time-outs that are causing issues. |
| File Download, Large | Same file download test as before, but now with a 17Mb file. Just another test with a longer download time to make sure there are no data transfer or time-outs that are causing issues. |
| File Storage Persistance | Needs a full restart of all instances to validate. This checks that files are stored outside of the container and can be accessed after the container has been stopped/started. If this fails your files never get transferred to a persistant storage location. |
| Microflow Debugger | Is the /debugger/ url accessible from your local device's IP-address. This can be invalid if you don't want the debugger enabled, or if you have IP-restrictions on what can access the debugger (and you are not in the range). |


## Instances

All the tests show on which instance it was executed. You should see a variation in here, if you always see the same exact instance Id in the list then something is wrong in your load-balancing configuration and all traffic always gets redirected to the same server (and you effectively no longer have loadbalancing).

Instance properties:
