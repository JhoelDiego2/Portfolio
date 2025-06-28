import { useTranslation } from "react-i18next";

interface TextProps {
  tKey: string;
}

export function Traducao({ tKey, ...rest }: TextProps) {
  const { t } = useTranslation();
  return <>{t(tKey)}</>
}