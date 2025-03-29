import { useMemo } from "react";

const useFormattedDate = (dateString: string): string => {
  return useMemo(() => {
    if (!dateString) return "";

    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    return date.toLocaleDateString("pt-BR", options).replace(" à", "");
  }, [dateString]);
};

export default useFormattedDate;
