const routes = [
    {
        path: '/',
        method: 'GET',
        handler: (request, h) => {
            return 'Homepage';
        }
    },
    {
        path: '/',
        method: '*',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        }
    },
    {
        path: '/about',
        method: 'GET',
        handler: (request, h) => {
            return 'About Page';
        }
    },
    {
        path: '/about',
        method: '*',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut'
        }
    },
    {
        // param from path
        // query after path ?key=value
        path: '/users/{username?}',
        method: 'GET',
        handler: (request, h) => {
            const { username = 'someone' } = request.params;
            const { lang } = request.query;
            if (lang === 'id') {
                return `Selamat pagi, ${username}`;
            } else {
                return `Hello ${username}`;
            }
        }
    },
    {
        // request payload
        path: '/login',
        method: 'POST',
        handler: (request, h) => {
            // contoh kasus payload yang dikirim
            // { "username": "harrypotter", "password": "encryptedpassword" }
            const { username, password } = request.payload;
            return `Welcome back ${username}`;
        }
    },
    {
        path: '/{any*}', //any path
        method: '*', //rest method / all method
        handler: (request, h) => {
            // Detailed
            // const response = h.response('Page Not Found!');
            // response.type('text/plain');
            // response.header('X-Custom', 'some-value');
            // return response;

            // Chained
            return h.response('Page Not Found!')
                .code(200)
                .type('text/plain')
                .header('X-Custom', 'some-value');
        }
    }
];

module.exports = routes;