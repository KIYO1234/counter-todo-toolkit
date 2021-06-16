import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {Counter} from './features/counter/Counter'
import Todo from './features/todo/Todo'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/todo'} component={Todo}></Route>
                <Route path={['/', '/counter']} component={Counter}></Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router