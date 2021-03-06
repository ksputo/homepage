import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { LocalDate } from 'js-joda';

import eventProviders from '../constants/eventProviders';


export default function getEvents(getFriends) {
    return getFriends()
        .filter(friend => friend.eventProviderUrl)
        .map(friend => {
            return ajax({
                url: friend.eventProviderUrl,
                method: 'GET',
                crossDomain: false
            }).pipe(map(data => {
                switch (friend.eventProviderName) {
                    case eventProviders.eventbrite:
                        return data.response.events.map(event => ({

                            name: event.name.text,
                            link: event.url,
                            group: friend.name,
                            image: friend.logo.image,
                            date: LocalDate.parse(event.start.local).format(DateTimeFormatter.ofPattern('dd MM yyyy')),
                            time: LocalDate.parse(event.start.local).format(DateTimeFormatter.ofPattern('HH:ii'))
                        }));
                    case eventProviders.meetup:
                        return data.response
                            .filter(event => friend.additionalFilters
                                ? friend.additionalFilters.some(filter => event.name.includes(filter))
                                : true)
                            .map(event => ({
                                name: event.name,
                                link: event.link,
                                group: event.group.name,
                                image: friend.logo.image,
                                date: event.local_date,
                                time: event.local_time
                            }));
                }
            }));
        });
}