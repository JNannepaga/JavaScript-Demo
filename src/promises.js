const Posts = [
    {title : 'Post One' , body : 'This is post One'},
    {title : 'Post two' , body : 'This is post two'}
]

export function getPosts()
{
    setTimeout(()=>{
        let Output = undefined;
        Posts.forEach((post, index)=>{
            Output = `<li key=${index}>${post.title}</li>`;
        });
        document.body.innerHTML = Output;
    },1000)
}

export function createPost(post, callback){
    setTimeout(()=>{
        Posts.push(post);
        callback();
    },1000)
}

createPost({title : 'Post three' , body : 'This is post three'}, getPosts);