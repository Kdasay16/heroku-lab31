'use strict'

require('./_home.scss')

module.exports = [
  '$log',
  '$rootScope',
  '$window',
  '$location',
  'authService',
  'galleryService',
  function($log, $rootScope, $window, $location, authService, galleryService) {
    this.$onInit = () => {
      $log.debug('HomeController()')
      if(!$window.localStorage.token) {
        authService.getToken()
        .then(
          () => $location.url('/home'),
          () => $location.url('/signup')
        )
      }
      this.galleries = []

      this.fetchGalleries = () => {

        return galleryService.fetchGalleries()
        .then(galleries => {
          this.galleries = galleries
          this.currentGallery = galleries[0]
          console.log(galleries, 'galleries');
        },
        err => $log.error(err)
        )
      }

      $rootScope.$on('locationChangeSuccess', this.fetchGalleries)
      $rootScope.$on('newGalleryCreated', this.fetchGalleries)
      $rootScope.$on('updateCurrentGallery', (eve, galleryId) => {
        for(let i = 0; i < this.galleries.length; i++) {
          if(this.galleries[i]._id === galleryId) {
            this.currentGallery = this.galleries[i]
            break
          }
        }
      })
      return this.fetchGalleries()
    }
  }
]
