const SuccessState = ({ title, message, onAction, actionText, secondaryAction, secondaryActionText }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-950/30 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-green-600 dark:text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
        {title}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        {message}
      </p>
      <div className="space-y-4">
        {onAction && (
          <button
            onClick={onAction}
            className="w-full py-2.5 px-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-950 dark:focus:ring-zinc-50 focus:ring-offset-2 transition-colors"
          >
            {actionText}
          </button>
        )}
        {secondaryAction && (
          <button
            onClick={secondaryAction}
            className="w-full py-2.5 px-4 text-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            {secondaryActionText}
          </button>
        )}
      </div>
    </div>
  );
};

export default SuccessState;
