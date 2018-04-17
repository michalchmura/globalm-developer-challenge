import DS from 'ember-data';

export default DS.Model.extend({
  fullname: DS.attr('string'),
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  email: DS.attr('string'),
  avatar_path: DS.attr('string'),
  phone_mobile: DS.attr('string'),
  location: DS.attr('string'),
  country: DS.attr('string'),
  locations_interested_in: DS.attr(),
  countries_interested_in: DS.attr(),
  skills: DS.attr(),
  github_profile: DS.attr(),
  linkedin_profile: DS.attr(),
});
