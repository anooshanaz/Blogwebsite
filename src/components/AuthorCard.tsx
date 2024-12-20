import React from 'react'

const AuthorCard = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadain'>
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyIBH3buxR2OUgexCkyHoR5NoDw50AprSOw&s" 
        alt="Author Image"
        className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'/>
        <div>
        <h3  className='text-xl font-semibold'>Anoosha Naz</h3>
        <p className='text-blue-900 font-bold '>HTML|CSS|Typescript|Nodejs|Git|React|Nextjs</p>
        </div>
      </div>
      <p className='mt-4 text-black leading-relaxed'>Hi! I'm Anoosha a skilled Frontend Developer with a strong passion for crafting dynamic, user-friendly web interfaces. With expertise in HTML, CSS, JavaScript, and popular frameworks like React , I focus on building responsive and intuitive applications that provide a seamless user experience. My keen eye for design, complemented by proficiency in Adobe Photoshop, allows me to bring creativity and precision to my work, ensuring both form and function in every project.
In addition to my development skills, I am well-versed in MS Office tools, which enhance my productivity in documentation, data analysis, and project coordination. This combination of technical and creative skills enables me to collaborate effectively with cross-functional teams, streamline processes, and deliver top-notch web solutions that meet both user needs and business objectives.
            </p>
            <div className='mt-4 flex space-x-3'>
            <a href=""
            className='px-4 py-2 text-white bg-cyan-600 rounded-md hover hover:bg-red-600 transition duration-300'>
              Github
            </a>
            <br />
            <a href=""
            className='px-4 py-2 text-white bg-cyan-600 rounded-md hover hover:bg-red-600 transition duration-300'>
              Linkdin
            </a>
            <br />
            <a href=""
            className='px-4 py-2 text-white bg-cyan-600 rounded-md hover hover:bg-red-600 transition duration-300'>
              Facebook
            </a>
              </div>  
    </div>
  )
}

export default AuthorCard
