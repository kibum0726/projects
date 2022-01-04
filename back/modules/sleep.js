function sleep(time){
    return new Promise(resolve =>{
        console.log('sleep')
        setTimeout(resolve, time)
    })
}

module.exports = {
    sleep
}