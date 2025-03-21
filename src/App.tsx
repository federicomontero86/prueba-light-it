import { useContext, useState } from "react";
import { toast } from "react-toastify";

import {
  Patient,
  PatientContext,
} from "./contexts/PatientContext/PatientContext";
import { PatientCard } from "./components/PatientCard";
import { Modal } from "./components/Modal";
import { PatientForm, PatientFormValues } from "./components/PatientForm";

function App() {
  const context = useContext(PatientContext);

  if (!context) {
    throw new Error("App debe usarse dentro de un PatientProvider");
  }

  const { patients, setPatients } = context;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPatient, setEditingPatient] = useState<Patient | null>(null);

  const handleAddPatient = () => {
    setEditingPatient(null);
    setIsModalOpen(true);
  };

  const handleEditPatient = (patient: Patient) => {
    setEditingPatient(patient);
    setIsModalOpen(true);
  };

  const handleSubmit = (data: PatientFormValues) => {
    try {
      if (editingPatient) {
        setPatients((prev) =>
          prev.map((p) => (p.id === editingPatient.id ? { ...p, ...data } : p))
        );
        toast.success("¡Paciente actualizado con éxito!");
      } else {
        setPatients((prev) => [
          {
            ...data,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            avatar: data.avatar || "placeholder-avatar.jpg",
          },
          ...prev,
        ]);

        toast.success("¡Paciente agregado con éxito!");
      }

      setIsModalOpen(false);
    } catch (error) {
      toast.error(
        "Ocurrió un error al guardar el paciente. Inténtalo nuevamente."
      );
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Gestión de Pacientes</h1>

      <button
        onClick={handleAddPatient}
        className="mb-4 bg-green-200 text-green-600 border-2 border-green-300 hover:text-green-700 hover:bg-green-300 hover:border-green-400 px-3 py-2 rounded-md transition"
      >
        Agregar Paciente
      </button>

      <div className="space-y-4">
        {patients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onEdit={handleEditPatient}
          />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">
          {editingPatient ? "Editar Paciente" : "Agregar Paciente"}
        </h2>
        <PatientForm
          defaultValues={editingPatient || undefined}
          onSubmit={handleSubmit}
        />
      </Modal>
    </div>
  );
}

export default App;
