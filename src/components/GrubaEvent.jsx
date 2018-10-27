import React from 'react'
import Tile from "grommet/components/Tile";
import Card from "grommet/components/Card";
import Heading from "grommet/components/Heading";
const GrubaEvent = ({ event }) => (
  <Tile>
    <a href={event.url} target='_blank'>
      <Card
        thumbnail={<img src={event.logo.original.url}/>}
        label={<FullDate dateString={event.start.local} />}
        pad={{ horizontal: "small" }}
        contentPad={{ horizontal: "xs", vertical: "small" }}
        heading={
          <Heading tag="h6">
            {event.name.text}
          </Heading>
        }
      />
    </a>
  </Tile>
);
export default GrubaEvent;

const FullDate = ({ dateString }) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();

}
