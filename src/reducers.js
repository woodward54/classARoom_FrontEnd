export const initialState = {
  components: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMPONENT":
      return {
        ...state,
        components: {
          ...state.components,
          [action.payload.key]: {},
        },
      }
    case "DELETE_COMPONENT":
      console.log("action: ", action);
      const components = Object.assign({}, state.components);
      console.log("components: ", components);
      delete components[action.payload.key];
      console.log("components: ", components);
      return {
        ...state,
        components,
      };
    case "UPDATE_COMPONENT":
      console.log("action: ", action);
      return {
        ...state,
        components: {
          ...state.components,
          [action.payload.key]: action.payload.component,
        }
      }
    default:
      return state;
  }
};