export default (state = null, action) => {
    switch (action.type) {
      case 'select_user':
        return action.payload;
      default:
        return state;
    }
  };
