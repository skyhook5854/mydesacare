import { useRouter } from "next/router";
import { OnboardingTranslate } from "public/locales/onboard-translate";

export const useOnboardingHooks = () => {
  const router = useRouter();
  const { locale } = router;
  return OnboardingTranslate[locale];
};
