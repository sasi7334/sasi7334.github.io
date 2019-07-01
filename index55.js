function getdetails(){
    var username = document.getElementById('username').value;
    var baseurl = 'https://api.github.com/users/';
    var URL = baseurl + username;


$.ajax({
    ur1: URL,
    success: function (data) {
        console.log(data);
        
    },
    error: function (error) {
        console.log(error);
    }
});

}