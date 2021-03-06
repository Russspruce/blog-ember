import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogPostShow() {
      this.set('addNewBlog', true);
    },

    sav1e() {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        body: this.get('body'),
      };
      this.set('addNewBlog', false);
      this.sendAction('sav2e', params);
    }
  }
});
