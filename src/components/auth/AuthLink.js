const AuthLink = ({ href, children, className = "" }) => {
  return (
    <a
      href={href}
      className={`font-medium text-zinc-900 dark:text-zinc-50 hover:underline ${className}`}
    >
      {children}
    </a>
  );
};

export default AuthLink;
