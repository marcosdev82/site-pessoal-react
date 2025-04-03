import { useMemo } from "react";

const useFormattedDate = (dateString?: string): string => {
  return useMemo(() => {
    if (!dateString) return ""; // Retorna uma string vazia se dateString for undefined

    const date = new Date(dateString);

    // Verifica se a data é válida
    if (isNaN(date.getTime())) {
      return ""; // Retorna uma string vazia se a data não for válida
    }

    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    // Formata a data para o padrão brasileiro e remove " às" se existir
    return date.toLocaleDateString("pt-BR", options).replace(" às", " às");
  }, [dateString]);
};

export default useFormattedDate;