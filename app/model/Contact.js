Ext.define('PhoneBook.model.Contact', {
    extend: 'Ext.data.Model',
    config: {
        identifier: {
            type: 'uuid'
        },
        
        fields: [
            'first_name',
            'last_name',
            'email',
            'phone',
            'cellphone'
        ]
    }
});
