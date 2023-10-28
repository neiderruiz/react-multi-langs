import { useState } from "react";
const langs = [
  {
    value: "en",
    label: "English",
    icon: "https://flagcdn.com/60x45/us.png",
  },
  {
    value: "es",
    label: "Español",
    icon: "https://flagcdn.com/60x45/es.png",
  },
  {
    value: "it",
    label: "Italiano",
    icon: "https://flagcdn.com/60x45/it.png",
  }
];
const DropdownLang = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(langs.find((l) => l.value === 'es')!);

  const changeLang = (lang: string) => {
    setIsOpen(false);
    setCurrentLang(langs.find((l) => l.value === lang)!);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900 border text-white px-4 py-2 rounded flex space-x-2"
      >
        <img className="w-8" src={currentLang.icon} alt="" />
        <span>{currentLang.label}</span>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-gray-900 border border-gray-300 rounded shadow-lg text-white py-2">
          <ul className="p-0 m-0 list-none">
            {langs.map((lang) => (
              <li
                key={lang.value}
                onClick={() => changeLang(lang.value)}
                className="flex  space-x-2   px-4 py-2 cursor-pointer hover:bg-gray-800"
              >
                <img className="w-8" src={lang.icon} alt="" />
                <span>{lang.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownLang;
