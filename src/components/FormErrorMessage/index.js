import { useCommonHooks } from "src/hooks/translation/useCommonHooks";

export const FormErrorMessage = () => {
  const { required } = useCommonHooks();
  return <p className="text-red-600 text-sm">{required}</p>;
};
