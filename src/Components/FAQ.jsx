import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import FAQpic from '../assets/FAQpic.jpg'
export default function FAQ() {
  const faqData = [
    {
      id: 1,
      question: "How long can I have the caregiver?",
      answer: "Our providers are very flexible with scheduling, you can book them for a specific period of time just for a few hours per day or for a live-in care. There is no limit as to how long can you keep the caregiver, our providers can be available for as long as you need them.",
      isActive: true
    },
    {
      id: 2,
      question: "Can I request the same caregiver next time I need one?",
      answer: "Yes, you can request the same caregiver for future appointments if they are available.",
      isActive: false
    },
    {
      id: 3,
      question: "How does refunds work?",
      answer: "Our refund policy ensures a full refund if cancelled 24 hours before the scheduled service.",
      isActive: false
    },
    {
      id: 4,
      question: "How much does it cost?",
      answer: "Our rates vary depending on the type and duration of care needed. Please contact us for a detailed quote.",
      isActive: false
    }
  ]

  return (
    <div className="container mx-auto px-16 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Frequently Ask Question
            </h2>
            <div className="h-1 w-12 bg-blue-500" />
          </div>

          <Accordion
            allowZeroExpanded
            preExpanded={['1']}
            className="space-y-4"
          >
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                uuid={faq.id.toString()}
                className="border rounded-lg overflow-hidden"
              >
                <AccordionItemHeading>
                  <AccordionItemButton
                    className={`px-4 py-3 text-left font-medium focus:outline-none
                      ${faq.isActive ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-50'}`}
                  >
                    {faq.question}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="px-4 py-3 text-gray-600 bg-white">
                  {faq.answer}
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="hidden md:block">
          <img
            src={FAQpic}
            alt="Elderly person holding a question mark sign"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
