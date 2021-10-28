$('#login').click(function () {
    let userName = $("#nameEmail").val();
    let pwd = $("#passwordd").val();

    let users = JSON.parse(window.localStorage.getItem('RegisteredUsers'));

    const currentUser = users.find(({
        Uemail
    }) => Uemail === userName);

    if (currentUser) {
        console.log('Current User: ' + currentUser);
    }

    if (currentUser.Uemail === userName && currentUser.UPw === pwd) {
        window.location.href = "homepage.html"
    }
     else {
        $('#wronginformation').removeClass('hidden');
    }

    //Check password if currentUser is defined
    //other wise stay on same page and write message that user is not registered. Please register first
    //   window.location.href = "home.html";
});