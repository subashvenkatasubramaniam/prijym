import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import PageTitle from '../components/layout/PageTitle';
import XIcon from '../components/layout/XIcon';

export default function ResearchDetails() {
  return (
    <Layout title="Research Details || PRIJYM">
      <Header />
      <main className="main-content alternat-2">
      <PageTitle title="Research Details" />

                   {/* research-details */}
                   <section className="research-details">
                       <div className="pattern-layer">
                           <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/shape-54.png)" }}></div>
                           <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/shape-34.png)" }}></div>
                       </div>
                       <div className="auto-container">
                           <div className="title-box mb_55 centred">
                               <h2>Chemical Research</h2>
                               <p>We have been partnering with the laboratory service for several projects, and their commitment to quality assurance is unparalleled. The detailed documentation and stringent quality control measures instill confidence in the accuracy of their results</p>
                           </div>
                           <div className="image-inner mb_70">
                               <figure className="image"><img src="/assets/images/resource/research-9.jpg" alt="" /></figure>
                               <ul className="info-list">
                                   <li>
                                       <span>Client Name</span>
                                       <h4>Daniel Macron</h4>
                                   </li>
                                   <li>
                                       <span>Service</span>
                                       <h4>Cooling Water Treatment</h4>
                                   </li>
                                   <li>
                                       <span>Our Role</span>
                                       <h4>Chemical Research</h4>
                                   </li>
                                   <li>
                                       <span>Project Start</span>
                                       <h4>March 12, 2022</h4>
                                   </li>
                                   <li>
                                       <span>Share</span>
                                       <ul className="share-links pt_4">
                                           <li><Link to="/research-details"><i className="fab fa-facebook-f"></i></Link></li>
                                           <li><Link to="/research-details"><XIcon size={14} /></Link></li>
                                           <li><Link to="/research-details"><i className="fab fa-linkedin-in"></i></Link></li>
                                           <li><Link to="/research-details"><i className="fab fa-dribbble"></i></Link></li>
                                       </ul>
                                   </li>
                               </ul>
                           </div>
                           <div className="inner-box">
                               <div className="content-one mb_60">
                                   <h2>Working Challenge</h2>
                                   <p>Established fact that a reader will be distracted by the readable content of page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution letters as opposed to using Content here, content here</p>
                                   <ul className="list-item">
                                       <li>Gathering and evaluating user requirements, in collaboration with product managers engineers.</li>
                                       <li>Illustrating design ideas using storyboards, process flows and sitemaps.</li>
                                       <li>Create user stories, personas, and storyboards & Determine information architecture an</li>
                                       <li>Create prototypes and wireframes & conduct usability testing.</li>
                                       <li>Find your area of interest. UX design is a broad discipline.</li>
                                       <li>General structure and writing style, action research design & case Study Design.</li>
                                   </ul>
                               </div>
                               <div className="content-two mb_60">
                                   <h2>Included and Excluded</h2>
                                   <div className="row clearfix">
                                       <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                                           <ul className="list-one clearfix">
                                               <li>Meal as per hotel Plan and drinks free too.</li>
                                               <li>Return airport and round trip transfers.</li>
                                               <li>Accommodation on twin sharing basis.</li>
                                               <li>The above rates are on per day disposal basis.</li>
                                               <li>Enjoy Brussels day tours. Overnight Brussels</li>
                                           </ul>
                                       </div>
                                       <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                                           <ul className="list-two clearfix">
                                               <li>AC will not be functional on Hills or Slopes.</li>
                                               <li>Any other service not mentioned</li>
                                               <li>Additional entry fees other than specified</li>
                                               <li>Amsterdam canal cruise not included for basic</li>
                                           </ul>
                                       </div>
                                   </div>
                               </div>
                               <div className="content-three mb_70">
                                   <h2>Expected Outcomes</h2>
                                   <div className="tabs-box p_relative">
                                       <div className="tab-btn-box p_relative">
                                           <ul className="tab-btns tab-buttons clearfix">
                                               <li className="tab-btn active-btn" data-tab="#tab-1">
                                                   <div className="icon-box"><i className="icon-60"></i></div>
                                                   <h6>Dengue Vaccine</h6>
                                               </li>
                                               <li className="tab-btn" data-tab="#tab-2">
                                                   <div className="icon-box"><i className="icon-57"></i></div>
                                                   <h6>Covid Reseach</h6>
                                               </li>
                                               <li className="tab-btn" data-tab="#tab-3">
                                                   <div className="icon-box"><i className="icon-62"></i></div>
                                                   <h6>Cancer Cells</h6>
                                               </li>
                                           </ul>
                                       </div>
                                       <div className="tabs-content p_relative">
                                           <div className="tab active-tab" id="tab-1">
                                               <figure className="image-box"><img src="/assets/images/resource/research-10.jpg" alt="" /></figure>
                                           </div>
                                           <div className="tab" id="tab-2">
                                               <figure className="image-box"><img src="/assets/images/resource/research-10.jpg" alt="" /></figure>
                                           </div>
                                           <div className="tab" id="tab-3">
                                               <figure className="image-box"><img src="/assets/images/resource/research-10.jpg" alt="" /></figure>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="content-four mb_65">
                                   <h2>Top Highlights</h2>
                                   <p>Komodo Island is one of the only places in the world where you can spot Komodo Dragons the world’s largest of lizards in their natural environment. islands of the Komodo National Park.</p>
                                   <ul className="list-item">
                                       <li>Easily generate images with detailed text prompts</li>
                                       <li>Customize your images with different styles, moods, colors</li>
                                       <li>Generate high-quality images with up to 8K resolution </li>
                                       <li>Customize your images with different styles, moods, colors</li>
                                       <li>Generate high-quality images with up to 8K resolution </li>
                                   </ul>
                               </div>
                               <div className="content-five">
                                   <h2>Researchers in the Project</h2>
                                   <div className="row clearfix centred">
                                       <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                                           <div className="team-block-one">
                                               <div className="inner-box">
                                                   <div className="image-box">
                                                       <figure className="image"><img src="/assets/images/team/team-6.jpg" alt="" /></figure>
                                                       <ul className="social-links">
                                                           <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                                           <li><Link to="/"><XIcon size={14} /></Link></li>
                                                           <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                                                       </ul>
                                                   </div>
                                                   <div className="lower-content">
                                                       <h3><Link to="/team-details">Theresa Webb</Link></h3>
                                                       <span className="designation">Physician</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                                           <div className="team-block-one">
                                               <div className="inner-box">
                                                   <div className="image-box">
                                                       <figure className="image"><img src="/assets/images/team/team-7.jpg" alt="" /></figure>
                                                       <ul className="social-links">
                                                           <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                                           <li><Link to="/"><XIcon size={14} /></Link></li>
                                                           <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                                                       </ul>
                                                   </div>
                                                   <div className="lower-content">
                                                       <h3><Link to="/team-details">Brooklyn Simmons</Link></h3>
                                                       <span className="designation">Product Designer</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="col-lg-4 col-md-6 col-sm-12 team-block">
                                           <div className="team-block-one">
                                               <div className="inner-box">
                                                   <div className="image-box">
                                                       <figure className="image"><img src="/assets/images/team/team-8.jpg" alt="" /></figure>
                                                       <ul className="social-links">
                                                           <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                                           <li><Link to="/"><XIcon size={14} /></Link></li>
                                                           <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                                                       </ul>
                                                   </div>
                                                   <div className="lower-content">
                                                       <h3><Link to="/team-details">Leslie Alexander</Link></h3>
                                                       <span className="designation">Web Developer</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </section>
                   {/* research-details end */}

                   {/* cta-style-two */}
                   <section className="cta-style-two">
                       <div className="auto-container">
                           <div className="inner-container">
                               <div id="particles-js"></div>
                               <div className="content-box">
                                   <h2>Expert scientists conducting <br />precise product testing</h2>
                                   <div className="btn-box">
                                       <Link to="/services" className="theme-btn btn-one mr_20">View Services<span></span><span></span><span></span><span></span></Link>
                                       <Link to="/contact" className="theme-btn btn-one">Get in Touch<span></span><span></span><span></span><span></span></Link>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </section>
                   {/* cta-style-two end */}
      </main>
      <Footer />
    </Layout>
  );
}
