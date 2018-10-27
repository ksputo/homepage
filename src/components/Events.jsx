import React, { Component } from "react";
import GrubaEvent from "../components/GrubaEvent";
import Section from "./Section";
import Tiles from "grommet/components/Tiles";
import Box from "grommet/components/Box";

class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  componentDidMount() {
    this.fetchEventsFromEventbrite();
  }
  fetchEventsFromEventbrite() {
    const endpoint = "https://grubait.azurewebsites.net/eventbrite/organizers/17671110911/events?order_by=start_desc";
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        this.setState(
          { events: data.events }
        )
      }
      );
  }
  render() {
    return (
      <Section color="white" title="Nasze wydarzenia" className='section-events'>
        <Box
          className="footer-cards-container"
          pad={{ vertical: "medium" }}
          size={{ width: "xxlarge" }}
          direction="row"
        >
          <Tiles fill>
            {
              this.state.events.map(event => {
                return <GrubaEvent event={event} />
              })
            }
          </Tiles>
        </Box>
      </Section>
    )
  }
}


export default Events;
