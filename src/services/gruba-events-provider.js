export default function fetchEventsFromEventbrite(events) {
    const endpoint = "https://grubait.azurewebsites.net/eventbrite/organizers/17671110911/events?order_by=start_desc";
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
           return events = data.events;
        });
        
}