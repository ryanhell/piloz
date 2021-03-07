import React from "react";
import image from "@images/portfolio/portico2.jpg";
import author from "@images/blog/author-1-1.jpg";
const BlogContent = () => {
  return (
    <>
      <div className="blog-details__main">
        <div className="blog-details__image">
          <img src={image} alt="" className="img-fluid w-100" />
        </div>
        <div className="blog-details__content">
          <div className="blog-one__meta">
            <a href="#">
              <i className="far fa-calendar-alt"></i> 20 Feb
            </a>
            
          </div>
          <h3>Murphy Door</h3>
          <p>
            Using design and building best practices, and complying with local code (IBC 2018), I achieved an independent design build for a portico attention. I started with a 6 ton monolithic pour, by creating concrete forms and trenching footers to get below frost lines. I used FRP columns and prefabricated custom railings, framing is carriage bolted into structure with additional hurricane straps and wrapped in Azak. Pennsylvania Blue Stone and thin brick veneers achieved the homeowners desired appearance.  
          </p>
          
        </div>
        <div className="blog-details__meta">
          <div className="blog-details__tags">
            <span>Tags:</span>
            <a href="#">Additions,</a>
            <a href="#">Construction,</a>
            <a href="#">Carpentry</a>
          </div>
          <div className="blog-details__share">
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" className="color-1">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="color-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="color-3">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default BlogContent;
