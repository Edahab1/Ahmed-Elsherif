
export default function Footer() {
  return (
    <footer className="border border-slate-600 shadow-sm dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-2 py-4 font-medium text-center">
        <span className="text-sm  text-gray-600 sm:text-center dark:text-gray-400">
          © Eng. Ahmed El Sherif, {new Date().getFullYear()}. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
