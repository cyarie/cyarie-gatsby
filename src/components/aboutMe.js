import React from 'react';

const About = () => {
  const styles = {
    'margin-top': '5px'
  };
  return (
    <div className="row">
      <div className="col-md-12 content">
        <div className="inline-header">
          <strong>I am a full-stack senior software developer at Aledade,</strong> a GV-backed startup in Bethesda, MD.
          <div style={{marginTop: '15px'}}>
            <p>
              My current work involves acting as the lead UI/UX developer on a Flask and AngularJS-based
              application -- with a serving of D3 and a whole lotta testing -- designed to help other Aledaders make better
              decisions around initiative prioritization. As part of that, I work within a cross-functional team that
              includes designers, data warehouse engineers, analysts, and other stakeholders to build value-delivering
              products. As an outcome of this work, we've provided business stakeholders and other decision-makers with
              high-impact, easy-to-understand views into initiative progress that helps us better serve our doctors and
              our patients.
            </p>
          </div>
        </div>
        <div style={{marginTop: '15px'}}>
          <p>Previous work includes doing full-stack development for the Democratic National Committee, where I...</p>
          <ul>
            <li>Built software for using Twitter to track instances of voter suppression and polling-place issues</li>
            <li>Collaborated to design and build an application that enabled over 80,000 voters in Florida to request vote-by-mail ballots via email</li>
            <li>Completely re-engineered the DNC Digital Team's analytics application</li>
          </ul>
          <p>
            I am comfortable working up and down the entire stack -- starting from the front-end, and working all the
            way down to infrastructure planning. I'm also experienced in working with everyone -- from business stakeholders
            to designers -- and in turning user research, mockups, and requirements into usable and performant software.
          </p>
          <p>I am available for political and other non-health care technology consulting.</p>
        </div>
      </div>
    </div>
  )
};

export default About;