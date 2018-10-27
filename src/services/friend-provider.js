import eventProviders from '../constants/eventProviders';

import meetjs from '../images/meetjs-logo-white-katowice.svg';
import microsoft from '../images/microsoft.png';
import azure from '../images/azure.png';
import qa from '../images/quality-meetup.png';
import angular from '../images/angular_meetup.png';
import antyrama from '../images/logo-antyrama.svg';
import meetjsInvert from '../images/meetjs.png';

export default function getFriends() {
    return [
        {
            name: 'meetjs',
            logo: { image: meetjs, invertImage: meetjsInvert, url: 'https://katowice.meetjs.pl/' },
            eventProviderUrl: 'https://grubait.azurewebsites.net/meetup/meetjs-katowice/events',
            eventProviderName: eventProviders.meetup
        },
        {
            name: 'microsoft',
            logo: { image: microsoft },
            eventProviderUrl: 'https://grubait.azurewebsites.net/meetup/Śląska-Grupa-Microsoft-Meetup/events',
            eventProviderName: eventProviders.meetup
        },
        {
            name: 'azure',
            logo: { image: azure },
            eventProviderUrl: 'https://grubait.azurewebsites.net/meetup/Microsoft-Azure-Users-Group-Poland/events',
            eventProviderName: eventProviders.meetup,
            additionalFilters: ['KTW', 'GLC']
        },
        {
            name: 'qa',
            logo: { image: qa },
            eventProviderUrl: 'https://grubait.azurewebsites.net/meetup/Quality-Meetup/events',
            eventProviderName: eventProviders.meetup
        },
        {
            name: 'angular',
            logo: { image: angular },
            eventProviderUrl: 'https://grubait.azurewebsites.net/meetup/Angular-Silesia/events',
            eventProviderName: eventProviders.meetup
        },
        {
            name: 'antyrama',
            logo: { image: antyrama, url: 'http://www.a24.antyrama.org' }
        }
    ];
}