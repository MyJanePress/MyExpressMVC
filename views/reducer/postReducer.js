const postReducer = (state, action) => {
    // console.log('payload', action.payload);
    switch(action.type) {
        case 'LOG_IN':
            const cusEmail = document.getElementById('email').value;
            const cusPassword = document.getElementById('password').value;
            if(cusEmail === 'janepress940214@gmail.com' && cusPassword === 'a'){
                return { userlogin: true };
            }
            else {
                return { userlogin: false };
            }
        case 'COLLAPSED':
            return Object.assign({}, state, {toggle:!state.toggle});
        case 'LOG_OUT':
            console.log('user login')
            return { userlogin: false };
        default:
            return state;
    }
}

export default postReducer;