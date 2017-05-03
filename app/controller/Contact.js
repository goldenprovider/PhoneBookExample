Ext.define('PhoneBook.controller.Contact', {
    extend: 'Ext.app.Controller',

    requires: [
        'PhoneBook.view.ContactEdit'
    ],

    config: {
        profile: Ext.os.deviceType.toLowerCase(),
        refs: {
            contactList: 'contactList'
        },
        control: {
            'contactList': {
                activate: 'onActivate',
                itemtap: 'onSelectContact'
            },
            'container button[itemId=addContact]' : {
                tap : 'onAddContact'
            },
            'contactEdit button[itemId=save]' : {
                tap : 'onSaveContact'
            }
        }
    },

    onActivate: function() {
    },

    onAddContact: function(button) {

        var contactForm = Ext.Viewport.down('contactEdit');

        if (!contactForm) {
            contactForm = Ext.widget('contactEdit');
        }

        var width = ((window.innerWidth > 0) ? window.innerWidth : screen.width) - 10;
        width = width > 400 ? 400 : width;
        contactForm.setWidth(width);

        contactForm.reset();
        contactForm.showBy(button);

    },

    onSaveContact: function(button) {

        var form = button.up('panel');
        //get the record
        var record = form.getRecord();
        //get the form values
        var values = form.getValues();
        //if a new contact
        if (!record) {
            var newRecord = new PhoneBook.model.Contact(values);
            Ext.getStore('Contacts').add(newRecord);
        }
        //existing contact
        else {
            record.set(values);
        }
        form.hide();

        //save the data to the Web local Storage
        Ext.getStore('Contacts').sync();
    },

    onSelectContact: function(view, index, target, record, event) {
        if (event.target.type == 'button') {

            Ext.getStore('Contacts').remove(record);
            Ext.getStore('Contacts').sync({
                success: function(batch, options) {
                    var contactList = Ext.Viewport.down('contactList');
                    if (contactList) {
                        var selections = contactList.getSelection();
                        contactList.deselect(selections);
                    }
                }
            });

        } else {

            var contactForm = Ext.Viewport.down('contactEdit');

            if (!contactForm) {
                contactForm = Ext.widget('contactEdit');
            }

            var width = ((window.innerWidth > 0) ? window.innerWidth : screen.width) - 10;
            width = width > 400 ? 400 : width;
            contactForm.setWidth(width);

            contactForm.setRecord(record);
            contactForm.showBy(target);

        }
    }
});
