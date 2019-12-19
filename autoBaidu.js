// alert(document.querySelector("#logo > img").src)
// function kkk(){
	// console.log ('documentobj:',document)
// 	for (let i in document){
// 		console.log('documentson:',i)
// 	}
document.addEventListener("DOMContentLoaded", function() {
	// console.log(document.querySelector("#logo > img"))
	// console.log(document.querySelector("#hplogo"))
	if (document.querySelector("#logo > img")!==null){
		document.querySelector("#logo > img").src = "https://www.baidu.com/img/baidu_resultlogo@2.png";
	}
	if (document.querySelector("#hplogo")!==null){
		document.querySelector("#hplogo").srcset = "https://www.baidu.com/img/bd_logo1.png"
	}
	if (document.querySelector("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b")!==null){
		document.querySelector("#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b").value = "Baidu-Suche"
	}

	})
