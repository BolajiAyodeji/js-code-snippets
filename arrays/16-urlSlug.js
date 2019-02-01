const url = 'https://bolajiayodeji.com/dt/'
const postTitle = 'Introduction to Chrome Lighthouse'

const urlSlug = postTitle.toLowerCase().split(' ');
const postUrl = `${url}` + urlSlug.join('-')
console.log(postUrl);
