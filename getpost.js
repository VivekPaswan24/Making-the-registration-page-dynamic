const posts = [
    { title: 'Post One', body: 'This is post one', createdAt: new Date().getTime() },
    { title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime() }
];

const user = { Name: "vivek", lastActivityTime: '6 jan' }
let intervalid = 0

function getPost() {
    clearInterval(intervalid)
    intervalid = setInterval(() => {
        setTimeout(() => {
            let output = ''
            posts.forEach((post) => {
                output += `<li>${post.title}   last updated - ${Math.floor((new Date().getTime() - post.createdAt) / 1000)} second ago</li>`;
            })
            document.body.innerHTML = output
        }, 1000);
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() })
            const error = false;
            if (!error) {
                resolve(posts)
            } else {
                reject("Something went wrong")
            }
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date().getTime()
            resolve(user.lastActivityTime)
        }, 1000)
    })
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length !== 0) {
                resolve(posts.pop())
            } else {
                reject("Array is empty")
            }
        }, 1000)

    });
}

async function addPost(post){
    try{
        const newPost= await createPost(post)
        const lastactive=await updateLastUserActivityTime()
        console.log(lastactive)
        getPost()
    } catch(err){
        console.log(err)
    }
}

async function postdelete(){
    try{
        const deletedpost = await deletePost()
        const lastactive =await updateLastUserActivityTime()
        console.log(lastactive)
        getPost()
    }catch(err){
        console.log(err)
    }
}
addPost({ title: "Post Three", body: "This is post three" })
postdelete()


