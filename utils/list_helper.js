const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    if(blogs.length === 0){ return 0}
    
    const total = blogs.reduce((acc, cur) => acc + cur.likes, 0)

    return total
}

const favoriteBlog = (blogs) => {
    let mostLikes = 0
    const fav = {
        title: "",
        author: "",
        likes: 0
    }

    blogs.forEach(x => {
        if(x.likes > mostLikes){
            fav.title = x.title
            fav.author = x.author
            fav.likes = x.likes
            mostLikes = x.likes
        }
    });
    
    return fav
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}