import { motion } from "framer-motion";
import { Select } from './styles';
import { useTranslation } from 'react-i18next';


export function SelectLanguage() {
  const { i18n } = useTranslation();

  function setLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
  }

  return (
    <Select as={motion.select} onChange={setLanguage} defaultValue={i18n.language}>
      <option value="pt">PT</option>
      <option value="en">EN</option>
      <option value="es">ES</option>
    </Select>
  );
}