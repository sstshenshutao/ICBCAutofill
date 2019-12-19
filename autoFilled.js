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
document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.sync.get('coinValue', function (data) {
        let newCoinValue = data.coinValue;
        chrome.storage.sync.get('arrayI', function (data) {
            let i = data.arrayI;
            i++;
            let entry = INFO_ARRAY[i];
            if (i < 0) {
                i = 0
            } else if (i >= INFO_ARRAY.length) {
                i = INFO_ARRAY.length - 1
            }
            let eleName = document.getElementById("txtName");
            if (eleName !== null && eleName !== undefined) {
                eleName.value = entry.txtName;
            }
            let elePpNum = document.getElementById("txtPpNum");
            if (elePpNum !== null && elePpNum !== undefined) {
                elePpNum.value = entry.txtPpNum
            }
            let eleTel = document.getElementById("txtTel");
            if (eleTel !== null && eleTel !== undefined) {
                eleTel.value = entry.txtTel
            }
            let eleNums = document.getElementById("nums");
            if (eleNums !== null && eleNums !== undefined) {
                eleNums.value = newCoinValue
            }
            chrome.storage.sync.set({arrayI: i}, function () {
                // console.log('arrayI, autofilled ++', i)
            });
        });
    });

})
