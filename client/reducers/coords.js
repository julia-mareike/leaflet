export const huarahi = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COORDS':
      return [...state, action.huarahi]
    default:
      return state
  }
}

export const streets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COORDS':
      return [...state, action.streets]
    default:
      return state
  }
}
