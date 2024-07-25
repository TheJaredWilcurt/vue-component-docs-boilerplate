import YourLibraryButton from '@/components/YourLibraryButton.vue';

export {
  YourLibraryButton
};

export default {
  install: function (app) {
    app.component('YourLibraryButton', YourLibraryButton);
  }
};
