import { motion } from "framer-motion";
import { Select, Option } from './styles';
import { useTranslation } from 'react-i18next';

export function SelectLanguage() {
  const { i18n } = useTranslation();

  function setLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
  }

  return (
    <Select  onChange={setLanguage} defaultValue={i18n.language}>
      <Option value="pt">PT</Option>
      <Option value="en">EN</Option>
      <Option value="es">ES</Option>
    </Select>
  );
}