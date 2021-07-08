import {useState} from "react";
import {getUserPosts} from "../../services/API/API";
import Post from "../post/Post";

export default function User({itemU}) {

    let [posts, setPosts] = useState(null)


    return (
        <div>
            <div>
                {itemU.name} - {itemU.username} - {itemU.email} - <button
                onClick={() => getUserPosts(itemU.id).then(value => setPosts(value.data))}>click for posts</button>
            </div>
            <div>
                {
                    posts && posts.map(value => <Post key={value.id} itemP={value}/>)
                }
            </div>
        </div>
    )
}
