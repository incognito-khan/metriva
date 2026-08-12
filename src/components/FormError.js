"use client";

const FormError = ({ error }) => {
  if (!error) return null;

  return (
    <div
      className="p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800"
      role="alert"
    >
      <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
    </div>
  );
};

export default FormError;
