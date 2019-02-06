const url = 'https://bolajiayodeji.com/'
const urlSlug = (postTitle, category) => {
let postUrl = postTitle.toLowerCase().split(' ');
let postSlug = `${url}` + category + '/' + postUrl.join('-');
return postSlug;
}
let postTitle = 'Introduction to Chrome Lighthouse'
let category = 'dt'
console.log(urlSlug(postTitle, category));

// https://bolajiayodeji.com/dt/introduction-to-chrome-lighthouse
