import Link from 'next/link'

export default function CTA() {
  return (
    <section className="bg-dark py-20">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              At TechXen IT Solutions, We are Committed To Businesses
            </h2>
            <p className="text-gray-400 text-lg">
              Take the first step towards achieving your business goals by contacting us today. 
              Schedule a consultation with one of our IT specialists to discuss your objectives 
              and explore how our innovative solutions can propel your business forward.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="btn-primary whitespace-nowrap">
              Request a Consultation
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
            </Link>
            <Link href="#services" className="btn-secondary whitespace-nowrap border-white text-white hover:bg-white hover:text-dark">
              Explore Solutions
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
