
// Fetching from JSON File
async function fetchJSON() {
    const res = await fetch('data.json');
    const data = await res.json();
    return data;
}

function renderBlogPreview(data) {
    const blogContainer = document.getElementById('blogs-container')

    data.forEach(blog => {
        const blogDiv = document.createElement('div')
        blogDiv.classList.add('blogs')
        blogDiv.innerHTML = `
            <img src="images/${blog.image}" alt="" class="blog-img">
            <span class="blog-date">${blog.date}</span>
            <h2 class="blog-title">${blog.title}</h2>
            <p class="blog-shortdesc">${blog.short_desc}</p>
        `
        blogContainer.appendChild(blogDiv)
    });
}


// Listening to Developer Mode
document.getElementById('developer').addEventListener('click', (e) => {
    if (e.detail === 3) {
        document.getElementById('add-blog').style.display = 'block'
    }
})


async function init() {
    const data = await fetchJSON();
    renderBlogPreview(data);
}

init();