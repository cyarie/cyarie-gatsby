import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import About from 'aboutMe';
import ResumeParent from 'resumeParent';
import WorkWithMe from 'workWithMe';

class HomeNavTabs extends Component {
  render() {
    return (
      <Tabs defaultActiveKey={1} id="nav-tabs">
        <Tab eventKey={1} title="About me">
          <About/>
        </Tab>
        <Tab eventKey={2} title="Previous Work">
          <ResumeParent/>
        </Tab>
        <Tab eventKey={3} title="Work with me">
          <WorkWithMe/>
        </Tab>
      </Tabs>
    )
  }
}

export default HomeNavTabs;