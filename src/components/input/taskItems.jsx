export const TaskItems = ({title, status, color}) => {

    return(
        <div>
           <p style={{color}}>{`${title} - ${status}`}</p>
        </div>
    )
}