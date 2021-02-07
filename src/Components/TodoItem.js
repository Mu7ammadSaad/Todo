

const TodoItems = (props) =>{
    const {items, delItem} = props;
    const ListItems = items.length? items.map(item =>{
        return(
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={() => delItem(item.id)}>&times;</span>
            </div>
        )
    })
    : <p>There is no Items to show </p>


    return(
        <div className="listItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {ListItems}
        </div>     
    )
}

export default TodoItems;