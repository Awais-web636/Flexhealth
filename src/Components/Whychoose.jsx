import { BiGlobe } from 'react-icons/bi'
import { MdPriceCheck } from 'react-icons/md'
import { AiOutlineSetting } from 'react-icons/ai'
import { FiHeadphones } from 'react-icons/fi'
import Schoose from '../assets/Schoose.png'

export default function WhyChooseUs() {
  const features = [
    {
      icon: BiGlobe,
      title: "A wide variety of providers.",
      description:
        "Either caregivers, nurses or therapists, our app will show you a wide list of providers, you can filter profiles with location, budget, schedule, etc.",
    },
    {
      icon: MdPriceCheck,
      title: "The best prices.",
      description:
        "No subscription or monthly fees for service platform. You just have to pay for the providers charges, the cheapest in the market.",
    },
    {
      icon: AiOutlineSetting,
      title: "We manage it for you.",
      description:
        "It's hustle free. We sort out taxes, payrolls, background checks, education and work experience verification, scheduling, and complaints.",
    },
    {
      icon: FiHeadphones,
      title: "Responsive support team.",
      description:
        "We are available across multiple communication channels, our team will always be there in case of any queries or even complaints.",
    },
  ]

  return (
    <div className="container mx-auto px-16 py-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
        <div className=" mb-12">
        <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
        <div className=" w-12 h-1 bg-blue-500 "></div>
      </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[600px]  rounded-[15px]">
          <img
            src={Schoose}
            alt="Healthcare professional with patient"
            fill
            className="object-cover mt-16 rounded-[15px]"
          />

        </div>
      </div>
    </div>
  )
}
