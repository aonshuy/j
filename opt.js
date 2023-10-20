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
            dst = `wameiji://${paras.dst}`
        console.log(dst)
        el.href = dst
        el.click()
    }

    let _log = (msg) => {
        let log_el = document.getElementById('log')
        log_el.innerText = msg
    }

    let paras = getUrlParams(location.href)

    let btn = document.getElementById('btn')
    btn.setAttribute('data-clipboard-text', paras.dst)
    let cb = new ClipboardJS('#btn');
    cb.on('success', function (e) {
        console.log('copy success')
        _log('copied!')
        jumpApp(paras)
    })
    cb.on('error', function (e) {
        console.log('copy error')
        jumpApp(paras)
    })
}