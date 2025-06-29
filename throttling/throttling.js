const inputElement = document.getElementById('input')
const buttonElement = document.getElementById('button')
buttonElement.addEventListener('click', () =>{
    if(inputElement.value){
        throttledMessageLog(inputElement.value)
    }
})

function logMessage(message){
    console.log("Message:", message[0])
}
const throttled = (func, delay) =>{
    let timeout 
    let lastArgs
    return function (...args){
        lastArgs = args
        if(!timeout) {
            console.log("timeout completed/first call")
            func(lastArgs)
            timeout = setTimeout(() => {
                timeout = null
                console.log("Timeout expired")
                if(lastArgs) func(lastArgs)
                lastArgs = null
            }, delay);
            console.log("timeout set with delay of ", delay)
            lastArgs = null
        }
        else console.log("Cannot log message as throttling is in place. But the arguments will be saved: ", lastArgs)
    }
}
const throttledMessageLog = throttled(logMessage, 8000)
