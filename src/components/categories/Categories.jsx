import './Categories.css';


const Categories = () => {

    return (
        <div className='categories'>
            <select>
                <option value="All">All</option>
                <option value="Incomplete">Incomplete</option>
                <option value="Completed">Completed</option>
            </select>
        </div>
    )
}

export default Categories;