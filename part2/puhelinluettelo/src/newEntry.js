function newEntry(name, number, current){
    const id = current + 1
    const entryObject = {
        name: name,
        number: number,
        id: id
    }
    return entryObject
}

export default newEntry;