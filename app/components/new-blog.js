import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false;
  actions: {
    blogPostShow() {
      this.set('addNewRental', true);
    }
  }
});
