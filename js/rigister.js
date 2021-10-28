function User( Uemail,UPw) {
    this.Uemail = Uemail;
    this.UPw=UPw;
 }
 $('#register').click(function () {
    let Uemail = $('#staticEmail').val();
    let UPw = $('#inputPassword').val();
    let newUser = new User(Uemail,UPw);
    let selectedUsers = JSON.parse(window.localStorage.getItem('RegisteredUsers'));
    console.log(selectedUsers);
    if (selectedUsers == null) {
       let a = [];
       a.push(newUser);
       console.log(newUser);
       window.localStorage.setItem('RegisteredUsers', JSON.stringify(a));
    } else {
       selectedUsers.push(newUser);
       window.localStorage.setItem('RegisteredUsers', JSON.stringify(selectedUsers));
    }
 })



 