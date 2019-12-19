// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
//todo:update INFO_ARRAY
const INFO_ARRAY = [
    {
        txtName: '陈先生',
        txtPpNum: '210824888222370013',
        txtTel: '13888888888'
    },
    {
        txtName: '翟先生',
        txtPpNum: '210824888222360422',
        txtTel: '13888888888'
    },
    {
        txtName: '陈女士',
        txtPpNum: '21088188822230020',
        txtTel: '13888888888'
    },
    {
        txtName: '陈小姐',
        txtPpNum: '210824888222320025',
        txtTel: '13888888888'
    },
    {
        txtName: '李女士',
        txtPpNum: '21082488822230420',
        txtTel: '13888888888'
    },
    {
        txtName: '翟女士',
        txtPpNum: '21082488822230423',
        txtTel: '13888888889'
    },
    {
        txtName: '刘先生',
        txtPpNum: '210881888222310030',
        txtTel: '13888888889'
    },
    {
        txtName: '刘大爷',
        txtPpNum: '21088188822230015',
        txtTel: '13888888889'
    },
    {
        txtName: '刘帅哥',
        txtPpNum: '21088188822230036',
        txtTel: '13888888889'
    },
    {
        txtName: '王小姐',
        txtPpNum: '21088188822230022',
        txtTel: '13888888889'
    },
    {
        txtName: '翟大哥',
        txtPpNum: '210824888222320431',
        txtTel: '13888888899'
    },
    {
        txtName: '王阿姨',
        txtPpNum: '210204888222331488',
        txtTel: '13888888899'
    },
    {
        txtName: '翟小姐',
        txtPpNum: '210211288822235123',
        txtTel: '13888888899'
    },
    {
        txtName: '翟美女',
        txtPpNum: '21088128882223002X',
        txtTel: '13888888899'
    },
    {
        txtName: '翟大爷',
        txtPpNum: '210824123456780422',
        txtTel: '13888888899'
    },
    {
        txtName: '沈大爷',
        txtPpNum: '210105191234561415',
        txtTel: '13888888890'
    },
    {
        txtName: '沈大哥',
        txtPpNum: '210804123456253514',
        txtTel: '13888888890'
    },
    {
        txtName: '李大哥',
        txtPpNum: '210824112345024670',
        txtTel: '13888888890'
    },
    {
        txtName: '陈美女',
        txtPpNum: '210888199876521244',
        txtTel: '13888888890'
    },
    {
        txtName: '于大爷',
        txtPpNum: '210804136411093429',
        txtTel: '13888888890'
    }
];

function updateSummary(i) {
    let summary = document.getElementById('summary');
    summary.innerText = ' 总计：' + (i + 1) + '/' + INFO_ARRAY.length
}

chrome.storage.sync.get('arrayI', function (data) {
    let i = data.arrayI;
    updateSummary(i)
});
let changeColor = document.getElementById('changeColor');
changeColor.style.backgroundColor = '#3aa757';
changeColor.onclick = function () {
    chrome.storage.sync.get('coinValue', function (data) {
        let newCoinValue = data.coinValue;
        chrome.storage.sync.get('arrayI', function (data) {
            let i = data.arrayI;
            if (i === -1) {
                return
            }
            updateSummary(i);
            let entry = INFO_ARRAY[i];
            let code = '' +
                '            if (document.getElementById("txtName") !== null && document.getElementById("txtName") !== undefined) {\n' +
                '                document.getElementById("txtName").value = "' + entry.txtName + '";\n' +
                '            }\n' +
                '' +
                '            if (document.getElementById("txtPpNum") !== null && document.getElementById("txtPpNum") !== undefined) {\n' +
                '                document.getElementById("txtPpNum").value = "' + entry.txtPpNum + '"\n' +
                '            }\n' +
                '' +
                '            if (document.getElementById("txtTel") !== null && document.getElementById("txtTel") !== undefined) {\n' +
                '                document.getElementById("txtTel").value = "' + entry.txtTel + '"\n' +
                '            }\n' +
                '' +
                '            if (document.getElementById("nums") !== null && document.getElementById("nums") !== undefined) {\n' +
                '                document.getElementById("nums").value = "' + newCoinValue + '"\n' +
                '            }';
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {
                        code: code
                    });
            });
        });
    });
};
let forward = document.getElementById('forward');
forward.style.backgroundColor = '#ff6f45';
forward.onclick = function () {
    chrome.storage.sync.get('coinValue', function (data) {
        let newCoinValue = data.coinValue;
        chrome.storage.sync.get('arrayI', function (data) {
            let i = data.arrayI;
            i--;
            if (i <= -1) {
                i = 0;
            }
            chrome.storage.sync.set({arrayI: i}, function () {
                console.log('arrayI, forward', i)
            });
            updateSummary(i);
            let entry = INFO_ARRAY[i];
            let code = '' +
                '            if (document.getElementById("txtName") !== null && document.getElementById("txtName") !== undefined) {\n' +
                '                document.getElementById("txtName").value = "' + entry.txtName + '";\n' +
                '            }\n' +
                '' +
                '            if (document.getElementById("txtPpNum") !== null && document.getElementById("txtPpNum") !== undefined) {\n' +
                '                document.getElementById("txtPpNum").value = "' + entry.txtPpNum + '"\n' +
                '            }\n' +
                '' +
                '            if (document.getElementById("txtTel") !== null && document.getElementById("txtTel") !== undefined) {\n' +
                '                document.getElementById("txtTel").value = "' + entry.txtTel + '"\n' +
                '            }\n' +
                '' +
                '            if (document.getElementById("nums") !== null && document.getElementById("nums") !== undefined) {\n' +
                '                document.getElementById("nums").value = "' + newCoinValue + '"\n' +
                '            }';
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {
                        code: code
                    });
            });
        });
    });
}
let backward = document.getElementById('backward');
backward.style.backgroundColor = '#538eff';
backward.onclick = function () {
    chrome.storage.sync.get('coinValue', function (data) {
        let newCoinValue = data.coinValue;
        chrome.storage.sync.get('arrayI', function (data) {
            let i = data.arrayI;
            i++;
            if (i >= INFO_ARRAY.length) {
                i = INFO_ARRAY.length - 1
            }
            chrome.storage.sync.set({arrayI: i}, function () {
                console.log('arrayI, forward', i)
            });
            updateSummary(i);
            let entry = INFO_ARRAY[i];
            let code = '' +
                '            if (document.getElementById("txtName") !== null && document.getElementById("txtName") !== undefined) {\n' +
                '                document.getElementById("txtName").value = "' + entry.txtName + '";\n' +
                '            }\n' +
                '' +
                '            if (document.getElementById("txtPpNum") !== null && document.getElementById("txtPpNum") !== undefined) {\n' +
                '                document.getElementById("txtPpNum").value = "' + entry.txtPpNum + '"\n' +
                '            }\n' +
                '' +
                '            if (document.getElementById("txtTel") !== null && document.getElementById("txtTel") !== undefined) {\n' +
                '                document.getElementById("txtTel").value = "' + entry.txtTel + '"\n' +
                '            }\n' +
                '' +
                '            if (document.getElementById("nums") !== null && document.getElementById("nums") !== undefined) {\n' +
                '                document.getElementById("nums").value = "' + newCoinValue + '"\n' +
                '            }';
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {
                        code: code
                    });
            });
        });
    });
}
