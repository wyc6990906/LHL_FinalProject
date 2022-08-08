import React from 'react';
import {useFetch} from "../../hooks/useFetch";
import "./About.css"

const About = () => {
  const {data:articles,isPending,error} = useFetch('http://localhost:3000/articles')

  return (
    <div className="about-page">
      <div className="container">
        {/*play hooks fetch data*/}
        <div className="home">
          {isPending && <div>loading...</div>}
          {error && <div>{error}</div>}
          {articles && articles.map((article) => (
            <div key={article.id}  className="card">
                <h3 style={{color:"white"}}>{article.title}</h3>
                 <p>{article.author}</p>
            </div>
          ))}
        </div>
        <div className="about-wrap">
          <div className="about-img">
            <img src="img/about-img.png" alt="about-img"/>
          </div>
          <div className="about-text">
            <div className="the-title">
              <h5 className="head-title-2" data-aos="fade-up"> / STORY </h5>
              <h2 className="head-title-1"> Brief About US
                <span className="title-end">.</span></h2>
            </div>
            <div className="the-text grid grid-cols-12 gap-24">
              <p className="col-span-4 sm:col-span-12 res:col-span-12">
                For each project we establish relationships with partners who we know will help us create added value
                for your project. As well as bringing together the public and private sectors, we make sector
                overarching links to gather knowledge and to learn from each other.</p>
              <p className="col-span-4 sm:col-span-12 res:col-span-12"> Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit.</p>
              <p className="col-span-4 sm:col-span-12 res:col-span-12">
                Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam luptatem quia voluptas sit aspernatur aut odit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
