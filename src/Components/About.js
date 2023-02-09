import React from "react";
import Pexels from "../assets/Pexels.mp4";
import "./About.css"

const About = () => {
  return (
    <div className="about">
      <video src={Pexels} autoPlay loop muted/>
      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ab in tenetur quibusdam eveniet quasi expedita, quo explicabo sequi, consequatur dolore officiis consectetur vero consequuntur, molestias molestiae? Magni deleniti error libero ab, possimus nisi, illum voluptates fugit tempora doloribus enim quod iste saepe, voluptate animi laudantium dolor repudiandae. Dolor, praesentium minus quasi asperiores quia sit autem cumque sint atque fugiat corrupti voluptates eius magni temporibus, quo vel distinctio. Quos, illo commodi. Numquam quod quos dicta delectus labore amet eveniet dignissimos ea nesciunt facere neque inventore rem repudiandae cum debitis aperiam nisi ipsam deserunt, consequatur minima corrupti! Similique nam laudantium qui autem tenetur quibusdam soluta quas voluptas enim, ad nemo aut quisquam atque eveniet unde voluptates itaque? Laudantium impedit nobis consequatur rem blanditiis porro, quia dolore fuga voluptate sequi itaque molestias iure, doloremque sunt iusto voluptatem autem accusantium necessitatibus ratione at vero dicta consequuntur recusandae dolorum. Cumque libero, blanditiis culpa pariatur cupiditate dolorem quos veniam consequuntur natus, alias obcaecati expedita maiores similique. Labore voluptatibus molestiae nesciunt, vitae quo ullam nisi dolorum dicta, ipsa atque sint animi ratione, dolores quibusdam odio dignissimos optio voluptatum officiis expedita numquam sit earum! Molestiae praesentium, reiciendis exercitationem consequatur, dolorem ab eveniet, obcaecati alias sed dolorum nostrum.</p>
      </div>
    </div>
  );
};

export default About;
