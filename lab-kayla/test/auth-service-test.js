//listen to lecture after first break about the setup
'use strict'

const expect = require('chia').expect

describe('Auth Service', function() {
  beforeEach(done => {
    angular.mock.module('cfgram')//cfgram  == what you call it in entry.js
    angular.mock.inject(($httpBackend, $window, $rootScope, authService) => { //any dependencies needed for the testing
      this.$httpBackend = $httpBackend
      this.$window = $window
      this.$rootScope = $rootScope
      this.authService = authService
      done()
    })
  })

  describe('authService.getToken', () => { //unit test
    it('should return a token', done => {
      this.authService.token = null
      this.$window.localStorage.setItem('token', 'test token')

      this.authService.getToken()
      .then( token => {
        expect(token).to.equal(this.$window.localStorage.token) //or ('test token')
      })
      .catch( err => {
        expect(err).to.equal(null)
      })
      done()
    })
  })
})
