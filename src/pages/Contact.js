import React from 'react'
import fb from "../media/images/facebook.png"
import git from "../media/images/githubb.png"
import ig from "../media/images/instagram.png"
import Footer from '../components/Footer'

function Contact() {
  return (
      <>
    <div className="bg-[#FFE9CE] justify-center align-center flex flex-col w-screen items-center h-full px-5 lg:px-0">
        <section class="w-full h-full mt-20">
            <div class="max-w-5xl mx-auto pb-40">
                <div class="flex flex-col items-center md:flex-row">
                    <div class="w-full space-y-5 md:w-3/5 md:pr-16">
                        <h2 class="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                            Contact Us!
                        </h2>
                        <p class="text-xl text-gray-600 md:pr-16">If you have any questions about how to get involved or 
                        what we do, send us a message below. You can also connect with us via email at umd@hack4impact.org 
                        or on these platforms below:</p>
                        <div class="flex gap-[10px]">
                            <a href="https://github.com/Hack4Impact-UMD"><div class="social bg-[#4183c4]"><img src={git} class="w-[20px]"/></div></a>
                            <a href="https://www.facebook.com/hack4impactumd"><div class="social bg-[#3c5998]" ><img src={fb} class="w-[20px]"/></div></a>
                            <a href="https://www.instagram.com/hack4impactumd/"><div class="social bg-[#3f729c]"><img src={ig} class="w-[20px]"/></div></a>
                        </div>
                    </div>
                    <div class="w-full h-full mt-16 md:mt-0  ">
                        <form class="relative z-10 p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7 h-full" 
                        action="https://formsubmit.co/testingform0@gmail.com" method="POST">
                            <input type="text" name="name" class="block w-full px-4 py-3 mb-4 border border-gray-200 rounded-lg focus:ring focus:ring-[#5f0303] focus:outline-none" placeholder="Name" required/>
                            <input type="email" name="email" class="block w-full px-4 py-3 mb-4 border  border-gray-200 rounded-lg focus:ring focus:ring-[#5f0303] focus:outline-none" placeholder="Email Address" required/>
                            <input type="subject" name="_subject" class="block w-full px-4 py-3 mb-4 border  border-gray-200 rounded-lg focus:ring focus:ring-[#5f0303] focus:outline-none" placeholder="Subject" required/>
                            <textarea type="message" name="message" class="block min-h-[30vh] max-h-[30vh] w-full px-4 py-3 mb-4 border  border-gray-200 rounded-lg focus:ring focus:ring-[#5f0303] focus:outline-none" placeholder="Your Message" required/>
                            <div class="flex  justify-center">
                                <button type="submit"  class=" relative inline-block px-5 py-3 font-medium font-Monument group text-sm ">
                                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#5f0303] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                    <span class="absolute inset-0 w-full h-full bg-[#efb205] border-2 border-[#5f0303] group-hover:bg-[#5f0303]"></span>
                                    <span class="relative text-[#5f0303] group-hover:text-[#efb205]">Send Message</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <Footer />
    </>
  )
}

export default Contact

