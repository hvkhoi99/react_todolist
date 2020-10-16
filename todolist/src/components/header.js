import React, {memo, useState} from 'react';

const Header = memo(props => {
    const [name, setName] = useState('');
    const {addTodo} = props;
    const onAddTodo = (e = {}) => {
        addTodo({
            id: new Date().valueOf(),
            name,
            status: false
        })
        setName('');
    }
    return(
        <div className="add">
            <h5>Danh sách những việc cần làm trong năm</h5>
            <div className="btn-group">
                <input 
                    id="work-name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}                    
                    className="form-control" 
                    placeholder="Thêm công việc..." />
                <button onClick = {(e) => onAddTodo(e)} className="btn btn-secondary">Thêm</button>
            </div>
        </div>
    )
})

export default Header