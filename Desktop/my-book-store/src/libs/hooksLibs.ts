import { useState } from "react";

export function useFormFields(initialState: any) {
  const [fields, setValues] = useState(initialState);
  return [
    fields,
    function (event: { target: { id: any; type: string; value: any; }}) {
      setValues({
        ...fields,
        [event.target.id]:
          event.target.type === "number"
            ? Number(event.target.value)
            : event.target.value,
      });
    },
  ];
}