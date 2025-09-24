
export default function Footer() {
  return (
    <footer className="border border-slate-600 shadow-sm dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-2 py-4 font-medium text-center flex justify-between">
        <p className="text-sm  text-gray-600 sm:text-center dark:text-gray-400">
          © Eng. Ahmed El Sherif, {new Date().getFullYear()}. All Rights Reserved.
        </p>
        <p className="text-lg flex gap-4">
          <a href='https://www.youtube.com'><i className="fa-brands fa-youtube text-red-600"></i></a>
              <a 
              href='https://www.linkedin.com/in/ahmed-el-sherif%E2%94%82cmrp-%C2%AE%E2%94%82crl-%C2%AE%E2%94%82cama2-%C2%AE%E2%94%82asu%E2%80%93li%C2%AE%E2%94%82bmi%C2%AE%E2%94%82tot%C2%AE-2010b3121/' target='_blank'><i className="fa-brands fa-linkedin text-blue-600"></i></a>
              </p>
              </div>
    </footer>
  );
}
