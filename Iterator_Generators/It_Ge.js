// Custom Iterator

function iterator(start = 0, end = Infinity, step = 1){
    let nextStart = start
    let iterationCount = 0
    return {
        next(){
            let result
            if(iterationCount < end){
                result  = { value : nextStart, done : false}
                nextStart += step
                iterationCount++
                return result
            }
            return {value : iterationCount, done : true}
        }
    }
}
const makeIterator = iterator(0, 20, 1)
let result = makeIterator.next()
while(!result.done){
    // console.log(result.value)
    result = makeIterator.next()
}

// Using Generator function

function* generatorFunc () {
    yield 2
    yield 4
    yield 6
    yield 8
    yield 10
    yield 12
    yield 14
    yield 16
}
const value = generatorFunc()
for(const val of value){
    console.log(val)
}