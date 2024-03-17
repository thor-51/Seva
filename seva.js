const featuredSpeaker = document.getElementById('featured-speakers');
const featureImgSrc = document.querySelectorAll('.speaker');
const featuredSpeakerData = [
  {
    imgSrc: 'nice.webp',
    fullName: 'Reema Devi',
    speakerDescrition: 'Problem of Arthritis',
    paragrapheContent: "My abilities are greater than my disabilities.",

  },
  {
    imgSrc: 'nice.webp',
    fullName: 'Joy Roy',
    speakerDescrition: 'Patient with Vision Impairment',
    paragrapheContent: "I embrace my differences; they make me unique.",

  },
  {
    imgSrc: 'nice.webp',
    fullName: 'Harpreet Brar',
    speakerDescrition: 'Epilepsy patient',
    paragrapheContent: "My disability is part of me, but it doesn't define me.",

  },
  {
    imgSrc: 'nice.webp',
    fullName: 'Chand Singh',
    speakerDescrition: "Alzheimer's patient",
    paragrapheContent: "I can achieve anything I set my mind to.",

  },
  {
    imgSrc: 'nice.webp',
    fullName: 'Sunil Garg',
    speakerDescrition: 'Sceloris patient',
    paragrapheContent: "I am strong, resilient, and unstoppable.",

  },
  {
    imgSrc: 'nice.webp',
    fullName: 'Asha Sen',
    speakerDescrition: 'Deaf patient',
    paragrapheContent: "I focus on my abilities, not my limitations.",

  },
];

featuredSpeaker.innerHTML = `
<h1>Featured Blogs</h1>
          <div class="featured-speakers">
            <div class="feature-speaker">
              <figure>
              <img
                  src="${featureImgSrc.src = featuredSpeakerData[0].imgSrc}"
                  alt="speaker one"
                  class="speaker"
                  id="featured-speaker-img"
                />
              </figure>
              <div>
                <h3>${featuredSpeakerData[0].fullName}</h3>
                <p>
                  <span class="speaker-description"> <em>${featuredSpeakerData[0].speakerDescrition}</em> </span> <br>
                  ${featuredSpeakerData[0].paragrapheContent}
                </p>
              </div>
            </div>
            <div class="feature-speaker">
              <figure>
                <img
                  src="${featureImgSrc.src = featuredSpeakerData[1].imgSrc}"
                  alt="speaker two"
                  class="speaker"
                />
              </figure>
              <div>
              <h3>${featuredSpeakerData[1].fullName}</h3>
              <p>
              <span class="speaker-description"> <em>${featuredSpeakerData[1].speakerDescrition}</em> </span> <br>
                ${featuredSpeakerData[1].paragrapheContent}
              </p>
              </div>
            </div>
            <div class="feature-speaker see-feature">
              <figure>
                <img
                  src="${featureImgSrc.src = featuredSpeakerData[2].imgSrc}"
                  alt="speaker three"
                  class="speaker"
                />
              </figure>
              <div>
              <h3>${featuredSpeakerData[2].fullName}</h3>
              <p>
              <span class="speaker-description"> <em>${featuredSpeakerData[2].speakerDescrition}</em> </span> <br>
                ${featuredSpeakerData[2].paragrapheContent}
              </p>
              </div>
            </div>
            <div class="feature-speaker see-feature">
              <figure>
                <img
                  src="${featureImgSrc.src = featuredSpeakerData[3].imgSrc}"
                  alt="speaker four"
                  class="speaker"
                />
              </figure>
              <div>
              <h3>${featuredSpeakerData[3].fullName}</h3>
              <p>
              <span class="speaker-description"> <em>${featuredSpeakerData[3].speakerDescrition}</em> </span> <br>
                ${featuredSpeakerData[3].paragrapheContent}
              </p>
              </div>
            </div>
            <div class="feature-speaker see-feature">
              <figure>
                <img
                  src="${featureImgSrc.src = featuredSpeakerData[4].imgSrc}"
                  alt="speaker five"
                  class="speaker"
                />
              </figure>
              <div>
              <h3>${featuredSpeakerData[4].fullName}</h3>
              <p>
              <span class="speaker-description"> <em>${featuredSpeakerData[4].speakerDescrition}</em> </span> <br>
                ${featuredSpeakerData[4].paragrapheContent}
              </p>
              </div>
            </div>
            <div class="feature-speaker">
              <figure>
                <img
                  src="${featureImgSrc.src = featuredSpeakerData[5].imgSrc}"
                  alt="speaker six"
                  class="speaker"
                />
              </figure>
              <div>
              <h3>${featuredSpeakerData[5].fullName}</h3>
              <p>
              <span class="speaker-description"> <em>${featuredSpeakerData[5].speakerDescrition}</em> </span> <br>
                ${featuredSpeakerData[5].paragrapheContent}
              </p>
              </div>
            </div>
          </div>
        
`;