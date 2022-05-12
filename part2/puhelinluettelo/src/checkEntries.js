function checkEntries(sample, name){
    let val = false
    sample.forEach(entry => {
        if(entry.name === name) {val = true}
    })
    return val;
}

export default checkEntries;