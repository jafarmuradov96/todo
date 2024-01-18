import '../todo/TodoList.css';
import TodoItem from './TodoItem';


const TodoList = ({data, setData, deleteRow, isChecked,  handleEditModal}) => {


    const listTitle = data.length <= 0 ? 'No Todos' : "Todo list";

    const handleCheckboxChange = (id) => {
        setData((prevList) =>
          prevList.map((item) =>
            item.id === id ? { ...item, isChecked: !item.isChecked } : item
          )
        );
      };
    return (
        <div className='todos'>
            <p>{listTitle}</p>

            <ul className="lists">
            {
                data.map((item,index) => (
                    <TodoItem 
                    item = {item}
                    deleteRow = {deleteRow} 
                    isChecked = {isChecked}
                    handleEditModal = {handleEditModal}
                    handleCheckboxChange = {handleCheckboxChange}
                    />
                ))
            }
            </ul>


        
        </div>
    )
}

export default TodoList;