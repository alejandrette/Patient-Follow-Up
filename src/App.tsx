import { PatientForm } from "./components/PatientForm"
import { PatientList } from "./components/PatientList"

function App() {

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <h1 className="text-3xl font-bold"><span className="text-indigo-600">Veterinary</span> Patient Follow-up</h1>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <PatientForm />
        <PatientList />
      </div>
    </div>
  )
}

export default App
