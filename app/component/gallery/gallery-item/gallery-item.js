'use strict'

require('./_gallery-item.scss')

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  controller: ['$log', '$rootScope', 'galleryService',
    function($log, $rootScope, galleryService) { // eslint-disable-line
      this.$onInit = () => {
        $log.debug('#Gallery Item Controller')

        this.showEditGallery = false
        this.daysSince = new Date() - new Date(this.gallery.created)

        this.makeCurrentGallery = () => {
          $log.log('ran the thing')
          $rootScope.$emit('updateCurrentGallery', this.gallery._id)
        }
        this.deleteGallery = () => {
          return galleryService.deleteGallery(this.gallery._id)
        }
      }
    }],

  bindings: {
    gallery: '<',
  }
}
