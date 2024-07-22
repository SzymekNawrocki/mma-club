import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


export default function Questions() {
    return (
        <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Jak często powinienem trenować?</AccordionTrigger>
    <AccordionContent>
    Zależy to od Twoich celów i poziomu zaawansowania. Zwykle zaleca się trenować 2-4 razy w tygodniu
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Czy muszę mieć doświadczenie, żeby zacząć trenować?</AccordionTrigger>
    <AccordionContent>
    Nie, oferujemy treningi dla początkujących. Wystarczy chęć nauki i determinacja.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Co muszę wziąć ze sobą na pierwszy trening</AccordionTrigger>
    <AccordionContent>
    Wystarczy podstawowy strój aby rozpocząć treningi sztuk walki, czyli koszulka, spodenki i klapki aby przejść na matę. Jeżeli po pierwszym treningu będziesz chciał się rozwijać, przydadzą się rękawice bokserskie i ochraniacze na piszczele w przypadku tajskiego boksu, kimono w przypadku bjj. Na każdy z treningów oczywiście powinieneś mieć ze sobą ochraniacz na zęby.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger>Czy sparingi są obowiązkowe?</AccordionTrigger>
    <AccordionContent>
    Jeżeli nie chcesz sparować, nie jest to obowiązkowe. Żaden z naszych trenerów również nie będzie cię zmuszał, jeżeli jeszcze nie czujesz się na siłach
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-5">
    <AccordionTrigger>Czy muszę przygotować się fizycznie zanim przyjdę na pierwszy trening?</AccordionTrigger>
    <AccordionContent>
    Treningi dla początkujących może podjąć każdy, bez względu na jego obecną formę fizyczną. Treningi są grupowe jednak intensywność wykonywania ćwiczeń jest indywidualna.
    </AccordionContent>
  </AccordionItem>
</Accordion>
    )
}
