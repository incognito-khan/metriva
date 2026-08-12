const SubmitButton = ({ 
  children, 
  isLoading = false, 
  loadingText = "Loading...", 
  disabled = false,
  className = ""
}) => {
  return (
    <button
      type="submit"
      disabled={isLoading || disabled}
      className={`w-full py-2.5 px-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${className}`}
    >
      {isLoading ? loadingText : children}
    </button>
  );
};

export default SubmitButton;
