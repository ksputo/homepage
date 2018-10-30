import React from 'react'
import Tile from "grommet/components/Tile";
import Card from "grommet/components/Card";
import Heading from "grommet/components/Heading";
import Anchor from 'grommet/components/Anchor';

const GrubaEvent = ({ event }) => (
  <Tile>
      <Card
        thumbnail={<img src={event.logo.original.url}/>}
        label={<FullDate dateString={event.start.local} />}
        pad={{ horizontal: "small" }}
        contentPad={{ horizontal: "xs", vertical: "small" }}
        link={<Anchor href={event.url} label='Zobacz wydarzenie' />} 
        heading={
          <Heading tag="h6">
            {event.name.text}
          </Heading>
        }
      />
  </Tile>
);
export default GrubaEvent;

const FullDate = ({ dateString }) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();

}
