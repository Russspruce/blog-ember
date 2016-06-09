import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogPost: false,
  actions: {
    updateBlogPost() {
      this.set('updateBlogPost', true);
    },
    update(blog) {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        body: this.get('body'),
      };
      this.set('updateBlogPost', false);
      this.sendAction('update', blog, params);
    }
  }
});
