export function renderPosts(container, posts) {

    if (posts.lenght === 0) {
       container.innerHTML = `<div class="message">No posts yet</div>`;
       return;
    } 

    container.innerHTML = "";

    const postHtml = posts.map((post) => createPostHtml(post));
    container.append(...postHtml);
}

    function createPostHtml(post) {

        const { id, title } = post;

        const item = document.createElement("a");
        item.classList.add("post");
        item.href = `/post/?id=${id}`;

        const titleElement = document.createElement("h3");
        titleElement.innerText = title;

        item.appendChild(titleElement);
    

        return item;
    }