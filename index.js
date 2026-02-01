
// Fetching from JSON File
async function fetchJSON() {
    const res = await fetch('data.json');
    const data = await res.json();
    return data;
}

// Store all blogs and track how many are displayed
let allBlogs = [];
let displayedCount = 0;
const LOAD_MORE_COUNT = 4;

// Get initial count based on screen width
function getInitialCount() {
    if (window.innerWidth >= 870) {
        return 6; // Desktop: 3 columns, show 6
    } else if (window.innerWidth >= 500) {
        return 4; // Tablet: 2 columns, show 4
    } else {
        return 3; // Mobile: 1 column, show 3
    }
}

function renderBlogs(blogs) {
    console.log(blogs)
    const blogContainer = document.getElementById('blogs-container');
    
    blogs.forEach(blog => {
        const blogDiv = document.createElement('a');
        blogDiv.href = ''
        blogDiv.classList.add('blogs');
        blogDiv.innerHTML = `
            <img src="images/${blog.image}" alt="" class="blog-img">
            <span class="blog-date">${blog.date}</span>
            <h2 class="blog-title">${blog.title}</h2>
            <p class="blog-shortdesc">${blog.short_desc}</p>
        `;
        blogContainer.appendChild(blogDiv);
    });
}

function updateViewMoreButton() {
    const viewMoreBtn = document.getElementById('view-more-btn');
    if (displayedCount >= allBlogs.length) {
        viewMoreBtn.style.display = 'none';
    } else {
        viewMoreBtn.style.display = 'block';
    }
}

function loadMoreBlogs() {
    const nextBlogs = allBlogs.slice(displayedCount, displayedCount + LOAD_MORE_COUNT);
    renderBlogs(nextBlogs);
    displayedCount += nextBlogs.length;
    updateViewMoreButton();
}

function renderBlogPreview(data) {
    allBlogs = data;
    const initialCount = getInitialCount();
    const initialBlogs = allBlogs.slice(0, initialCount);
    
    renderBlogs(initialBlogs);
    displayedCount = initialBlogs.length;
    updateViewMoreButton();
}

// Enter Blog
document.getElementById('featured-blog').addEventListener('click', () => {
    
})

// Listening to Developer Mode
document.getElementById('developer').addEventListener('click', (e) => {
    if (e.detail === 3) {
        document.getElementById('add-blog').style.display = 'block'
        document.querySelector('body').style.backgroundColor = '#505050'
        document.getElementById('header').style.backgroundColor = '#505050'
    }
})

document.getElementById('dev-close').addEventListener('click', e => {
    document.getElementById('add-blog').style.display = 'none'
    document.querySelector('body').style.background = 'none'
    document.getElementById('header').style.background = 'white'
})


async function init() {
    const data = await fetchJSON();
    renderBlogPreview(data);
    
    // Add event listener for view more button
    document.getElementById('view-more-btn').addEventListener('click', loadMoreBlogs);
}

init();