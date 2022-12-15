import { onSubmitType } from "@/shared/hooks";
import { FieldValues } from "react-hook-form";


export const handleFormInput:onSubmitType = async (data: FieldValues): Promise<null> =>  {
    console.log(data)
   
}