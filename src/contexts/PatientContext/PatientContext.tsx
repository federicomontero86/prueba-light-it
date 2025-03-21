import React, { createContext } from "react";

export interface Patient {
  id: string;
  name: string;
  description: string;
  website: string;
  createdAt: string;
  avatar: string;
}

interface PatientContextProps {
  patients: Patient[];
  setPatients: React.Dispatch<React.SetStateAction<Patient[]>>;
}

export const PatientContext = createContext<PatientContextProps | undefined>(
  undefined
);
