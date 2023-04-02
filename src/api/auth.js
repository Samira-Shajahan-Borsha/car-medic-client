export const setAuthToken = (user) => {
    const currentUser = {
        email: user?.email
    }
    //get jwt token
    fetch('https://car-medic-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            //local storage is easiest . but not the best place to store jwt token.
            localStorage.setItem('car-medic-token', data.token);
        });
}