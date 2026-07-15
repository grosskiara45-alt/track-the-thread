const username = (process.env.RAVELRY_USER || '').trim();
const password = (process.env.RAVELRY_KEY || '').trim();

async function fetchPopularPatterns(){
    if (!username || !password) {
        throw new Error("Ravelry credentials are missing. Check your .env file and ensure dotenv is configured.");
    }
    
    try {

        console.log(`Authenticating with Username length: ${username.length}, Password length: ${password.length}`);

        const auth = 'Basic ' + Buffer.from(`${username}:${password}`).toString("base64");
        const ravelryURL = `https://api.ravelry.com/patterns/search.json?sort=recently-popular&page_size=10`;

        const res = await fetch(ravelryURL, {
            method: "GET",
            headers: {
                "Authorization": auth,
                "Accept": "application/json"

            }
        });

        if(!res.ok){
            const errorText = await res.text();
            console.error("Ravelry API response error", errorText);
            
            throw new Error(`Ravelry API error Status: ${res.status}`);
        }

        const returnedData = await res.json();
        return returnedData;

    } catch (error){
        console.error("Error fetching popular patterns", error);
        throw error;
    }
}


module.exports = { fetchPopularPatterns};