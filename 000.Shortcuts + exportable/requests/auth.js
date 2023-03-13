
export async function login(email, password) {
    const userData = await post('url for login post', { email, password });

    localStorage.setItem('userData', JSON.stringify({     // or use SessionStorage for keep data only while browser session
        email: userData.email,
        id: userData._id,
        accessToken: userData.accessToken
    }))    
}