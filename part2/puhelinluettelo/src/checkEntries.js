function checkEntries(sample, name){
    let val = false
    sample.forEach(entry => {
        for(let j in entry){
        if(entry[j] === name) {val = true}
        }
    })
    return val;
}

export default checkEntries;