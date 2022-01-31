import "./userDetails.css"

export const  UserDetails = ({name, add, age,aboveAge}) => {
    return <div>
        <h2>Username : {name}</h2>
        <h2>Age : {age}</h2>
        <h2>Above Age : {aboveAge?"Yes":"NO"}</h2>
        <p className="add">Address : {add}</p>
    </div>
}