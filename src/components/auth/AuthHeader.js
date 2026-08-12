const AuthHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h1>
      {subtitle && (
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default AuthHeader;
