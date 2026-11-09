const DEMO_USER = {
    email: 'brasil@pokedex.com',
    password: '654321',
};

export function validateLogin(
    email: string,
    password: string
) : boolean {
    return email === DEMO_USER.email && password === DEMO_USER.password;
}
