import AuthLink from "./AuthLink";

const AuthFooter = ({
  text,
  linkText,
  linkHref,
  secondaryLink,
  className = "",
}) => {
  return (
    <div
      className={`text-center text-sm text-zinc-600 dark:text-zinc-400 mt-6 ${className}`}
    >
      {text && (
        <p>
          {text} <AuthLink href={linkHref}>{linkText}</AuthLink>
        </p>
      )}
      {secondaryLink && (
        <p className="mt-2">
          <a
            href={secondaryLink.href}
            className={
              secondaryLink.className ||
              "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
            }
          >
            {secondaryLink.text}
          </a>
        </p>
      )}
    </div>
  );
};

export default AuthFooter;
