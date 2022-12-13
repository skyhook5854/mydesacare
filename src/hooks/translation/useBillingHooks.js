import { useRouter } from "next/router";
import { BillingTranslate } from "public/locales/billing-translate";

export const useBillingHooks = () => {
  const router = useRouter();
  const { locale } = router;
  return BillingTranslate[locale];
};
