import React, { useState } from "react";
import { Patient } from "../contexts/PatientContext/PatientContext";

interface PatientCardProps {
  patient: Patient;
  onEdit: (patient: Patient) => void;
}

const placeholderAvatar = "placeholder-avatar.jpg";

export const PatientCard: React.FC<PatientCardProps> = ({
  patient,
  onEdit,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState(
    patient.avatar || placeholderAvatar
  );

  return (
    <div className="p-4 border border-gray-100 rounded-xl shadow-sm bg-blue-50 hover:translate-y-1 hover:translate-x-1 hover:shadow-xs transition">
      <img
        src={avatarSrc}
        alt={`${patient.name}'s avatar`}
        className="w-16 h-16 rounded-full mb-4"
        onError={() => setAvatarSrc(placeholderAvatar)}
      />
      <h2 className="text-xl font-bold">{patient.name}</h2>
      <p className="text-gray-700 mb-2">{patient.description}</p>

      <div className="flex items-center space-x-2 mt-4">
        <button
          className="bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200 hover:border-gray-400 px-2 py-1 text-xs rounded transition"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Cerrar detalles" : "Ver detalles"}
        </button>
        <button
          className="bg-pink-100 text-pink-600 border border-pink-300 hover:bg-pink-200 hover:border-pink-300 px-2 py-1 text-xs rounded transition"
          onClick={() => onEdit(patient)}
        >
          Editar
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 text-gray-600">
          <p>
            <strong>Sitio web:</strong>{" "}
            <a
              href={patient.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {patient.website}
            </a>
          </p>
          <p>
            Creado el:{" "}
            {new Date(patient.createdAt).toLocaleDateString("es-ES", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>
      )}
    </div>
  );
};
