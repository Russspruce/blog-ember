import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  body: DS.attr(),
  comments: DS.hasMany('comment', { async: true})
});
