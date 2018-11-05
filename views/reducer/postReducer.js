const postReducer = (state  , action) => {
    switch(action.type) {
        case 'LOG_IN':
            const cusEmail = document.getElementById('email').value;
            const cusPassword = document.getElementById('password').value
            if(cusEmail === 'janepress940214@gmail.com' && cusPassword === 'a'){
                return {userlogin:true};
            }
            else {
                return {userlogin:false};
            }
        case 'COLLAPSED':
            return Object.assign({}, state, {toggle:!state.toggle});
        default:
            return state;
    }
}

export default postReducer;