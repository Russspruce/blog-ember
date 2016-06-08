import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blog');
  },

  action: {
    destroyBlog(blog) {
      blog.destroyBlog();
      this.transitionTo('index');
    }
  }
});
