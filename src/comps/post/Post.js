import {useState} from "react";
import {getPostComments} from "../../services/API/API";
import Comment from "../comment/Comment";

export default function Post ({itemP}) {

    let [comments, setComments] = useState(null)


    return(
        <div>
            <div>
            {itemP.title} - {itemP.body} - <button onClick={()=>getPostComments(itemP.id).then(value => setComments(value.data))}>click for comments</button>
            </div>
            <div>
                {
                    comments && comments.map(value => <Comment key={value.id} itemC={value}/>)
                }
            </div>

        </div>

    )

}
