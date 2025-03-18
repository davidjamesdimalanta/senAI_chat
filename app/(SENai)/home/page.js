import Image from 'next/image'
import Link from 'next/link'
import ChatBubble from '../components/chatbubble'
import FeatureScroll from '../components/modules/FeatureScroll'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#5728A5] to-[#1e1e1e] px-4 pt-16 pb-24 md:py-32 flex flex-col items-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center mb-12">
          <Image 
            src="/senAI branding/senAI-long.svg" 
            alt="SenAI Logo" 
            width={240} 
            height={120} 
            priority
          />
          <div className='flex flex-col items-center gap-4 mb-12'>
          <h2 className="text-2xl md:text-4xl text-white font-light">
            Your Social and Emotional Navigator
          </h2>
          <Link 
            href="/pre-order" 
            className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-sm font-medium hover:bg-white hover:text-[#5728A5] transition-all"
          >
            PRE-ORDER
          </Link>
          </div>
          <Image 
            src="/graphics/contact-lens.png" 
            alt="SenAI Logo" 
            width={420} 
            height={420} 
            priority
          />
        </div>
      </section>

      {/* About SenAI Section */}
      <section className="py-20 px-4 bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-4xl font-medium mb-8 text-white">
                FOR THE SOCIALLY INEPT
              </h2>
              
              <p className="text-white font-light mb-12 text-lg">
                Relationships and human interactions are one of the most important 
                aspects of the human experience; they play a significant role in shaping
                our emotional well-being, personal growth, and overall happiness.
              </p>
              
              <h3 className="text-2xl font-semibold mb-6 text-[#02A9F7]">
                THE OBJECTIVE
              </h3>
              
              <p className="text-white font-light text-lg">
                Our mission is to help individuals who struggle with social anxiety or
                people who just want to avoid awkward situations by providing them with
                real-time, personalized support that fosters positive social engagement
                and builds confidence. You&apos;ll never make a mistake interacting with
                others ever again!
              </p>
            </div>
            
            {/* Right Content - Image with Chat Bubble */}
            <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">             
              <ChatBubble />
              
              {/* Main Image */}
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/graphics/cahtting.png"
                  alt="People having social interaction"
                  width={600}
                  height={400}
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-section Image Section */}
      <section className="bg-[#212121] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/graphics/contact-cross-section.png"
                alt="SenAI Contact Lens Cross-section"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-medium text-white mb-6">
                MEDICAL GRADE IMPLEMENTATION
              </h2>
              <p className="text-white font-light mb-4">
                We are partnering with a medical-grade battery company that makes 
                implantable microbatteries for things like pacemakers, to design something safe to wear.
              </p>
              <Link
                href="#"
                className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-sm font-medium hover:bg-white hover:text-[#1E1E1E] transition-colors mt-6"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-4 bg-[#1e1e1e] py-16">
        <FeatureScroll />
      </section>

    </div>
  )
}
