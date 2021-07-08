import Post from "../post/Post";


export default function Posts ({itemsP}) {


    return(
        <div>
            {
                itemsP.map((value) => <Post key={value.id} itemP={value}/>)
            }
        </div>

    )

}
