export const coords1 = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COORDS':
      return [...state, action.coords1]
    default:
      return state
  }
}

export const coords2 = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COORDS':
      return [...state, action.coords2]
    default:
      return state
  }
}
