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

let _log = (msg) => {
    let el = document.getElementById("log")
    el.innerHTML = msg
}

let dst
let el = document.createElement('a')
let paras = getUrlParams(location.href)
if (paras.t === "wmj")
    dst = `wameiji://main/${paras.dst}`
console.log(dst)


navigator.permissions.query({
    name: 'clipboard-write'
}).then(permissionStatus => {
    // Will be 'granted', 'denied' or 'prompt':

    _log(permissionStatus.state);
    if (permissionStatus.state === "granted") {
        navigator.clipboard.writeText(paras.dst);
        _log('link copied')
    } else {
        // Listen for changes to the permission state
        permissionStatus.onchange = () => {
            _log(permissionStatus.state);
        }
    }
})



el.href = dst
el.click()