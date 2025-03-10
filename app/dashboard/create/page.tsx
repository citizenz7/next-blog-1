"use client";

import { handleSubmission } from "@/app/actions";
import { SubmitButton } from "@/components/general/SubmitButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBlogRoute() {
    return (
        <div>
            <Card className="max-w-4xl mx-auto my-8">
                <CardHeader>
                    <CardTitle>Créer un article</CardTitle>
                    <CardDescription>Créer un nouvel article pour votre blog</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4" action={handleSubmission}>
                        <div className="flex flex-col gap-2">
                            <Label>Titre de l'article</Label>
                            <Input name="title" required type="text" placeholder="Titre de l'article" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Texte de l'article</Label>
                            <Textarea name="content" rows={15} required placeholder="Texte de l'article" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Image URL</Label>
                            <Input name="url" required type="url" placeholder="URL de l'image" />
                        </div>
                        <SubmitButton />
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}