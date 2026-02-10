'use client'


export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm passionate about aerospace engineering, embedded systems, and machine learning.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With experience in GNC, avionics, and robotics, I bring a unique perspective to complex problem-solving.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Aerospace Systems Design</li>
              <li>✓ Embedded Systems Development</li>
              <li>✓ Machine Learning Applications</li>
              <li>✓ Software Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}



