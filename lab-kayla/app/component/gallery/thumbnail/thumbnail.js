'use strict'

require('./_thumbnail.scss')

module.exports = {
  template: require('./thumbnail.html'),
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<', // < tells angular one-way data binding
    gallery: '<'
  },
  controller: [
    '$log',
    'picService',
    function($log, picService) {
      this.$onInit = () => {
        $log.debug('thumbnailCtrl')

        this.deletePic = () => {
          $log.debug('#thumbnailCtrl.deletPic')

          picService.deletPic(this.gallery, this.pic)
        }
      }
    }
  ]
}
