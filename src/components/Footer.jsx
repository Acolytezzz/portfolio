export default function Footer() {
  const date = new Date();

  const currentDate = date.getFullYear();

  return (
    <div className="flex flex-col items-center">
      <hr className="h-1 bg-black dark:bg-white w-screen mb-3" />
      <p className="text-2xl font-Cantora mb-5 dark:text-white">
        Copyright © {currentDate} - All Rights Reserved
      </p>
    </div>
  );
}
