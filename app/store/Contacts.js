Ext.define('PhoneBook.store.Contacts', {
    extend: 'Ext.data.Store',

    requires: [,
        'PhoneBook.model.Contact',
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        model: 'PhoneBook.model.Contact',
        autoLoad: true,

        proxy: {
            type: 'localstorage',
            id: 'phoneBookContactKey'
        }
    }
});
