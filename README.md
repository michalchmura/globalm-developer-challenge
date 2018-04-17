# ![Global M logo](https://www.global-m.co.uk/images/logo-full-black-4535cc94bc594e8e7492fbb737a515ef.png) 

# [Global {M}](https://www.global-m.co.uk) Developer Challenge

- **If you're stuck at any point, don't hesitate to contact me at `michal@global-m.co.uk`.**

## Dependencies

#### Server:

- Server uses **Node.js** `v7.7.1` (you can quickly switch to project's node version with `nvm use`, check `.nvmrc` and `nvm` if you are not familiar with it).

- Server code requires **MongoDB** instance running on your localhost (you can adjust the parameters inside `server/config.js` file).

#### Client:

- To run Client code, it requires to have `ember-cli` `bower` and `watchmen` installed globally.
Check [Ember dev guide]([!https://ember-cli.com/user-guide/]) for details.

## Starting it up

1. There's a seed generator script. Run it first (`babel-node server/seed.js`) to populate your database!

2. Install **server** dependencies:
  2a. Navigate to **_`server`_** folder:
  2b. `npm install`

3. Install **client** dependencies:
  3a. Navigate to **_`client`_** folder:
  3b. `npm install`
  3c. `ember install semantic-ui-ember@2.0`
  3d. `ember generate semantic-ui-ember`

4. To run server simply type `npm start` inside _`server`_ folder.

5. To run client simply type `npm start` inside _`client`_ folder.

6. To run tests: `@TODO: configure it`.

---
## Challenge tasks:

#### General guidelines:
- Utilise [**Semantic UI**](https://semantic-ui.com/) for all of your views (you should install Semantic UI from CLI - see points `3a-3d` in _Starting it up_ section).
- Make sure that all endpoints are optimised.
- Use testing suite of your choice.
- Code **doesn't** have to have 100% test coverage!
- **If you're stuck at any point, don't hesitate to contact me at `michal@global-m.co.uk`.**

#### Tasks for Client:
1. Create all _(it's best to utilise scaffold generators)_ resources (routes, controllers, models, views, components, etc) needed to CRUD any given candidate using vanilla `ember-data`.
   - Validate form for valid email, require few fields
   - Add visual cues _(message/alert/notification?)_ that action was successful (e.g. model created, model updated, model deleted).

2. Create basic search functionality - _search by name? search by skills? search by locations?_

3. Install [ember-concurrency](http://ember-concurrency.com/docs/introduction/) add-on.
4. Generate **new route** and recreate steps 1-2 utilising `ember-concurrency`.
   - _In the end, there should be **2 independent** approaches showcasing the same functionality._  
   - Utilise `ember-concurrency` states and add visual cues - _is content loading? did you restart the search task?_

5. Create few Acceptance, Unit and Integration tests _(1/2 each is enough; the code **doesn't** have to be 100% covered!)_.

##### Bonus tasks:
- Pagination.
- Utilise `ember-parachute` for improved query params.
- Basic authentication (Local/Gmail/LinkedIn/GitHub OAuth - _pick one_)

####  Tasks for Server:
1. Finish up remaining controller methods for CRUD functionality.
2. Create few Integration and Unit tests _(1/2 each is enough, the code **doesn't** have to be 100% covered!)_.

##### Bonus tasks:
- Pagination.
- Basic authentication (Gmail/LinkedIn/GitHub OAuth - _pick one_) and endpoint access control.
- Utilise Elastic Search.

---

### Tips:

* **Useful libraries:**
  - `ember-truth-helpers`
  - `ember-cli-string-helpers`
  - `ember-changeset`
  - `ember-changeset-validations`
  - `ember-notify`
  - `ember-simple-auth`
  - `torii`
  - `underscore` and `underscore.string`
