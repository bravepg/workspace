export const changePrice = makeAction('CHANGE_PRICE')
export const changeStyle = makeAction('CHANGE_STYLE')
export const addItem     = makeAction('ADD_ITEM')
export const removeItem  = makeAction('REMOVE_ITEM')

function makeAction (type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args)
}