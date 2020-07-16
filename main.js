// Update this constant with your ServiceNow credentials
const options = {
    url: 'https://dev91082.service-now.com/',
    username: 'admin',
    password: '-F6r$SLsn&_w+6G',
    serviceNowTable: 'change_request'
};

// Import built-in Node.js package path.
const path = require('path');

/**
 * Import the ServiceNowConnector class from local Node.js module connector.js.
 *   and assign it to constant ServiceNowConnector.
 * When importing local modules, IAP requires an absolute file reference.
 * Built-in module path's join method constructs the absolute filename.
 */
const ServiceNowConnector = require(path.join(__dirname, './connector.js'));

/**
 * @function process
 * @description Instantiates an object from the imported ServiceNowConnector class
 *   and tests the object's get and post methods.
 * @param {(object|string)} data - An object containint the API reponse data
 * @param {(object|string)} data.method - The method used in the request to the API.
 * @param {(object|string)} data.response - The API's response. Will be an object if sunnyday path.
 * @param {(object|string)} error - If an error occures this oject will be true.
*/
function process(data,error) {
if (error) {
      console.error(`\nError returned from ${data.method} request:\n${JSON.stringify(error)}`);
    } else {
    console.log(`\nResponse returned from ${data.method} request:\n${JSON.stringify(data.response)}`)
  }
}

/**
 * @function mainOnObject
 * @description Instantiates an object from the imported ServiceNowConnector class
 *   and tests the object's get and post methods.
 */
function mainOnObject() {
  // Instantiate an object from class ServiceNowConnector.
  const connector = new ServiceNowConnector(options);
  // Test the object's get and post methods.
  // You must write the arguments for get and post.
  connector.get(process);
  connector.post(process);

}

// Call mainOnObject to run it.
mainOnObject();

