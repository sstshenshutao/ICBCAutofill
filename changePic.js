// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changePic = document.getElementById('changePic');
let picLink = document.getElementById('picLink').value;
let searchText = document.getElementById('textSearch').value;
let mycode = 'if (document.querySelector("#logo > img")!==null){\n' +
    '\t\tdocument.querySelector("#logo > img").src = "' + picLink + '";\n' +
    '\t}\n' +
    '\tif (document.querySelector("#hplogo")!==null){\n' +
    '\t\tdocument.querySelector("#hplogo").srcset = "' + picLink + '"\n' +
    '\t}\n' +
    '\tif (document.querySelector("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b")!==null){\n' +
    '\t\tdocument.querySelector("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b").value = "' + searchText + '"\n' +
    '\t}';

changePic.onclick = function (element) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: mycode});
    });
};
