const URL = "http://bachelor.bandrecording-hamburg.de/csvWriter/";

// method to establish the http connection and send the data to the REST
// endpoint
const sendHttpRequest = (method, url, data) => {
  // create a promise
  const promise = new Promise((resolve, reject) => {
    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    // open a connection
    xhr.open(method, url);
    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");
    // when the server responded
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    // when the server does not respond
    xhr.onerror = () => { reject("something went wrong with the server"); };
    // Sending data with the request
    xhr.send(data);
  });
  return promise;
};

const methods = {
  sendEval(value) {
    // Converting JSON data to string
    let data = "[";
    for (let i = 0; i < value.length - 1; i++) {
      data += JSON.stringify(value[i]);
      data += ", ";
    }
    data += JSON.stringify(value[23]);
    data += "]";
    console.log(data);
    // call the send http request method
    return sendHttpRequest("POST", URL, data)
        .then(function(responseData) {
          console.log(responseData);
          return true;
        })
        .catch(function(err) {
          console.log(err);
          return false;
        });
  },
};
export default {
  methods,
};
