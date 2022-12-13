import { useRouter } from "next/router";
import { CommonTranslate } from "public/locales/common-translate";

export const useCommonHooks = () => {
  const router = useRouter();
  const { locale } = router;
  return CommonTranslate[locale];
};
