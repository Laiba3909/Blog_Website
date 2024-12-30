import PropBar from '../component/bar'
import Heading from '../component/heading'
import Subscribe from '../component/subscribe'


export default function Contact() {
  
  return (
    <div>
      <div>
        <PropBar style="text-white" image="/main4.webp" name="Contact" link="/contact" />
      </div>

      <Heading
        style="-mt-24"
        heading="Get in Touch with Us"
        para="We'd love to hear from you! Feel free to reach out with any questions or inquiries."
      />

      <div className="text-white flex justify-center items-center mt-12">
        <div className="glossy w-full max-w-[900px] rounded-lg p-8">
          <h3 className="text-center text-3xl font-bold mb-8">Contact Us</h3>
          <form className="space-y-6">
            <div className="flex justify-between">
              <div className="w-full mr-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-[#1a1a1a] text-white border border-[#7dd163] rounded-lg"
                />
              </div>
              <div className="w-full ml-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-[#1a1a1a] text-white border border-[#7dd163] rounded-lg"
                />
              </div>
            </div>
            <div className="mt-4">
              <textarea
                placeholder="Your Message"
                className="w-full p-4 bg-[#1a1a1a] text-white border border-[#7dd163] rounded-lg"

              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#7dd163] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#5ba543] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-center text-3xl font-bold text-white mb-6">Find Us on the Map</h3>
        <div className="relative w-full h-[400px]">
          
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d115755.44433065073!2d66.97628795874587!3d24.953944035012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3eb341002932ad0f%3A0x87ff249373a262aa!2sX335%2BHFP%2C%20Sector%2015-A%2F1%20Sector%2015%20A%201%20Buffer%20Zone%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!3m2!1d24.953968099999997!2d67.0586908!5e0!3m2!1sen!2s!4v1735502975150!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <br />
      <br />
      <Subscribe subscribe='Subscribe' unsubscribe='Unsubscribe' />
    </div>
  )
}

