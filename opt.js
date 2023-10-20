function getUrlParams(url) {
    let urlStr = url.split('?')[1]
    let obj = {};
    let paramsArr = urlStr.split('&')
    for (let i = 0, len = paramsArr.length; i < len; i++) {
        let arr = paramsArr[i].split('=')
        obj[arr[0]] = arr[1];
    }
    return obj
}
let dst
let el = document.createElement('a')
let paras = getUrlParams(location.href)
if (paras.t === "wmj")
    dst = `wameiji://main/${paras.dst}`
console.log(dst)

navigator.clipboard.writeText(paras.dst);



el.href = dst
el.click()