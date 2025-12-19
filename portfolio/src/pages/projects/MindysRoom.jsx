import Navbar from '../../components/Navbar'
import '../../styles/about.css'
import '../../styles/showcase.css'

// Import assets
import mindyConcept1 from '../../assets/mindyConcept1.png'
import mindyRoomConcept1 from '../../assets/mindyRoomConcept1.png'
import mindyRoomConcept2 from '../../assets/mindyRoomConcept2.png'
import mindyRoomConcept3 from '../../assets/mindyRoomConcept3.png'
import mindyConceptRef1 from '../../assets/mindyConceptRef1.png'
import mindyRoomConceptRef2 from '../../assets/mindyRoomConceptRef2.png'
import mindyConceptRef3 from '../../assets/mindyConceptRef3.png'
import mindyConceptRef4 from '../../assets/mindyConceptRef4.png'
import mindyFloorPlan from '../../assets/mindyFloorPlan.png'
import mindyFinalDeskTexture1 from '../../assets/mindyFinalDeskTexture1.png'
import mindyFinalDeskTexture2 from '../../assets/mindyFinalDeskTexture2.png'
import mindyTPose from '../../assets/mindyTPose.png'
import mindyFaceIdeation from '../../assets/mindyFaceIdeation.png'
import mindyFF1 from '../../assets/mindy_ff1.png'
import mindyFF2 from '../../assets/mindy_ff2.png'

import deskTurnaround from '../../assets/deskTurnaround.mp4'
import roomRenderFinal from '../../assets/roomRenderFinal.mp4'
import mindyTurnaroundFinal from '../../assets/mindyTurnaroundFINAL.mp4'
import mindyStoryboard from '../../assets/mindyStoryboard.mp4'
import mindyPlayblast1 from '../../assets/mindyPlayblast1.mp4'
import mindyPlayblast2 from '../../assets/mindyPlayblast2.mp4'

