import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Image from 'next/image';
import becha from '../../public/becha.JPG';
import developedbyed from '../../public/dev-ed-wave.png'
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import web1 from "../../public/web1.png"
import web2 from "../../public/web2.png"
import web3 from "../../public/web3.png"
import web4 from "../../public/web4.png"
import web5 from "../../public/web5.png"



export default function Home() {
  return (
   <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-burtons'> developedbybecha</h1>

            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
              <li> <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'> Resume</a></li>
            </ul>
            </nav>

            <div className='text-center p-10 '>
                <h2 className='text-4xl py-2 text-teal-500 font-medium font-burtons'> Becha Mohamed Amine</h2>
                <h3 className='text-2xl py-2 md:text-3xl'> Frontend Developer </h3>

                <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
                  Frontend developer providing services for programming needs, Join me down below and lets get cracking
                </p>
            </div>

            <div className='text-5xl flex justify-center gap-x-16 py-3 text-gray-600'>
              <AiFillTwitterCircle className='cursor-pointer'/>
              <AiFillLinkedin className='cursor-pointer'/>
              <AiFillInstagram className='cursor-pointer'/>
            </div>
            
            <div className='relative rounded-full mt-10 bg-gradient-to-r from-teal-500 to-teal-400  mx-auto overflow-hidden'>
            <Image className='mx-auto'
            alt='logo' src={developedbyed}  />
            </div>
        </section>

        <section>
          <div className='text-center mb-10'>
            <h3 className='text-3xl  py-1 mt-10'> Services </h3>

            <p className='text-md py-2  leading-8 text-gray-800'>
              Since the beginning of my journey as a freelance developer, I've done remote work for <ba/>
              <span className='text-teal-500'> agencies  <ba/>
              </span> 
               consulted for 
              <span className='text-teal-500'> startups <ba/>
              </span> 
                 and collaborated with talented people to create digital products for both business and customer use.
            </p>

            <p className='text-md py-2 leading-8 text-gray-800'>
                I offer from a wide range of services including programming.
            </p>
          </div>

          <div>
            <div className='text-center shadow-lg p-14 rounded-xl'>
              <Image className='mx-auto' src={design} alt='designPhoto' width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'> Beautiful designs </h3>

              <p>
                Creating elegant designs suited for your needs following core design theory
              </p>

              <h4 className='py-2'> Designs tools I use</h4>

              <p className='text-gray-800 py-1'> Illustrator</p>
              <p className='text-gray-800 py-1'> Figma </p>
              <p className='text-gray-800 py-1'> Photoshop</p>

            </div>
          </div>

          <div>
            <div className='text-center shadow-lg p-14 rounded-xl'>
              <Image className='mx-auto' src={code} alt='designPhoto' width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'> Beautiful code </h3>

              <p>
                Creating elegant designs suited for your needs following core design theory
              </p>

              <h4 className='py-2'> Designs tools I use</h4>

              <p className='text-gray-800 py-1'> Illustrator</p>
              <p className='text-gray-800 py-1'> Figma </p>
              <p className='text-gray-800 py-1'> Photoshop</p>

            </div>
          </div>

          <div>
            <div className='text-center shadow-lg p-14 rounded-xl'>
              <Image className='mx-auto' src={consulting} alt='designPhoto' width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'> Beautiful designs </h3>

              <p>
                Creating elegant designs suited for your needs following core design theory
              </p>

              <h4 className='py-2'> Designs tools I use</h4>

              <p className='text-gray-800 py-1'> Illustrator</p>
              <p className='text-gray-800 py-1'> Figma </p>
              <p className='text-gray-800 py-1'> Photoshop</p>

            </div>
          </div>
        </section>


        <section>
          <div className='text-center'>
            <h3 className='text-3xl py-1 mt-10'> Portfolio </h3>

            <p className='text-md py-2  leading-8 text-gray-800'>
              Since the beginning of my journey as a freelance developer, I've done remote work for <ba/>
              <span className='text-teal-500'> agencies  <ba/>
              </span> 
               consulted for 
              <span className='text-teal-500'> startups <ba/>
              </span> 
                 and collaborated with talented people to create digital products for both business and customer use.
            </p>
          </div>

          <div>
            <div> <Image src={web1} alt='web1' /></div>
            <div> <Image src={web2} alt='web2' /></div>
            <div> <Image src={web3} alt='web3' /></div>
            <div> <Image src={web4} alt='web4' /></div>
            <div> <Image src={web5} alt='web5' /></div>

          </div>
        </section>
   </main>
  )
}
