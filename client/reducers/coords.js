export const coords1 = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COORDS':
      return action.coords1
      // [
      //   ...state,
      // {
      //   coords1: action.coords[0],
      //   coords2: action.coords[1]
      // }
      // ]

    default:
      return state
  }
}

export const coords2 = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COORDS':
      return action.coords2
      // [
      //   ...state,
      // {
      //   coords1: action.coords[0],
      //   coords2: action.coords[1]
      // }
      // ]

    default:
      return state
  }
}
