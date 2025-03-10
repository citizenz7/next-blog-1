import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export function SubmitButton() {
    const {pending} = useFormStatus();

    return (
        <Button className="w-fit mt-4 cursor-pointer" type="submit" disabled={pending}>
            {pending ? "Création en cours..." : "Créer l'article"}
        </Button>
    )
}