
function createBlog(title, body) {
    if (!title) {
        throw new Error('A title is required!'); 
    }
    if (!body) {
        throw new Error('A body is required!'); 
    }

    return console.log(`${title} - ${body}`);
    
}
export default createBlog