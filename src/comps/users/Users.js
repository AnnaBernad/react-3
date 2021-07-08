import User from "../user/User";

export default function Users ({itemsU}) {


    return(
        <div>
            {
                itemsU.map((value) => <User key={value.id} itemU={value}/>)
            }
        </div>

    )

}
