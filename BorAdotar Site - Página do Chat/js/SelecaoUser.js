
const users = document.querySelectorAll('.a');

users.forEach( user => {

    user.addEventListener('click', function(){
        users.forEach(props => props.classList.remove('user-active'));
        SelectUser(this);
    });
});


function SelectUser(user){

    user.classList.add('user-active');


}