function MindysRoom() {
  return (
    <>
      <Navbar />
      
      <div className="title">
        <h1>Mindy's Room</h1>
      </div>

      <div className="container">
        {/* Video Container - Vimeo Embed */}
        <div className="video-container">
          <iframe
            src="https://player.vimeo.com/video/999675105?badge=0&autoplay=1&player_id=0&app_id=58479"
            width="1280"
            height="720"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="Mindy's Room"
          />
        </div>

        {/* Content Container */}
        <div className="content-container">
          <div className="credit">
            <p>Animation, Modeling, Character Design, Sound Effects, Background Modeling, Lighting by Catherine Azelby</p>
            <p>Made using Autodesk Maya 2024, Adobe After Effects 2024, Adobe Premiere Pro 2024, Adobe Photoshop 2024, Adobe Substance Painter 2024, Adobe Substance Sampler 2024, Advanced Skeleton 2024</p>
            <p>Sounds sourced from Freesound and Pixabay</p>
            <p>Special Thanks to Professor Bill Stout</p>
          </div>

          <div className="small-title">
            <h4>Film Festival Acceptances</h4>
            <div className="project-info-img-container">
              <img className="project-info-img" src={mindyFF1} alt="Film Festival Acceptance 1" />
              <img className="project-info-img" src={mindyFF2} alt="Film Festival Acceptance 2" />
            </div>
          </div>

          <div className="project-info-container">
            {/* Concept Art and Development */}
            <h1>Concept Art and Development</h1>
            <div className="project-info-text">
              <p>
                Animation 1 at Northeastern is a class focused on a singular project, with the semester being split into two halves. First, we spent time modeling our respective rooms and learning fundamentals of modeling with Autodesk Maya. The second half was focused on modeling our character and rigging, utilizing Maya for modeling and Advanced Skeleton for our rigs. However, before any of this, I had to develop my concept. Although the final assignment was just a character performing an action in a room, I knew I wanted to take the project a step further by creating a short film.
              </p>
              <div className="project-info-img-container">
                <img className="project-info-img-large" src={mindyConcept1} alt="Concept Art 1" />
              </div>
              <p>
                Mindy is a pre-existing original character of mine, and I knew I wanted her to be the focus of my project. For class first presentations, I referenced this piece of character art when explaining my concept. For background, Mindy is a human character cursed with her less-than-ordinary appearance.
              </p>
              <div className="project-info-img-container">
                <img className="project-info-img" src={mindyRoomConcept1} alt="Concept Art 2" />
                <img className="project-info-img" src={mindyRoomConcept2} alt="Concept Art 3" />
              </div>
              <p>
                Next, I drew concept images of what the environment should be like. I wanted to emphasize Mindy's tendency to clutter a space with her interests. Her room is filled to brim with her collections, but also a mess that emphasizes her personality as a loner.
              </p>
              <div className="project-info-img-container">
                <img className="project-info-img-large" src={mindyRoomConcept3} alt="Concept Art 4" />
              </div>
              <p>
                Finally, I put Mindy in the room to show the culmination of the overall concept. I wanted a big focus of the environment to be the dim purple lighting versus the harsh white light of the computer screen.
              </p>
              <p>When pitching the concept I described Mindy's Room as:</p>
              <div className="project-info-quote-container">
                <p>
                  Mindy is a 20-year-old college student living alone. Her dorm is keenly decorated to her interests and a mess that reveals her personality. Her clutter represents someone who enjoys the pleasure of an isolated life online rather than real social connections. When receiving a mysterious message on her computer, Mindy must make an uneasy decision.
                </p>
              </div>

              <div className="small-title">
                <h4>Reference Images</h4>
                <div className="project-info-img-container">
                  <img className="project-info-img" src={mindyConceptRef1} alt="Ref Image 1" />
                  <img className="project-info-img" src={mindyRoomConceptRef2} alt="Ref Image 2" />
                  <img className="project-info-img" src={mindyConceptRef3} alt="Ref Image 3" />
                  <img className="project-info-img" src={mindyConceptRef4} alt="Ref Image 4" />
                </div>
              </div>
            </div>

            {/* Building the Room */}
            <h1>Building the Room</h1>
            <div className="project-info-text">
              <p>
                Part of the first presentation was creating our rooms floor plan. The plan had to be to scale, taking into account the size of the different furniture pieces we wanted our room to feature. My initial floor plan was based off my own sophomore university dormitory.
              </p>
              <div className="project-info-img-container">
                <img className="project-info-img-large" src={mindyFloorPlan} alt="Floor Plan" />
              </div>

              <div className="small-title">
                <h2>Room Modeling</h2>
              </div>
              <p>
                Modeling the room and its respective furniture and objects was the first time I had undertaken a large-scale modeling project in Maya. I initially struggled with modeling, as it was a form of art creation I had never properly engaged with until this point. However, with the help of various online tutorials, I was able to create all the furniture I desired, as well as other objects that helped build the environment.
              </p>
              <video className="project-info-animatic" src={deskTurnaround} autoPlay loop muted playsInline />
              <p>
                The main set piece of my film was the desk, so I made sure that this item was the most detailed area of furniture. Mindy's personality was to be expressed through the mess of the area, highlighting her affinity towards material escapes like figurines, energy drinks, and electronics. I wanted the space to feel lived in, leaving the empty cans of drinks and messy wires of her computer to fill the space.
              </p>

              <div className="small-title">
                <h2>Room Lighting</h2>
              </div>
              <p>
                After adding textures to my desk area, I decided to add my desired purple ambience lighting for the room and intense white light of the computer screen. The initial test renders gave me a good idea of how the lighting interacted with my room's furniture.
              </p>
              <div className="project-info-img-container">
                <img className="project-info-img-large" src={mindyFinalDeskTexture1} alt="Desk Render 1" />
                <img className="project-info-img-large" src={mindyFinalDeskTexture2} alt="Desk Render 2" />
              </div>
              <p>
                I was able to follow my initial artistic vision for the look my room environment. I captured Mindy's sense for collecting, as well as the clutter and decorations that reveal aspects of her personality. For the posters that line her walls, I used various images of my old art, adjusting the colors to have them fit the aesthetic of the room.
              </p>

              <div className="small-title">
                <h2>Final Room Flythrough</h2>
              </div>
              <video className="project-info-animatic" src={roomRenderFinal} controls autoPlay loop muted playsInline />
            </div>

            {/* Making Mindy */}
            <h1>Making Mindy</h1>
            <div className="project-info-text">
              <p>
                I knew from the start of this project, translating Mindy's 2D-friendly design to a 3D medium would be a challenge. From her pitch-black hair that varies at different angles when drawing to her large coat that hides most of her body, I knew this design was not the most 3D-friendly. It was initially recommended to me by my professor that I consider changing Mindy's design to feature more tight-fitting clothing, as it would be more easier to adapt. However, this aspect of her design was something I was passionate about keeping, so I opted to keep this design quality and learn how to adapt it into an approachable 3D model.
              </p>
            </div>
            <div className="project-info-img-container">
              <img className="project-info-img-large" src={mindyTPose} alt="Mindy TPose Reference drawing" />
            </div>
            <div className="project-info-text">
              <p>
                Finalizing Mindy's design for this project was a difficult task within itself. I always wanted to rework her design, and this project gave me the opportunity to really ideate. I wanted to land on a design that seems otherworldly and uncanny, but still approachable and cute.
              </p>
            </div>

            <div className="small-title">
              <h2>Mindy Design Ideations</h2>
            </div>
            <div className="small-title">
              <h4>Facial Ideations</h4>
            </div>
            <div className="project-info-img-container">
              <img className="project-info-img-large" src={mindyFaceIdeation} alt="Mindy Face Ideation" />
            </div>

            <div className="small-title">
              <h2>3D Modeling Mindy</h2>
            </div>
            <div className="project-info-text">
              <p>
                There were several difficulties when it came to translating Mindy to a 3D format. For one, her hair from a front and side profile in 2D does not work in a 3D space. When drawing her, I would make sure her hair tufts stuck out when viewing her from both of these angles. However, when working in 3D, this same affect isn't technically possible.
              </p>
            </div>
            <video className="project-info-animatic" src={mindyTurnaroundFinal} autoPlay loop muted playsInline />
            <div className="project-info-text">
              <p>
                To deal with this, I thought of other 3D films that had to deal with this issue. I thought of{' '}
                <a href="https://youtube.com/shorts/hKPF6__bvmc?si=W5i-QSnik_CCRXD" target="_blank" rel="noopener noreferrer" className="highlight-link">
                  The Peanuts Movie
                </a>{' '}
                and how they had to adapt their 3D models in a way that matched Charlie Brown's 2D design. Although my skills were not at a level I felt confident creating a 3D model that could update itself at any angle, I did find a workaround that would fit my project. I made the textures for Mindy's hair pitch black, absorbing minimal light. I created 3 hair tufts, two that protrude from a front facing view, and one that protrudes from a side facing view. This way, when viewed at either of these angles, the 3D design would mimic that of my 2D one, lending itself to a more appealing look for Mindy's character.
              </p>
            </div>

            {/* Storyboard and Animation */}
            <h1>Storyboard and Animation</h1>
            <div className="project-info-text">
              <p>
                After finalizing Mindy's room and model, I had to plan how I would go about animating my film. I wanted to be sure that my film could get across a sense of horror, suspense, and mystery. With only a week to animate, I created a storyboard that got across these desired aspects, while keeping the time short and animation minimal. I did not want to trap myself by planning a project that would require complicated animation, so I aimed to use camera movements to portray the movement of Mindy. However, I did want to practice my abilities for complicated animation, so I did incorporate a short walk cycle into the end film.
              </p>
            </div>
            <video className="project-info-animatic" src={mindyStoryboard} controls autoPlay loop muted playsInline />
            <div className="project-info-text">
              <p>
                Perhaps one of the most important scenes of any film is an establishing shot, and it was crucial that I used this aspect of filmmaking with the short time I had. I decided to start the film from the perspective of Mindy's computer, as if it is watching Mindy's room, and stops its gaze once Mindy enters the room. I also created a title card, which would serve as both the name of my film and clueing in the audience to the fact that we inside Mindy's space.
              </p>
            </div>
            <video className="project-info-animatic" src={mindyPlayblast1} controls autoPlay loop muted playsInline />
            <div className="project-info-text">
              <p>
                With the suggestion of my professor, I decided to introduce Mindy to the film with her shadow being cast against the wall. To achieve this effect, I slightly had to manipulate the lighting and spacing of the scene. For one, the door entrance to the wall would not actually cast a shadow from where a character would walk in. Also, there was no light emitting from the side of the room that would be needed to cast the desired shadow. To rectify this, I utilized a model of Mindy that would be invisible to the render, but still cast a shadow when affected by light. I also added small but intense light that would illuminate the wall where I wanted the shadow to be cast. With these adjustments, I was able to achieve my desired effect, even if they technically broke the laws of physics.
              </p>
            </div>
            <video className="project-info-animatic" src={mindyPlayblast2} controls autoPlay loop muted playsInline />
            <div className="project-info-text">
              <p>
                This idea of breaking physics to create the ideal scene was continued into the next shot. To establish the fact that Mindy is returning home from school, I included the dropping backpack. In a show of exhaustion, she takes a deep breath and heads into her room. In this shot, I wanted to show the door closing, so the transition of lighting in Mindy's room is understandable to the audience. However, based on the layout of the room, Mindy's door would shut onto her body. For timing efficiency, I found a workaround to this fact. Rather than altering the timing so Mindy walks away before the door closes, I decided to keep the scene short to avoid unnecessary render times. To do this, I made the closing door invisible to the render, but it still effecting the environment as it closed. This way, both Mindy's actions in the door way and the closing of the door could occur in one concurrent scene without confusing the viewer.
              </p>
              <p>
                Overall, I learned so much through the creation of Mindy's Room. From modeling, rigging, texturing, lighting, to animation; this project covered a variety of skills in using Autodesk Maya. From this project, I've felt confident using Maya ever since. I am excited to continue to use Maya for animation projects, and I look forward to creating more stories through 3D animation in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MindysRoom