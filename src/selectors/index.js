


export const getBaseCurrency = (state) => {
    for(var key in state.rates) {
        if(state.rates[key] === 1)
            return key;
    }
    return 'ERROR';
}
