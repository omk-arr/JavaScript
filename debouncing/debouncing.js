const inputElement = document.getElementById('debounced-search')
inputElement.addEventListener('input', (e)=>{
    debouncedSearch(e.target.value)
})
function searchAPI(searchTerm){
    console.log('Searching for: ', searchTerm)
    document.getElementById('search-result').innerHTML = searchTerm
}
const debounced = (func, delay) => {
    console.log(func)
    let timeout
    return function(...args){
        console.log(`Deboucing for ${delay} ms`)
        if(timeout) {
            clearTimeout(timeout)
            console.log("Timeout cleared")
        }
        timeout = setTimeout(() => {
            func(...args)
            console.log("Function executed...")
        }, delay);
    }
}
const debouncedSearch = debounced(searchAPI, 3000)
// debouncedSearch()