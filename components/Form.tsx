import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function Form() {
  return (
    <Tabs defaultValue="sendEmail" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-1">
        <TabsTrigger value="sendEmail">Formularz Kontaktowy</TabsTrigger>
      </TabsList>
      <TabsContent value="sendEmail">
        <Card>
          <CardHeader>
            <CardTitle>Skontaktuj się z nami</CardTitle>
            <CardDescription>
              Wypełnij wszystkie pola, zapoznaj się i zaakceptuj politykę prywatności aby wysłać do nas wiadomość.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="to">Adres e-mail</Label>
              <Input id="to" placeholder="Wprowadź swój adres e-mail..." />
            </div>
            <div className="space-y-1">
              <Label htmlFor="subject">Temat</Label>
              <Input id="subject" placeholder="Wprowadź temat wiadomosci..." />
            </div>
            <div className="space-y-1">
              <Label htmlFor="message">Treść Wiadomości</Label>
              <Textarea id="message" placeholder="Wprowadź swoją wiadomość..." />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Wyślij Wiadomość</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
