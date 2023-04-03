
import React from 'react';
import Image from "next/image";
import Navigation from './navigation';
import Aussie from "./images/australianshepherd.png"
import Selena from "./images/selena.png"
import shark from "./images/shark.png"
import turtle from "./images/turtle.png"
import unicorn from './images/unicorn.png'
import bee from "./images/bee.png"







const HomePage =()=> (

    <div className="home_container">
          <Navigation />
        <div className="hero-container">
     
        <h1>Whimsical Mind</h1>
                    <h2> Let your kids imagination run!</h2>
                    <p>With Whimsical Mind your kids can create their own story and coloring book all in one!</p>
        
            <button className="cta-btn">Find out more</button> 

        </div>
        <section className='examples-container'>
            <h3>Look at what you could create</h3>

            <div className='cards_container'>

            <article class="card">
        <div class="card-block">
          <h4 class="card-title">Silly Zeus the Australian Shepherd</h4>
        </div>
        <Image src={Aussie} ></Image>
        <div class="card-block">
          <p class="card-text">"Zeus was always in a good mood and loved to make people laugh, sometimes a little too much! She was always getting into silly, mischievous trouble. Her owner, a young woman named Gina, had to constantly keep an eye on her.
"</p>
        </div>
      </article>

      <article class="card">
        <div class="card-block">
          <h4 class="card-title">The nice shark who wanted friends</h4>
        </div>
        <Image src={shark} ></Image>
        <div class="card-block">
          <p class="card-text">"When the storm went away, Sam and the little fish returned to the reef. The other sharks saw that Sam had saved the day and accepted him as one of them.

Moral of the story: Being kind and considerate can help you make friends no matter how different you are."</p>
        </div>
      </article>

      <article class="card">
        <div class="card-block">
          <h4 class="card-title">Flash the fast turtle</h4>
        </div>
        <Image src={turtle} ></Image>
        <div class="card-block">
          <p class="card-text">"Speedy showed Flash how to do deep water dives, swim faster and reach a higher speed. At first, Flash found it difficult to keep up with Speedy who was much faster than him. But with practice and dedication, he soon began to realize that with a few tricks, he could become the fastest turtle in the pond!"</p>
        </div>
      </article>

      <article class="card">
        <div class="card-block">
          <h4 class="card-title">The friendly unicorn</h4>
        </div>
        <Image src={unicorn} ></Image>
        <div class="card-block">
          <p class="card-text">"With Daisy’s help, the little boy was able to make it back home before dark. He told his parents about Daisy the friendly unicorn and how she had guided him home. Daisy’s fame spread throughout the region and the people of the town named her the protector of their town. Everywhere she went, the townsfolk greeted her with great love and appreciation."</p>
        </div>
      </article>

      <article class="card">
        <div class="card-block">
          <h4 class="card-title">Selena the German Shepherd</h4>
        </div>
        <Image src={Selena} ></Image>
        <div class="card-block">
          <p class="card-text">"Selena the German shepherd went with the old man to help him find lost people or animals and everyone in town learned to trust her. The moral of the story is that we should always help others in need, for it’s an act of kindness that will be rewarded in the end.".</p>
        </div>
      </article>

      <article class="card">
        <div class="card-block">
          <h4 class="card-title">The sweet bumblebee</h4>
        </div>
        <Image src={bee} ></Image>
        <div class="card-block">
          <p class="card-text">"When Buzzy opened her wings, a strange light came out of it. She started hovering around in the air, emitting a beautiful golden light. The other bees were so amazed, they just stood and watched. The queen bee stepped forward and said that Buzzy had been chosen by the bee gods above to become a bee keeper.
"</p>
        </div>
      </article>
            </div>
        </section>
    </div>
)

export default HomePage;


