import React from 'react';
import FAQItem from '@/components/FaqItem';



const Faq = () => {
  const faqData = [
    {
      question: 'Jak często powinienem trenować?',
      answer: 'Zależy to od Twoich celów i poziomu zaawansowania. Zwykle zaleca się trenować 2-4 razy w tygodniu.',
    },
    {
      question: 'Czy muszę mieć doświadczenie, żeby zacząć trenować?',
      answer: 'Nie, oferujemy treningi dla początkujących. Wystarczy chęć nauki i determinacja.',
    },
    {
      question: 'Co muszę wziąć ze sobą na pierwszy trening?',
      answer: 'Wystarczy podstawowy strój aby rozpocząć treningi sztuk walki, czyli koszulka, spodenki i klapki aby przejść na matę. Jeżeli po pierwszym treningu będziesz chciał się rozwijać, przydadzą się rękawice bokserskie i ochraniacze na piszczele w przypadku tajskiego boksu, kimono w przypadku bjj. Na każdy z treningów oczywiście powinieneś mieć ze sobą ochraniacz na zęby.',
    },
    {
      question: 'Czy sparingi są obowiązkowe?',
      answer: 'Jeżeli nie chcesz sparować, nie jest to obowiązkowe. Żaden z naszych trenerów również nie będzie cię zmuszał, jeżeli jeszcze nie czujesz się na siłach',
    },
    {
      question: 'Czy muszę przygotować się fizycznie zanim przyjdę na pierwszy trening?',
      answer: 'Treningi dla początkujących może podjąć każdy, bez względu na jego obecną formę fizyczną. Treningi są grupowe jednak intensywność wykonywania ćwiczeń jest indywidualna.',
    },
    {
      question: 'Czy obowiązują zapisy na treningi?',
      answer: 'Nie prowadzimy zapisów, nie trzeba się wcześniej zapowiadać. Wystarczy przyjść na trening.',
    },
  ];

  return (
    <div className="max-w-md mx-auto mt-16">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Faq;