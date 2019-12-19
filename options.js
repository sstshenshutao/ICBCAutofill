let confirmCoinValueBtn = document.getElementById('confirmCoinValue');
confirmCoinValueBtn.addEventListener('click', function () {
    let coinValue = document.getElementById('coinValue').value;
    chrome.storage.sync.set({coinValue: coinValue}, function () {
        console.log('coinValue', coinValue)
    })
})
