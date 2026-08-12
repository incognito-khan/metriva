const SecondaryButton = ({
  children,
  isLoading = false,
  loadingText = "Loading...",
  disabled = false,
  onClick,
  type = "button",
  className = "",
  variant = "text",
}) => {
  const baseClasses =
    "w-full py-2 px-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors";

  const variantClasses = {
    text: "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50",
    outline:
      "text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {isLoading ? loadingText : children}
    </button>
  );
};

export default SecondaryButton;
