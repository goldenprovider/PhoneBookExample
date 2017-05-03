Ext.define('PhoneBook.view.ContactEdit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.contactEdit',

    requires: [
        'Ext.field.Text',
        'Ext.field.Email',
    ],

    config: {

        left: 0,
        top: 0,
        width: 400,
        height: 300,

        modal: true,
        hideOnMaskTap: true,

        scrollable: null,

        layout: {
            type: 'vbox',
        },

        defaults: {
            margin: '0 0 5 0',
            labelWidth: '35%'
        },

        items: [
            {
                xtype: 'textfield',
                name: 'first_name',
                label: 'First Name',
                itemId: 'firstName'
            },
            {
                xtype: 'textfield',
                name: 'last_name',
                label: 'Last Name',
                itemId: 'lastName'
            },
            {
                xtype: 'emailfield',
                name: 'email',
                label: 'Email',
                itemId: 'email'
            },
            {
                xtype: 'textfield',
                name: 'phone',
                label: 'Phone',
                itemId: 'phone'
            },
            {
                xtype: 'textfield',
                name: 'cellphone',
                label: 'Cell Phone',
                itemId: 'cellphone'
            },
            {
                xtype: 'button',
                itemId: 'save',
                text: 'Save'
            }
        ]
    }
});
