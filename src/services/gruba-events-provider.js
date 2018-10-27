export default function fetchEventsFromEventbrite() {
    const endpoint = "https://grubait.azurewebsites.net/eventbrite/organizers/17671110911/events?order_by=start_desc";
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
           events: data.events;
        });
        
}