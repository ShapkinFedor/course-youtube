import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        console.log("robit")

        if (sort) {
            return [...posts].sort((a, b) => a['title'].localeCompare(b['title']))
        }
        return posts;
    }, [sort, posts])

    return sortedPosts;
}
export const usePosts = (posts, sort, query='') => {
    const sortedPosts = useSortedPosts(posts, query)
    return useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])
}
export default usePosts;