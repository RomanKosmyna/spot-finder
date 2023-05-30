# spot-finder

## Final Okten School project.

Main Technologies:
HTML5, CSS, JavaScript, TypeScript, Node.js, React, Next.js, Redux, Redux Toolkit, Nest.js, Prisma, PostgreSQL

Front-End Technologies:
- HTML5, CSS
- JavaScript, TypeScript
- React, Next.js
- Redux, Redux Toolkit, Axios

Back-End Techologies:
- Nest.js
- Prisma ORM
- Multer, Bcrypt, Swagger

Tools:
- Postman, Eslint, Prettier

Description:
Website about different kinds of venues. 

Users are able to create, edit and delete venues. Before being published, those venues are sent to Administrator's (from now on, Admin) personal account for review.
If they pass a review, then they are getting published on a Home page.

Since project is using Next.js 13 for its client side, it exploits built in fetch for data integration from Backend , which provides an up-to-date information about all reviewed venues.

## Main Features:

 - From user perspective:
    • Authentication, Authorization process
    • Ability to add, edit and delete venues
    • Ability to rate veunes
    • Viewing the list of establishments
    • Sorting (by rating, average check, publication date, in alphabetical order, proximity to the user)
    • Searching by name
    • Filtering by criteria (rating, type, range of average check, tag (specified by the establishment), features (Wi-Fi, parking, live music)
    • Adding an venue to favorites
    • Sending a message to the venue manager (basically a user that added a venue)
    • Logging into a personal account (with corresponding privileges)
    
- Navigation through general sections:
    • Home (All venues)
    • Filtering/Search
    • Top (with editing capabilities) + Ability to add top categories like "Best venue for weddings, corporate events, birthdays"
    • News (add promotions)
    
- Personal Account (Regular User):
    • Profile Editing
    • Adding Venue (after moderation by the venue administrator, the venue is included in the general list)
    • Editing Venue
    • Deleting Venue
    • Adding Venue News
    • Deleting Venue News
    • Favorites Tab (viewing favorites, removing from favorites)
    • My Comments Tab (list of venues with my comments)
    • My Ratings Tab (list of venues with my ratings)
    • View statistics of views within specified date ranges for personal venue
    • Messages from the venue's page (complaint or question via email)
    
- Personal Account (Administator):
    

## _Project is being optimized for all devices._
