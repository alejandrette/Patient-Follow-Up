import { PatientForm } from "./PatientForm";
import { usePatientState } from "../store/store";
import { DraftPatient } from "../types";
import { useForm } from "react-hook-form";

export function FormModal() {
  const { stateModal, showModal, closeModal, addPatient, idPatientActive, updatePatient } = usePatientState()
  const { register, handleSubmit, formState: {errors}, reset, setValue } = useForm<DraftPatient>()

  const registerPatient = (data: DraftPatient) => {
    if(idPatientActive){
      updatePatient(data)
    } else {
      addPatient(data)
    }
    closeModal()
    reset()
  }

  return (
    <>
      <button
        onClick={showModal}
        className="block my-4 text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:bg-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Add Patient
      </button>

      {stateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-md max-w-2xl w-full p-6 dark:bg-gray-700">

            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {idPatientActive 
                ? <><span className="text-indigo-500 font-bold">Update</span> Patient</> 
                : <>Add and <span className="text-indigo-500 font-bold">Manage</span> Patients</>}
                
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <PatientForm register={register} errors={errors} setValue={setValue} />
            </div>

            <div className="flex justify-end mt-6 border-t pt-4">
              <button
                onClick={handleSubmit(registerPatient)}
                className="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                {idPatientActive ? 'Update Pacient' : 'Add Pacient'}
              </button>
              <button
                onClick={closeModal}
                className="ml-3 px-5 py-2.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
