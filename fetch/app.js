//GET

fetch(`https://reqres.in/api/users/997`).then(response=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(`Error. ${err}`)
});

// POST
 fetch(`https://reqres.in/api/users`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        name: 'lalle1'
    })
})
  .then(response => {
    return response.json()
}).then(data=>console.log(data));
