const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
