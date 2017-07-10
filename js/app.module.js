angular
    .module('SmallFirebaseApp', ['firebase'])
    .constant('firebaseConfig', {
        apiKey: "AIzaSyA2snvldJm9sPJT-0FCSnxnPeaB3jQEMTc",
        authDomain: "webapps-9058d.firebaseapp.com",
        databaseURL: "https://webapps-9058d.firebaseio.com",
        projectId: "webapps-9058d",
        storageBucket: "webapps-9058d.appspot.com",
        messagingSenderId: "668287105690"
    })
    .run(firebaseConfig => firebase.initializeApp(firebaseConfig))
    .controller('ContactCtrl', function($scope, $firebaseObject, $firebaseArray){
        const dbRef = firebase.database().ref().child('contacts')
        $scope.contactList = $firebaseArray(dbRef)
        this.getBlankContact = () => ({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            birthday: ''
        })
        $scope.newContact = this.getBlankContact()
        $scope.addContact = () => {
            $scope.contactList.$add($scope.newContact);
            $scope.newContact = this.getBlankContact()
        }
        $scope.saveContact = contact => $scope.contactList.$save(contact)
        $scope.removeContact = contact => $scope.contactList.$remove(contact)
    })