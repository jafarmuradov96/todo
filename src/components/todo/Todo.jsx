    import { useState } from 'react';
    import Button from '../UI/Button';
    import Modal from '../UI/Modal';
    import '../todo/Todo.css';
    import TodoList from '../todo/TodoList';


    const Todo = () => {
        const [data, setData] = useState([]);
        const [isModal, setIsModal] = useState(false);
        const [title, setTitle] = useState('');
        const [itemId, setItemId] = useState(null);
        const [isChecked, setIsChecked] = useState(false);
        const [modalAction, setModalAction] = useState('Add Task');


        const handleTitle = (e) => {
            setTitle(e.target.value)
        };

        const handleDeleteRow = (targetIndex) => {
        setData(data.filter((item) => item.id !== targetIndex))
        };
        
        const handleAddModal = () => {
            setModalAction('Add Task')
            setIsModal(true)
        }

        const handleEditModal = (id, title, isChecked, select ) =>  {
            setItemId(id)
            setTitle(title)
            setModalAction('Update Task')
            setIsModal(true)
        }
        

        
        const handleUpdate = ( newTitle,newIsChecked, id) => {
            setData((prevData) => {
                return prevData.map((el) => {
                    if (el.id === id) {
                        return {
                            ...el,
                            title: newTitle,
                            isChecked: newIsChecked,
                        };
                    }
                    return el;
                });
            });
        };
    

        const handleAdd = (title, isChecked) => {
        setData((prevList) => {
            return [
            ...prevList,
            {title, isChecked,  id: Math.random().toString()}
            ]    
        }) 
        }
        

        const handleSubmit = (e) => {
            e.preventDefault();

            if (modalAction === 'Add Task') {
                handleAdd(title, isChecked);
            } else if (modalAction === 'Update Task'){
                handleUpdate( title, isChecked, itemId);
            }

            setTitle('');
            setIsModal(false)
        }



        return (
            <div className='todo'>
                <div className='todo-header'>
                    <Button className='add-btn' type='submit' onClick={handleAddModal}>Add Task</Button>
                </div>
                <div className='todo-list'>
                    <TodoList 
                    data={data} 
                    setData = {setData}
                    deleteRow = {handleDeleteRow} 
                    isChecked = {isChecked}
                    setIsChecked = {setIsChecked}
                    handleEditModal = {handleEditModal}
                    />
                </div>

                <Modal isModal={isModal}>
                    <div className='add-modal-content'>
                        <div className='modal-heading'>
                            <h3>Add TODO</h3>
                        </div>
                        <form className='form' onSubmit={handleSubmit}>
                            <label className='label'>Title</label>
                            <input type="text" className='input' value={title} onChange={handleTitle}/>

                            <div className='modal-btns'>
                                <Button className='add-btn' type = 'submit'  >{modalAction}</Button>
                                <Button className='cancel-btn' onClick={() => setIsModal(false)} >Cancel</Button>
                            </div>
                        </form>

                    </div>
                </Modal>
            </div>
        )
    }

    export default Todo;