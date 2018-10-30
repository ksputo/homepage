export default function fetchEventsFromEventbrite() {
    const endpoint = "https://grubait.azurewebsites.net/eventbrite/organizers/17671110911/events?only_public=true&order_by=start_desc";
    return fetch(endpoint)
        .then(response => response.json())
        .then(data => {
           return data.events;
        });
}
