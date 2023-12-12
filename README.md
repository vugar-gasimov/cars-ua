
# Cars-Ua

## Overview
Cars-Ua is a platform designed for individuals seeking to rent cars in Ukraine. We offer a wide range of vehicles, simplified filtering options based on price, brand, and mileage, and an easy-to-use favorite cars section.

## Usage

The platform is powered by mockapi.io, housing a catalog of 32 cars. On initial load, 12 cars are displayed, ensuring efficient data handling. Additional cars can be fetched in batches of 12 by clicking the 'Load More' button located below the car list.

### Interaction Features

- **Like Functionality:** Clicking the heart icon automatically adds a car to your favorites. A PUT request is sent to the server, toggling the default 'unliked' status to 'liked'.
  
- **Detailed Information:** By clicking the 'Learn More' button on a car card, users can access comprehensive details about a specific car, including the rental company's phone number.

- **Filtering:** Simplify decision-making by filtering cars based on price range, mileage range, brand, or a combination of these criteria.

- **Responsive Design:** Irrespective of screen sizes, the platform ensures ease of navigation. A burger menu facilitates easy access to different pages.

### Future Enhancements

We're looking to enhance user experience by incorporating animations and adding simple authorization features for personalized 'liked' car lists.

## Configuration

Upon initiating the application, users start from the home page, providing essential information about our services. The default view showcases 12 cars, and the favorite section remains empty until users add cars to their favorites.

## Dependencies
- HTML/CSS
- JavaScript
- React/Redux Toolkit
- React Router Dom
- React Select
- Axios

## Contributing

If you're interested in contributing, reach out with your ideas at vuqar5qasimov@gmail.com. We welcome code contributions, bug fixes, design enhancements, and feature suggestions.

---

Your feedback and contributions are highly appreciated!
