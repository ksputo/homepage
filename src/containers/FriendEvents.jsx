import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Spinning from 'grommet/components/icons/Spinning';

import friendProvider from '../services/friend-provider';
import friendEventsProvider from '../services/friend-events-provider';
import { forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import Subpage from '../components/Subpage';
import SubpageSection from '../components/SubpageSection';
import MenuWrapped from '../components/MenuWrapped';

class FriendEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        forkJoin(friendEventsProvider(friendProvider))
            .subscribe(x => {
                this.setState({
                    events: [...this.state.events, ...x].reduce((accumulated, current) => [...accumulated, ...current])
                });
            });
    }

    render() {
        console.log(this.state);
        return (
            <MenuWrapped>
                <Subpage title='Nadchodzące wydarzenia kamratów' className='friend-events'>
                    {
                        this.state.events.length > 0
                            ? <Tiles fill={false}
                                className='friend-events__tiles'
                                flush={false}>
                                {this.state.events.map(event => <div className='friend-events__event' key={`event-${event.name}`}><Tile>
                                    <a href={event.link} target='_blank'>
                                        <Card thumbnail={event.image}
                                            heading={event.name}
                                            label={event.group} />
                                    </a>
                                </Tile></div>)}
                            </Tiles>
                            : <Spinning size='large' />
                    }
                </Subpage>
            </MenuWrapped>
        );
    }
}

export default FriendEvents;
