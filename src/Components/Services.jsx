import Caregiver from '../assets/Caregiver.avif'
import Nursing from '../assets/Nursing.avif'
import Therapy from '../assets/Therapy.avif'
export default function Services() {
  const services = [
    {
      title: "CareGiver",
      image: Caregiver,
      alt: "Caregiver providing support to a patient"
    },
    {
      title: "Nursing",
      image: Nursing,
      alt: "Nurse providing medical care to a patient"
    },
    {
      title: "Therapy",
      image: Therapy,
      alt: "Therapist working with a patient"
    }
  ]

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id='services'>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Our Services</h2>
        <div className="w-12 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-blue-600 transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="aspect-[4/3] relative">
              <img
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-blue-600/20 p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-semibold mb-4">
                {service.title}
              </h3>
              <button
                className="px-4 py-2 w-28 bg-white text-blue-600 rounded-md font-medium transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                SEE MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
