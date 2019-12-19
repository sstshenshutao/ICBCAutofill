chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({coinValue: '20'}, function () {
        console.log('default coinValue 20 - background.js');
    });
    chrome.storage.sync.set({arrayI: -1}, function () {
        console.log('default arrayI- background.js', -1)
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                //todo: update url
                pageUrl: {hostEquals: 'coffee.cybertaotao.com'},
            }), new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'www.icbc.com.cn'},
            }),
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostEquals: 'jnb.icbc.com.cn'},
                })
            ],
            actions: [new chrome.declarativeContent.RequestContentScript({js: ["autoFilled.js"]}),
                new chrome.declarativeContent.ShowPageAction()
            ]
        }]);
    });
});
