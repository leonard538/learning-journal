
// Fetching from JSON File
async function fetchJSON(filepath) {
    return fetch(filepath)
        .then(res => res.json())
        .then(data => data)
}


function renderBlogPreview(data) {
    
}


// Listening to Developer Mode
document.getElementById('developer').addEventListener('click', (e) => {
    if (e.detail === 3) {
        document.getElementById('add-blog').style.display = 'block'
    }
})