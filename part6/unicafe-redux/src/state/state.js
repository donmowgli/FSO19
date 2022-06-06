const initialState = {
    good: 0,
    ok: 0,
    bad: 0
}

const stateConstructor = (good, ok, bad) => {
    return({
        good : good,
        ok : ok,
        bad : bad
    })
}

export { initialState, stateConstructor }