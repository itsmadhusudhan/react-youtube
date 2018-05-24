export const apiMiddleware = store => next => action => {
  console.log("Middleware triggered:",action.type);
  if(typeof action==="function"){
    return action(store.dispatch)
  }
 return  next(action);
}