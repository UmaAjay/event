const userService = {
    get: function(id) {
        return fetch('https://umaajay.onrender.com/user/' + id, {
           method: 'GET',
           credentials: 'include'
        }).then(res => res.json());
    },
    register: function(data) {
        return fetch(`https://umaajay.onrender.com/user/register`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => res.json()).then(user => sessionStorage.setItem('user', JSON.stringify(user)));
    },
    login: function(data) {
        return fetch(`https://umaajay.onrender.com/user/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            return res.json();
        }).then(user => sessionStorage.setItem('user', JSON.stringify(user)));
    },
    logout: function() {
        return fetch(`https://umaajay.onrender.com/user/logout`, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.text()).then(() => sessionStorage.clear());
    }
}

export default userService;