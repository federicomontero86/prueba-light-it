import { useForm } from "react-hook-form";

export interface PatientFormValues {
  name: string;
  avatar?: string;
  website: string;
  description: string;
}

interface PatientFormProps {
  defaultValues?: PatientFormValues;
  onSubmit: (data: PatientFormValues) => void;
}

export const PatientForm: React.FC<PatientFormProps> = ({
  defaultValues,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientFormValues>({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input
          {...register("name", { required: "El nombre es obligatorio" })}
          className="border p-2 w-full rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Avatar</label>
        <input
          {...register("avatar")}
          className="border p-2 w-full rounded"
          placeholder="URL del avatar (opcional)"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Sitio Web</label>
        <input
          {...register("website", { required: "El sitio web es obligatorio" })}
          className="border p-2 w-full rounded"
          placeholder="URL del sitio web"
        />
        {errors.website && (
          <p className="text-red-500 text-sm">{errors.website.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Descripción</label>
        <textarea
          {...register("description", {
            required: "La descripción es obligatoria",
          })}
          className="border p-2 w-full rounded"
          rows={3}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Guardar
      </button>
    </form>
  );
};
