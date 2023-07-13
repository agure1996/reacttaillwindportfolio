// import AboutUs from '../pages/AboutUs'
// import ContactUs from '../pages/ContactUs'
// import Learning from '../pages/Learning'
// import News from '../pages/News'
// import Portfolio from '../pages/Portfolio'
let Links = [        
{ name:'Portfolio', path:'/'},           
{ name:'Learning', path:'/'},        
{ name:'News', path:'/'},        
{ name:'About Us', path:'/'},        
{ name:'Contact Us', path:'/'}       
];


/**would be mapped in navbar in the following code
 * 
 * 
 *  {Links.map((link) => (  
                        <li key={link.name} className='md:ml-8  text-xl md:my-0 my-7 '>
                            <a href={link.path} className=' text-opacity-100 text-white hover:text-gray-400 duration-500'>{link.name}</a>
                        </li>
                    ))}
 */
export default Links;