'use strict'

require('./_upload-pic.scss')

module.exports = {
  template: require('./upload-pic.html'),
  controllerAs: 'uploadPicCtrl',
  bindings: {
    gallery: '<'
  },
  controller: [
    '$log', 'picService', function($log, picService) {
      this.$onInit = () => {
        $log.log('uploadPicController initialized')
        this.pic = {}

        this.uploadPic = () => {
          picService.uploadPic(this.gallery, this.pic)
          .then(() => {
            this.pic.name = null
            this.pic.description = null
            this.pic.file = null
          },
          err => $log.error(err)
          )
        }
      }
    }
  ]
}
