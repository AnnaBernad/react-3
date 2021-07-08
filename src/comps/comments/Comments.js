import Comment from "../comment/Comment";


export default function Comments ({itemsC}) {


    return(
        <div>
            {
                itemsC.map((value) => <Comment key={value.id} itemC={value}/>)
            }
        </div>

    )

}
