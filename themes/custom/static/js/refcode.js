function getUrlParams() {
  var vars = {};
  window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function() {
    //the arguments passed in will always be the same
    vars[arguments[1]] = arguments[2];
  });
  return vars;
}

// --- refcode functions
function getRefCode(){
  if(getUrlParams()['refcode']){
    return "refcode="+ getUrlParams()['refcode'];
  } else {
    return ""
  }
}

// --- sessionStorage functions
const sessionStorageSupported = () => {
  try {
    const key = "testLocalStorage";
    window.sessionStorage.setItem(key, key);
    window.sessionStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};

const storeInSessionStorage = (key, value) => {
  const jsonValue = JSON.stringify(value);
  if (sessionStorageSupported()) {
    try {
      window.sessionStorage.setItem(key, jsonValue);
    } catch(e) {
      return;
    }
  }
};

const clearFromSessionStorage = (key) => {
  if (sessionStorageSupported()) {
    try {
      window.sessionStorage.removeItem(key);
    } catch(e) {
      return;
    }
  }
};

//item is a string that is the key stored in the browser's local storage
const parseSessionStorageJSON = (item) => {
  if (sessionStorageSupported()) {
    try {
      return JSON.parse(window.sessionStorage.getItem(item));
    } catch(e) {
      return false;
    }
  }
};