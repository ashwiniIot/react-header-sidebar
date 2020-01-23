
const orgReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ORG':
      return state.concat([action.data]);
    case 'EDIT_ORG':
      return state.map((org) => org.id === action.id ? { ...org, editing: !org.editing } : org)
    case 'DELETE_ORG':
      return state.filter((org) => org.id !== action.id)
    case 'UPDATE':
      return state.map((org) => {
        if (org.id === action.id) {
          return {
            ...org,
            title: action.data.newTitle,
            message: action.data.newMessage,
            editing: !org.editing
          }
        } else return org;
      })
    default:
      return state;
  }
}

export default orgReducer;