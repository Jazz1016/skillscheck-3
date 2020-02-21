const initialState = {
  user: {}
};

const GET_USER = "GET_USER";

export function getUser(data) {
  return {
    type: GET_USER,
    payload: data
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      console.log(state);
      return { ...state, user: payload };
    default:
      return state;
  }
}

// const GET_USER = "GET_USER";
// const LOGOUT = "LOGOUT";

// export function getUser(userObj) {
//     return {
//         type: GET_USER,
//         payload: userObj
//     }
// }

// export function logout() {
//     return {
//         type: LOGOUT,
//         payload: null
//     }
// }

// export default function reducer(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case GET_USER:
//       return { ...state, user: payload };
//     //{user: {}, user: {user_id: 1, user_email: 'email'}}
//     case LOGOUT:
//       return { ...state, user: {} };
//     //return initialState
//     default:
//       return state;
//   }
// }
