// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://steamcommunity.com/market/listings/730/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==




window.addEventListener("load", function () {
    var resultTable = document.getElementById("searchResultsTable");
    var button = document.createElement("button");
    button.innerHTML = 'Copy';
    resultTable.insertBefore(document.createElement('br'),resultTable.childNodes[0]);
    resultTable.insertBefore(button,resultTable.childNodes[0])
    button.onclick = () =>{
      exec();
    }
  });
  
  function exec() {
      var tags = document.getElementsByTagName("csgofloat-item-row-wrapper");
      var found = [];
      for (var i = 0; i < tags.length; i++) {
          found.push(
              tags[i].shadowRoot
              .querySelector("div")
              .textContent.split(":")[1]
              .split("\n")[0].trim()
          );
      }
      let str = "";
      for (var j = 0; j < found.length; j++) {
          str += found[j] + ",";
      }
      let temp = document.createElement("textarea");
      document.body.append(temp);
      temp.value = str;
      temp.select();
      document.execCommand("copy");
      temp.remove();
  }
  