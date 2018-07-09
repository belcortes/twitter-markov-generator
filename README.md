#Markov Tweet Generator

An app that generates a fake tweet based on the last 50 tweets of a given twitter user.

##Prerequisites


- [Node](https://nodejs.org/en/download/)
- [Postsgresql](https://www.postgresql.org/download/)


##Installation
1. Open terminal
2. ```$ git clone https://github.com/belcortes/twitter-markov-generator```
3. ```$ cd twitter-markov-generator```
3. ```$ yarn start```
4. Open new terminal window or tab (in same directory)
5. ```$ cd ui```
6. ```$ yarn start```
7. In your browser navigate to ```localhost:3000```
8. Follow instructions on page, and voila!

##Stack
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [pg-promise](https://github.com/vitaly-t/pg-promise) (for database handling)
- [axios](https://www.npmjs.com/package/axios) (for http requests)

##Resources
- [Botnik](http://botnik.org/apps/writer) (for inspiration)
- [Title Generator Using Markov Chains](https://www.soliantconsulting.com/blog/title-generator-using-markov-chains)
- [Create a Twitter Politician Bot With Markov Chains](https://hackernoon.com/create-a-twitter-politician-bot-with-markov-chains-node-js-and-stdlib-14df8cc1c68a)
- [Twitter Markov Chain](https://github.com/notoriaga/twitter-markov-chain)


##Next Steps
- Testing
- CSS/Styling
- Ability to delete tweet
- Adding parameter for tweet sample size


##Notes

This was an interesting app to build. I got to learn Express.js, which had been on my list of new technologies to learn, and discovered Markov chains, which is a really cool concept.

At first I only had a react client, and eventually added a backend server with Express to handle both requests to the Twitter API and database queries. Handling the twitter requests on the server eliminated issues with CORS and the need to implement a proxy.  

I didn't have prior knowledge of Markov chains or how to build them, and ended up using code from [this code sample](http://jsfiddle.net/dospromptman/pUYmd/light/). However I did make the effort to read through the code, and I now feel like I have a solid grasp on the logic necessary to create a chain. 
