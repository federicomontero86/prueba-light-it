import { useState, useEffect, ReactNode } from "react";
import { fetchPatients } from "../../services/fetchPatients";
import { PatientContext } from "./PatientContext";
import { Patient } from "../PatientContext/PatientContext";

export const PatientProvider = ({ children }: { children: ReactNode }) => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const placeholderAvatar = "placeholder-avatar.jpg";
    const loadPatients = async () => {
      const data = await fetchPatients();

      const mappedPatients = data.map((p: Patient) => ({
        id: p.id,
        name: p.name,
        description: p.description || "Sin descripción disponible",
        website: p.website || "https://example.com",
        createdAt: p.createdAt || new Date().toISOString(),
        avatar: p.avatar || placeholderAvatar,
      }));

      setPatients(mappedPatients);
    };

    loadPatients();
  }, []);

  return (
    <PatientContext.Provider value={{ patients, setPatients }}>
      {children}
    </PatientContext.Provider>
  );
};
