import React from 'react';
import '../App'
// import { Button } from './Button';
import '/Users/kareemmagdy/Desktop/adopt-a-pet/client/src/components/Details.css';


function Details() {
    return (
        <section id="your-trainers">
        <div class="flex-row">
          <h2 class="section-title primary-border">
            Meet The Trainers
          </h2>
        </div>
  
        <div class="trainers">
          <article class="trainer">
            <img src="./assets/images/trainer-1.jpg" alt="Arron Stephens in his workout clothes, ready to pump iron" />
            <div class="trainer-bio">
              <h3 class="trainer-name">Arron Stephens</h3>
              <h4 class="trainer-role">Speed / Strength</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!</p>
            </div>
          </article>
  
          <article class="trainer">
            <img src="./assets/images/trainer-2.jpg" alt="Joanna Gill cooling off after a work out" />
            <div class="trainer-bio">
              <h3 class="trainer-name">Joanna Gill</h3>
              <h4 class="trainer-role">Endurance</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!</p>
              </div>
            </article>
  
          <article class="trainer">
            <img src="./assets/images/trainer-3.jpg" alt="Harry Smith wearing a headband and lifting comically small pink weights" />
            <div class="trainer-bio">
              <h3 class="trainer-name">Ha∫rry "The Headband" Smith</h3>
              <h4 class="trainer-role">Strength</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!</p>
            </div>
          </article>
        </div>
      </section>

    )
}


export default Details;



