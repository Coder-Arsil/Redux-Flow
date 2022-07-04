import "bootstrap/dist/css/bootstrap.min.css"
import Users from "./Components/new/Users"
import storage from "./redux/storage"
import { Provider } from 'react-redux'


function App() {
  return (
    <div>
      <h4 className="bg-warning text-dark py-3 d-flex justify-content-center">Redux Flow Practical</h4>
      <Provider store={storage}>
        <Users />
      </Provider>
    </div>
  )
}
export default App