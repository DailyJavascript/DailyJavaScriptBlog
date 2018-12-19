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
const localStorageSupported = () => {
  try {
    const key = "testLocalStorage";
    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};

const storeInLocalStorage = (key, value) => {
  const jsonValue = JSON.stringify(value);
  if (localStorageSupported()) {
    try {
      window.localStorage.setItem(key, jsonValue);
    } catch(e) {
      return;
    }
  }
};

const clearFromLocalStorage = (key) => {
  if (localStorageSupported()) {
    try {
      window.localStorage.removeItem(key);
    } catch(e) {
      return;
    }
  }
};

//item is a string that is the key stored in the browser's local storage
const parseLocalStorageJSON = (item) => {
  if (localStorageSupported()) {
    try {
      return JSON.parse(window.localStorage.getItem(item));
    } catch(e) {
      return false;
    }
  }
};

function postRefCode() {
  const xhr = new XMLHttpRequest();
  const refcode = getRefCode();

  if (!xhr) {
    return false;
  }

  xhr.open("POST", 'https://dailyjavascript.herokuapp.com/users/visit', true);
  //Send the proper header information along with the request
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      storeInLocalStorage('visitID', xhr.response);
    }
  }
  xhr.send("blogVisit=1&"+refcode);
}

window.addEventListener('load', function() {
  if (!parseLocalStorageJSON('visitID')){
    postRefCode(getRefCode());
  }
});