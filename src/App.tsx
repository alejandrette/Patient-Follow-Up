import { ToastContainer } from "react-toastify"
import { FormModal } from "./components/FormModal"
import { PatientList } from "./components/PatientList"
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <h1 className="text-2xl md:text-3xl font-bold"><span className="text-indigo-600">Barbershop</span> Patient Follow-up</h1>
      <FormModal />
      <PatientList />
      <ToastContainer />
    </div>
  )
}

export default App
