import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {useSelector, useDispatch} from 'react-redux'
import {todoList, addTask, deleteTask} from '../todo/todoSlice'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    textAlign: 'center',
  },
  listItem: {
    justifyContent: 'center',
  },
  addBtn: {
      marginTop: 9,
      marginLeft: 5
  },
  deleteBtn: {
      marginLeft:60
  }
}));

const Todo: React.FC = () => {
    const classes = useStyles()
    const list = useSelector(todoList)
    // console.log(list)
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const add = () => {
        dispatch(addTask(title))
        setTitle('')
    }
    return (
        <div className={classes.root}>
            <h1>Todo List with Redux Toolkit</h1>
            <TextField 
                label='タスクを入力' 
                variant='outlined'
                onChange={handleChangeTitle}
                value={title}
            />
            <Button 
                variant='contained' 
                color='primary'
                onClick={add}
                className={classes.addBtn}
            >追加</Button>
            <List>
                {list.map(item => 
                    <ListItem className={classes.listItem}>
                        {item.id}：
                        {item.title}
                        <Button 
                            variant='contained' color='primary'
                            className={classes.deleteBtn}
                            onClick={() => dispatch(deleteTask(item))}
                        >削除</Button>
                    </ListItem>
                )}
            </List>
        </div>
    )
}

export default Todo
