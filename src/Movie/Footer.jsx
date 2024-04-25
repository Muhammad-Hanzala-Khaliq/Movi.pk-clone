import React from "react";
import logo from "./Images/logo.png";
import { FaRobot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="first_col">
              <h6>MOVI.PK</h6>
              <li>
                <NavLink to="/">Ad-free Plan</NavLink>
              </li>
              <li>
                <NavLink to="/">Advertise with Us</NavLink>
              </li>
              <li>
                <NavLink to="/">How to Download</NavLink>
              </li>
              <li>
                <NavLink to="/">Movies Request</NavLink>
              </li>
              <li>
                <NavLink to="/">DMCA Policy</NavLink>
              </li>
              <li>
                <NavLink to="/">Term Of Use</NavLink>
              </li>
              <li>
                <NavLink to="/">privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/">Earn money</NavLink>
              </li>
            </div>
            <div className="second_col">
              <h6>What To Watch</h6>
              <li>
                <NavLink to="/">Action</NavLink>
              </li>
              <li>
                <NavLink to="/">Animation</NavLink>
              </li>
              <li>
                <NavLink to="/">Adventure</NavLink>
              </li>
              <li>
                <NavLink to="/">Comedy</NavLink>
              </li>
              <li>
                <NavLink to="/">Thriller</NavLink>
              </li>
              <li>
                <NavLink to="/">Romance</NavLink>
              </li>
              <li>
                <NavLink to="/">Horror</NavLink>
              </li>
              <li>
                <NavLink to="/">Fantasy</NavLink>
              </li>
            </div>
            <div className="thrd-col">
              <h6>Watch Movies Online Free</h6>
              <p>
                Watch Online Movies in HD Print Quality Free Download,Watch Full
                Movies Online Bollywood Movies Download Latest Hollywood Movies
                in DVD Print Quality Free. Watch Online Movies is my hobby and i
                daily watch 1 or 2 movies online and specially the indian movies
                on their release day i\'m always watch on different websites in
                cam print but i always use google search to find the movies,then
                i decide that i make a platform for users where they can see
                HD/DVD Print Quality movies and i listed all latest movies. I
                also capture the different categories of movies like if you want
                to see Hollywood movies, or you want to see punjabi movies or
                you are interested in Bollywood movies then i have all these
                type of categories in my website. I also focus on categories of
                movies based on actress and actors , like a person want to see
                all movies of Amir khan from My website there he select category
                Amir Khan Movis list then All movies of amir khan Will be
                displayed. i provide online Full movies to watch and Free
                Download so always stay connected with our website to enjoy the
                latest movies and if you dont have time to watch just make that
                movie on download and when will you free then you will watch
                that movie in best print.
              </p>
            </div>
            <div className="fourth-col">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <p>
                Watch Online Movies in HD Print Quality Free Download,Watch Full
                Movies Online Bollywood Movies Download Latest Hollywood Movies
                in DVD Print Quality Free.
              </p>
              <p>Copyright © 2024 MOVI.PK</p>
              <button className="btn-footer">
                Download <br />
                <FaRobot className="col-icon" />
                <span> All Movie Land APK</span>
              </button>
              <p>
                Disclaimer: This site does not store any files on its server.
                All contents are provided by non-affiliated third parties.
              </p>
            </div>
            <div className="last-col first_col">
              <h6>What's Streaming</h6>
              <li>
                <NavLink to="/">What's On Netflix</NavLink>
              </li>
              <li>
                <NavLink to="/">What's On Zee5</NavLink>
              </li>
              <li>
                <NavLink to="/">What's On ALTBalaji</NavLink>
              </li>
              <li>
                <NavLink to="/">What's on Prime Video</NavLink>
              </li>
              <li>
                <NavLink to="/">What's On SonyLIV</NavLink>
              </li>
              <li>
                <a href="/">What's On MXPlayer</a>
              </li>
              <li>
                <a href="/">What's On ULLU</a>
              </li>
              <li>
                <a href="/">Earn money</a>
              </li>
            </div>
          </div>
          <div className="last-item">
            <li>7starhd.ru</li>
            <li>todaymovie.org</li>
            <li>katmoviehd.ru</li>
            <li>hdmovie2.uk</li>
            <li> movi.pk</li>
            <li>thetodaypost.com</li>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
