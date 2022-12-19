const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TAG":
      if (!state.filterTags.includes(action.tag)) {
        const newFilterTags = [...state.filterTags, action.tag];
        return { ...state, filterTags: newFilterTags };
      }
      break;

    case "REMOVE_TAG":
      const newFilterTags = state.filterTags.filter(
        (tag) => tag !== action.tag
      );
      return { ...state, filterTags: newFilterTags };

    case "CLEAR_TAGS":
      return { ...state, filterTags: [] };

    default:
      return state;
  }
};

export default GlobalReducer;
