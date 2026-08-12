const VerificationAlert = ({ message, email }) => {
  return (
    <div className="mb-6 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
      <p className="text-sm text-amber-800 dark:text-amber-200 mb-2">
        {message}
      </p>
      <a
        href={`/verify-email?email=${encodeURIComponent(email.toLowerCase().trim())}`}
        className="text-sm font-medium text-amber-900 dark:text-amber-100 hover:underline"
      >
        Verify your email now
      </a>
    </div>
  );
};

export default VerificationAlert;
