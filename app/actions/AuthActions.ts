//First 

//https://mealie.code-catalyst.com/api/auth/token

//  -H 'accept: application/json' \
//-H 'Content-Type: application/x-www-form-urlencoded' \
//  -H 'Authorization: Bearer token'
//  -d 'username=username&password=password&remember_me=false'


import axios from 'axios';

const baseUrl = "https://mealie.code-catalyst.com/api"

function generateToken(){

    // Passing configuration object to axios
    axios({
        method: 'post',
        url: `${baseUrl}/auth/token`,
    }).then((response) => {
        console.log(response.data);
    });
    
}