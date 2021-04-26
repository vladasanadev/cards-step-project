export default class API {
    static URL = "https://ajax.test-danit.com/api/v2/cards";

    static getHeaders() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API.token}`
        }
    }

    static async login(userData) {
        const result = await fetch(`${API.URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then(result => result.text());
        return result
    };

    static saveToken(tokenFromResponse) {
        API.token = tokenFromResponse;
        sessionStorage.setItem("token", JSON.stringify(tokenFromResponse))
    };

    static async saveCard(cardToSave) {
        const res = await fetch(`${API.URL}/cards`, {
            method: 'POST',
            headers: API.getHeaders(),
            body: JSON.stringify(cardToSave)
        });

        return res.json();
    }

    static async getAllCards () {
        const res = await fetch(`${API.URL}/cards`, {
            method: 'GET',
            headers: API.getHeaders(),
        });

        return res.json();
    }

    static async deleteCard (id) {
        const res = await fetch(`${API.URL}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${API.token}`
            },
        });

        return res.json();
    }

    static async editCard (newCard) {
        const res = await fetch(`${API.URL}/cards/${id}`, {
            method: 'PUT',
            headers: API.getHeaders(),
            body: JSON.stringify(newCard)
        });

        return res.json();
    }
}
