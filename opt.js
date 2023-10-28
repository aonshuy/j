window.onload = () => {
    let getUrlParams = (url) => {
        let urlStr = url.split('?')[1]
        let obj = {};
        let paramsArr = urlStr.split('&')
        for (let i = 0, len = paramsArr.length; i < len; i++) {
            let arr = paramsArr[i].split('=')
            obj[arr[0]] = arr[1];
        }
        return obj
    }

    let jumpApp = (paras) => {
        let dst = 'mo match'
        let el = document.createElement('a')
        if (paras.t === "wmj")
            dst = `wameiji://main/${paras.dst}`
        console.log(dst)
        el.href = dst
        el.click()
    }

    let paras = getUrlParams(location.href)
    jumpApp(paras)
}