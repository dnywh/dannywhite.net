console.log("Hello from Raindrop!")

// Add your scripts here
fetch('https://api.raindrop.io/rest/v1/raindrops/0?sort=-created&search=%23link-list', {
    headers: {
        'Content-Type': 'application/json',
        // TODO add process.env.OAUTH_TOKEN
        'Authorization': 'Bearer ' + process.env.RAINDROP_ACCESS_TOKEN,
    },
})
    .then(response => response.json())
    .then(data => console.log(data));

    // Collection ID: 0 (all except for trash)
    // Collection ID: 34946946 (Link List)
    // https://api.raindrop.io/rest/v1/collection/34946946
    // Raindrops in that collection:
    // https://api.raindrop.io/rest/v1/raindrops/34946946
    // Example raindrop ID: 332642082 (Ultra)
    // Notable parameters: title, link (full URL text), domain (short URL text), excerpt (text), cover (image URL), note (text)
    // -sort -created (default)

    // https://api.raindrop.io/rest/v1/tags/34946946
    // Tag ID: linklist
    // Search query: #linklist = ?search=%23linklist